mkdir my-node-app

cd my-node-app

npm init -y



D:\Node-js\my-node-app>code .

D:\Node-js\my-node-app>npm install express yup

added 74 packages, and audited 75 packages in 3s

15 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

D:\Node-js\my-node-app>mkdir config

D:\Node-js\my-node-app>mkdir controllers

D:\Node-js\my-node-app>mkdir models

D:\Node-js\my-node-app>mkdir routes

D:\Node-js\my-node-app>mkdir
The syntax of the command is incorrect.

D:\Node-js\my-node-app>mkdir validations

D:\Node-js\my-node-app>npm start

> my-node-app@1.0.0 start
> node app.js

Server running on http://localhost:3000


# Don't forgot to change content in package.json

{
  "name": "my-node-app",
  "version": "1.0.0",
  "description": "A simple Node.js app with Yup validation",
  "main": "app.js",
  "scripts": {
    "start": "node app.js"
  },
  "keywords": [],
  "author": "https://mail.google.com/mail/u/1/#inbox/FMfcgzQZTVkZrfhdjkXBwXcBCJdmJcXt",
  "license": "ISC",
  "dependencies": {
    "express": "^4.21.2",
    "yup": "^1.6.1"
  }
}


# Email Subject : Building a Robust Node.js API with Yup for Detailed Data Validation and Error Handling
# Medium URL : https://umarfarooquekhan.medium.com/building-a-robust-node-js-api-with-yup-for-detailed-data-validation-and-error-handling-97eb3f7725b4