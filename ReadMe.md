<h1>Gmail Clone BackEnd App</h1>

Welcome to the README for theGmail Clone BackEnd App Capstone Backend. This document provides an overview of the backend application, including how to set it up, run it, and other essential information.

This backend is live and deployed at https://gmail-clone-yppd.onrender.com. The source code is hosted on GitHub at https://github.com/Sathishramesh1/Gmail-clone-backend.git.

<h2>Table of Contents</h2>
<ul>
<li><a href="#intro">Introduction</a></li>
<li><a href="#pre">Prerequisites</a></li>
<li><a href="#start">Getting Started</a></li>
<li><a href="#project">Project Structure</a></li>
<li><a href="#env">Environment Variables</a></li>
<li><a >Running the Application</a></li>
<li><a href="#deploy">Deployment</a></li>
<li><a href="#api">API Documentation</a></li>
<li><a >Testing</a></li>
<li><a >Contributing</a></li>
<li><a >License</a></li>
</ul>

<h2 id="intro">Introduction</h2>
The Gmail Clone BackEnd App Capstone Backend is the server-side component of a MailService application. It provides RESTful APIs to manage Emails, user authentication, and other essential functions. It is built using Node.js, Express.js, and MongoDB.

<h2 id="pre">Prerequisites</h2>
Before you can run the Gmail Clone BackEnd App Capstone Backend, you need to have the following prerequisites:

Node.js (v14 or higher): Installation Guide
NPM (Node Package Manager): Included with Node.js
MongoDB: Installation Guide

<h2 id="start">
Getting Started</h2>
To get started with the backend, follow these steps:

1.Clone this repository to your local machine:


```sh 
 git clone  https://github.com/Sathishramesh1/Gmail-clone-backend.git
```

<h2>Setting Up the Project</h2>
<b>
1.Navigate to the project directory:</b>

```sh
cd Gmail-clone-backend
```


<b>2.Install the project dependencies:</b>

```sh
npm install
```
<h2 id="project">
Project Structure</h2>

<b>The project directory follows this structure:</b>
<ul>

<li>index.js: The main application entry point.</li>
<li>routes/: Directory containing route definitions.</li>
<li>controllers/: Directory for handling business logic.</li>
<li>models/: Directory for defining database models using Mongoose.</li>

</ul>

<h2 id="env">Environment Variables</h2>
<p>The backend relies on environment variables to work correctly. </p>
Please make sure to set the following environment variables before running the application:
<ul>


<li>
PORT: The port on which the server will listen.</li>
<li>MONGODB_URL: The URI to your MongoDB database.</li>
<li>JWT_SECRET: Secret key for JSON Web Token (JWT) authentication.</li>
</ul>
Make sure to define these variables appropriately for your environment to ensure the proper functioning of the application.

<h2 id="deploy">
Deployment</h2>
The backend for the Gmail Clone BackEnd App project is live and deployed at 
 https://github.com/Sathishramesh1/Gmail-clone-backend.git

 <h2 id="api">
API Documentation</h2>
You can find detailed API documentation for the backend on Postman. Please refer to the API Documentation for comprehensive information on the available API endpoints and usage.

<b>
Note: Ensure that the backend is running and accessible before using the provided API documentation.
</b>