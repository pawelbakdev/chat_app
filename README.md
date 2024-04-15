# Real-Time Chat Application

## Overview
This document provides an overview of the real-time chat application developed using Node.js Express, MongoDB, React. The application allows multiple users to join a common chat room and exchange messages in real-time.

## Setup and Running Instructions
To set up and run the application, follow these steps:

- Download the project to your local computer.
- Navigate to the `server` folder.
- Run the command `npm install` in your terminal to install all dependencies.
- Run the command `npm start` to start the server.
- Next, navigate to the `client` folder.
- Run the command `npm install` in your terminal to install all client dependencies.
- Run the command `npm run dev` to start the client in development mode.
- Access the application in your web browser at `http://localhost:7070`.

# Architecture and Technologies
## Backend Technologies

- **Node.js**: A runtime environment for executing JavaScript code server-side, enabling scalability and event-driven applications.
- **Express**: A minimalist web application framework for Node.js, simplifying the process of building robust web servers.
- **MongoDB**: A NoSQL database providing a flexible solution for storing and managing data in JSON-like documents.
- **Socket.io**: A JavaScript library facilitating real-time, bidirectional communication between web clients and servers, enabling features like instant messaging and live updates.


## Backend Architecture
### Folder Structure:

- **controllers**: This folder contains modules responsible for handling various HTTP requests and producing appropriate responses. Each controller module typically corresponds to a specific resource or endpoint in the application.
- **middlewares**: This folder contains functions that act as middleware, intercepting and processing incoming requests before they reach the route handlers. Common middleware functions include authentication middleware (`authMiddleware`) and error handling middleware (`errorHandlerMiddleware`).
- **models**: This folder contains Mongoose models, which define the structure of documents stored in the MongoDB database. Each model represents a specific type of data entity and typically includes fields, validation rules, and methods for interacting with the database.
- **routes**: This folder holds configuration files for defining the routing of the application. Route files map HTTP request methods and URLs to the corresponding controller functions. They help organize and modularize the routing logic of the application.
- **utils**: This folder contains additional utility functions and helper modules used throughout the application. These functions may include database configuration, WebSocket setup, custom error classes, or other miscellaneous tasks.

### Files:

- **.env**: Stores sensitive environment variables for easy configuration across environments.
- **eslintrc.json**: Configuration for ESLint, ensuring code quality and consistency.
- **prettierrc.json**: Configuration for Prettier, maintaining consistent code formatting.
- **app.js**: Entry point for the backend, initializing Express, defining routes, and starting the server.
- **Dockerfile**: Contains instructions for building a Docker image of the application.
- **package.json**: Lists dependencies and scripts for the backend.
- **package-lock.json**: Specifies exact dependency versions for consistency.


## Frontend Technologies

- **React**: A JavaScript library for building user interfaces, offering a component-based architecture and efficient rendering for creating dynamic web applications.
- **Vite**: A modern build tool for frontend development, providing fast and lean development experience with features like instant server start and optimized build times.
- **React Router**: A library for declarative routing in React applications, allowing for navigation and rendering of components based on the URL.
- **Socket.io**: A JavaScript library enabling real-time, bidirectional communication between web clients and servers, facilitating features like instant messaging and live updates.


## Frontend Architecture

### Folder Structure

- **components**: Contains reusable UI components used throughout the application.
- **context**: Holds the `AuthContext`, allowing access to user authentication information from any part of the application.
- **guards**: Contains `RequireAuth` guard for enforcing authentication on certain routes.
- **repositories**: Houses classes for handling HTTP connections, facilitating data fetching and management.
- **services**: Includes utility services such as `LocalStorageService` for interacting with local storage and `SocketService` for managing WebSocket connections.
- **views**: Contains the main views of the application, such as `Main` and `Login`.

### Files

- **App.jsx**: Main component serving as the entry point of the application.
- **index.css**: CSS file containing global styles for the application.
- **main.jsx**: Entry point file responsible for rendering the root component into the DOM.
- **.eslintrc.cjs**: ESLint configuration file for linting JavaScript code.
- **.gitignore**: Git configuration file specifying which files and directories to ignore when committing changes.
- **prettierrc.json**: Prettier configuration file for code formatting rules.
- **Dockerfile**: Docker configuration file for building the frontend application into a container.
- **index.html**: HTML file serving as the entry point for the application.
- **package.json**: Configuration file listing dependencies and scripts for the frontend application.
- **package-lock.json**: Automatically generated file specifying the exact versions of dependencies installed.


**Developer:** Paweł Bąk
**Contact:** pawel.bak.dev@gmail.com
