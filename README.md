# Google Book Quest

## Introduction 📘

Google Book Quest is a dynamic application designed to satiate the appetites of avid readers searching for new literature. It leverages the power of the MERN stack alongside GraphQL with Apollo Server to provide a seamless and performant experience, allowing users to save their favorite book searches and maintain a list for future reading.

## Project Overview 🌍

Transitioned from a RESTful API to a more modern GraphQL API, this application stands as a testament to the evolving demands of web development. The refactoring to Apollo Server ensures data is fetched and modified efficiently, meeting the high standards of modern user expectations.

### Objectives 🎯

- Enable robust book searching using the Google Books API.
- Provide a personalized experience by allowing users to save book searches.
- Enhance performance by transitioning from RESTful API practices to GraphQL API.

## Technical Stack 🛠️

- **React**: For a dynamic and responsive front-end.
- **GraphQL**: To handle queries and mutations effectively.
- **Apollo Server**: To connect the React front end with the GraphQL API.
- **MongoDB**: As the database to store user data and book searches.
- **Node.js/Express.js**: For the server and API.

## Features 🌟

- Search for books via the Google Books API.
- User authentication for personalized experiences.
- Save and manage a personal book list.
- Deployed on Heroku with MongoDB Atlas integration.

## Development Process 💻

### Setting up Apollo Server
Implementation of GraphQL queries and mutations to replace the traditional REST API endpoints.

### Authentication Update
Modification of the existing authentication middleware to ensure compatibility with GraphQL API.

### Creating Apollo Provider
Setup of the Apollo Provider to enable communication between the React front end and Apollo Server.

### Deployment
Deployment of the application on Heroku with a MongoDB database using MongoDB Atlas for persistent data storage.

## Code Structure 📁

- `client`: Contains React front-end components and pages.
- `server`: Houses the back-end logic including Apollo Server setup and database models.

## GETTING STARTED 🖥️

1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install dependencies with `npm install`.
4. Run ' npm run build' 
5. Run 'npm run develop'
6. Access the front end on your local server to search and save books.

## Endpoints Overview 🔍

- **GraphQL `/graphql`**: Endpoint to handle all queries and mutations.

## Deployment 🚀

The application is deployed on Heroku. Visit [Live Application](#) to interact with the deployed version.

## Contributions and Feedback 📬

Feel free to fork the project and submit pull requests. For bugs and feature requests, please use the issue tracker on GitHub.

## License 📜

Distributed under the MIT License. See `LICENSE` for more information.

## Contact 📧

For any inquiries, feel free to contact SEP at sep.alamouti@sepalamouti.com
