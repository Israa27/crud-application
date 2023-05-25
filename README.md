# CRUD Application
This repository contains a CRUD (Create, Read, Update, Delete) application built using Node.js, Express.js, and MongoDB Atlas. The application allows users to manage a collection of user information by performing CRUD operations on the database.

## Prerequisites
Before getting started, make sure you have the following software installed on your machine:
- Node.js (v14 or above)

## Installation
1. Clone this repository to your local machine:
``` 
git clone https://github.com/Israa27/crud-application.git
 ```

2. Install the dependencies using npm or yarn:
``` 
npm install
```
 or

```
yarn install
```
## Configuration
Open the ```.env``` file in the root directory of the project.

Replace the value of ```DB_URL``` with the connection string to your MongoDB Atlas cluster. You can obtain the connection string from your Atlas account. Make sure to replace ```<username>```, ```<password>```, and ```<cluster-url>``` with your actual credentials and cluster details.


```
MONGO_URL=mongodb+srv://<username>:<password>@<cluster-url>/mydatabase?retryWrites=true&w=majority
```
## Usage
1. Start the application:
```npm start```
2Open your browser and navigate to ```http://localhost:3000``` to access the application.

3. The application supports the following CRUD operations:

- Create: Click on the "Add User" button to create a new user entry. Fill in the required information such as name, email, gender, and status.
- Read: The homepage displays a list of existing users with their information.
- Update: Click on the "Edit" button next to a user to update their details.
- Delete: Click on the "Delete" button next to a user to remove them from the list.

## Customization
- You can modify the application's design and functionality by editing the relevant files in the views directories.
- The routes and controllers for the CRUD operations are defined in the routes directory. You can modify them as per your requirements.
- The Mongoose model for the users is defined in the models directory. Update the model according to your data structure, including the name, email, gender, and status fields.

## Contributing
If you'd like to contribute to this project, you can follow these steps:
1. Fork the repository on GitHub.
2. Create a new branch with a descriptive name for your feature or bug fix.
3. Make the necessary changes and additions.
4. Commit and push your changes to your forked repository.
5. Submit a pull request to the original repository.

