const { User } = require('../models');
const { signToken,AuthenticationError } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (_, _args, context) => {
      console.log('me query called');
      if (context.user) {
        try {
          const userData = await User.findOne({ _id: context.user._id });
          console.log('User data:', userData);
          return userData;
        } catch (error) {
          console.error('Error in me resolver:', error);
          throw new Error('Error fetching user data');
        }
      } else {
        console.log('User not logged in');
        throw new Error('Not logged in');
      }
    },
  },
  
  Mutation: {
    // User login
    login: async (_, { email, password }) => {
      const user = await User.findOne({ email });
      if (!user) {
        throw  AuthenticationError('Incorrect email');
      }
      const correctPw = await user.isCorrectPassword(password);
      console.log('Correct password:', password);
      if (!correctPw) {
        throw  AuthenticationError('Incorrect password');
      }
      const token = signToken(user);
      return { token, user };
    },

    // Add a user
    addUser: async (_, args) => {
      try {
        const user = await User.create(args);
        const token = signToken(user);
        return { token, user };
      } catch (error) {
        console.error("Error adding user:", error);
        throw new Error('Error creating user');
      }
    },
    // Save a book
    saveBook: async (_, { input }, context) => {
      if (context.user) {
        const updatedUser = await User.findByIdAndUpdate(
          { _id: context.user._id },
          { $push: { savedBooks: input } },
          { new: true }
        ).populate('savedBooks');
        return updatedUser;
      }
      throw AuthenticationError('Not logged in');
    },

    // Remove a book
    removeBook: async (_, { bookId }, context) => {
      if (context.user) {
      
          const updatedUser = await User.findByIdAndUpdate(
            { _id: context.user._id },
            { $pull: { savedBooks: { bookId } } },
            { new: true }
          );
          return updatedUser;
        
      }
      throw AuthenticationError('Not logged in');
    },
  },
};

module.exports = resolvers;
