# Node.js Express Dogs API

This is a simple Node.js Express application that provides CRUD (Create, Read, Update, Delete) operations for managing dogs. It uses an in-memory array to store dog data. Each dog object includes properties such as `name`, `breed`, `age`, and `favoriteToy`.

## Getting Started

These instructions will help you get the project up and running on your local machine for development and testing purposes.

### Prerequisites

What things you need to install the software and how to install them:

- Node.js
- npm (Node Package Manager)

### Installing

A step-by-step series of examples that tell you how to get a development environment running:

1. **Clone the repository:**
   ```
   git clone [repository_url]
   ```

2. **Navigate to the project directory:**
    ```
    cd [project_name]
    ```

3. **Install dependencies:**
    ```
    npm install
    ```

### Running the Application
Run the application with the following command:
```
npm start
```
The server will start and listen for requests on http://localhost:3000.

### Endpoints
The application supports the following endpoints:

- `GET /dogs`: Fetch all dogs.
- `GET /dogs/:id`: Fetch a single dog by ID.
- `POST /dogs`: Add a new dog.
- `PUT /dogs/:id`: Update an existing dog by ID.
- `DELETE /dogs/:id`: Delete a dog by ID.

### Running Tests
To run the automated tests for this system, use the following command:
```
npm test
```

### Built With
- Node.js - The JavaScript runtime
- Express - The web framework
- Jest - The testing framework
- Supertest - The library for testing HTTP