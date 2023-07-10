# retail-ebusiness

 ![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [License](#license)

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
3.
4. Install npm package [Mysql2](https://www.npmjs.com/package/mysql2) which allow the connection and interaction with Mysql databases.
5.Install npm package [Express](https://www.npmjs.com/package/express) as the web framework to manage routing within the application.
7.Install npm package [Console.table](https://www.npmjs.com/package/console.table) which formats tables within the console.






## Usage

Demo Video: [Track-Our-Team Demo](https://drive.google.com/file/d/1Bs7E0_f77cjZONEGXeFnJ9keiH-Yc7VM/view)

This is a command-line interface application, so all of the start up methods, usage, and interaction is through the command-line (specifically Git Bash for me).
 - Sign in to mysql to provide structure and initial data to the database and tables.
 - Source schema.sql which provides structure for the database and tables.
 - Source seeds.sql which provides initial data within the tables.
 - Quit mysql and start the appliocation (in the correct directory) by entering node server.js

![InitialScreenshot](https://github.com/leesochay/track-our-team/blob/main/images/Initial_screenshot.png)

![All Departments](https://github.com/leesochay/track-our-team/blob/main/images/All_departments_screenshot.png)

![All Roles](https://github.com/leesochay/track-our-team/blob/main/images/View_all_roles_screenshot.png)

![All Employees](https://github.com/leesochay/track-our-team/blob/main/images/All_employees_screenshot.png)

![Add Department](https://github.com/leesochay/track-our-team/blob/main/images/Add_department.png)

![Add Role](https://github.com/leesochay/track-our-team/blob/main/images/Add_role.png)

![Add Employee](https://github.com/leesochay/track-our-team/blob/main/images/Add_employee.png)

![Update Employee Role](https://github.com/leesochay/track-our-team/blob/main/images/Update_employee_role.png)

## Contributing
Many Resources to help me along the way:
- [MySQL](https://www.mysql.com/): Update Statement, SELECT Statement
- npm Documentation: [Inquirer](https://www.npmjs.com/package/inquirer), [MySQL2](https://www.npmjs.com/package/mysql2)
- [W3 Schools - MySQL](https://www.w3schools.com/mysql/default.asp): SELECT Statement, UPDATE, INNER JOIN, LEFT JOIN, INSERT-SELECT, Constraints, Auto_Increment, Data Types, , Functions, CONCAT()
- [Node.js MySQL](https://www.w3schools.com/nodejs/nodejs_mysql.asp)
- [W3 Schools - JavaScript](https://www.w3schools.com/js/default.asp)
- JavaScript: map(), forEach()
- [MDN Web docs](https://developer.mozilla.org/en-US/): forEach(), map()
- [Convert an Object to an Array in JavaScript](https://www.javascripttutorial.net/object/convert-an-object-to-an-array-in-javascript/)
