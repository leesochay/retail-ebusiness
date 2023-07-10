# retail-ebusiness

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Demo](#demo)
  - [Contributing](#contributing)

## Description
This challenge is to build the back end for an e-commerce site. This challenge is relevant as e-commerce is a major method of purchasing and selling prodcuts and services, and therefore relevant to a future web developer career. This challenge addresses the need to understand the fundamental architecture of e-commerce sites. Beginning with starter code, this challenge is to succesfully connect with a MySQL database and be able to create, get, update, and delete product, category, and tag data for the e-commerce application.

The connection utilizes the dotenv module. This module is used to keep sensitive information secure, such as usernames and passwords. It assigns this information in a separate file as variables that can be used to gain access to the e-commerce database. Once connected to the MySQL database, the application uses Seqeulize, a Node.js based Object Relational Mapper (ORM), to simplify and increase efficiency in the querying and handling the data in the e-commerce database.

This challenge utlizes Node.js, Express, dotenv, MySQL, and Sequelize.

User Story
- AS A manager at an internet retail company
 - I WANT a back end for my e-commerce website that uses the latest technologies
 - SO THAT my company can compete with other e-commerce companies

Acceptance Criteria
- GIVEN a functional Express.js API
- WHEN I add my database name, MySQL username, and MySQL password to an environment variable file
- THEN I am able to connect to a database using Sequelize
- WHEN I enter schema and seed commands
- THEN a development database is created and is seeded with test data
- WHEN I enter the command to invoke the application
- THEN my server is started and the Sequelize models are synced to the MySQL database
- WHEN I open API GET routes in Insomnia Core for categories, products, or tags
- THEN the data for each of these routes is displayed in a formatted JSON
- WHEN I test API POST, PUT, and DELETE routes in Insomnia Core
- THEN I am able to successfully create, update, and delete data in my database

With this description and criteria, the e-commerce database is built with four models (Category, Product, Tag, ProductTag).

## Installation
1. This application utilizes [Node.js](https://nodejs.org/en).
2. Install npm package [Express](https://www.npmjs.com/package/express) as the web framework to manage routing within the application.
3. Install npm package [dotenv](https://www.npmjs.com/package/dotenv) to store the database name, user, and password in a separate file for connection.
4. Install npm package [Mysql2](https://www.npmjs.com/package/mysql2) which allow the connection and interaction with Mysql databases.
5. Install npm package [Sequelize](https://www.npmjs.com/package/sequelize) as the tool to simplify the querying with and handling of the MySQL database.

How to start the application:
 - Sign in to mysql to provide structure and initial data to the database and tables.
 - Source schema.sql which provides structure for the database and tables.
 - Quit mysql.
 - Run npm run seed to provide initial data to the e-commerce database.
 - Run npm start to start the application.
 - Uitilize [Insomnia](https://insomnia.rest/products/insomnia) as the tool to test GET, POST, PUT, and DELETE functionality. 

## Demo

Please see the demp video here: 

## Contributing

The main resource for assisting in my submission for this challenge was the Module 13 Class Activities.
These helped form the logic and syntax of the code utilizted in this project.
