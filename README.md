# File sharing app
> by Dima Kachurovskyy

[![GitHub Issues](https://img.shields.io/badge/issues-6%20open-green)](https://github.com/WiseEngineering/kachurovskyy-files/issues) 
[![GitHub Pulls](https://img.shields.io/badge/pull%20requests-0%20open-orange)](https://github.com/WiseEngineering/kachurovskyy-files/pulls)

This project is made within the **Wise School** course.

Simple file sharing app created with React.js, Express and MySQL.

![User Interface](https://i.imgur.com/lCtDmPr.png)

## Table of contents
* [Installation](#installation)
* [Features](#features)
* [Usage](#usage)
* [Technologies](#technologies)


## Installation

### Clone

- Clone this repo to your local machine using `https://github.com/WiseEngineering/kachurovskyy-files`

### Setup

- Open a shell in a directory and use the npm to install all the dependencies
```shell
$ npm install
```
- To run this project locally using npm you need to open two terminal windows.
> First window used to run the API
```shell 
$ cd ./kachurovskyy-files
$ npm run start 
```
> Second window used to run the client
```shell
$ cd ./kachurovskyy-files/client
$ npm run start
```


## Features
- Searching files
- Free space view
- Sharing by link
- Sharing by email
- Uploading files
- Creating Folders
- JWT session

## Usage

### Knex migrations
  - To make a knex migration you should install the knex library globally on your machine.
  ```shell
  $ npm install knex -g
  ```
  - After installing, you need to use the knex command to create a migration file.
  ```shell
  $ knex migrate:make <migration_name>
  ```
  > By default, this file appears in the working directory. You can change migrations storage in the config file.
  
  - Then you need to write the code, and run this migration using this command:
  ```shell
  $ knex migrate:latest
  ````
  
### API testing
  - To run API testing you need to install mocha globally on your local machine.
  ```shell
  $ npm install mocha -g
  ```
  - To run test you need to open the terminal and run the command that shown below
  ```shell
  $ mocha
  ```
  
### Frontend build
  - To build the frontends react components into the one file you need to follow the steps below
  > Firstly, you need to move to the client folder.
  ```shell
  $ cd ./kachurovskyy-files/client
  ```
  > Then run the npm script
  ```shell
  $ npm run build
  ```
  
  

## Technologies
 - Express 4.17.1
 - Knex 0.20.11
 - Multer 1.4.2
 - Nodemailer 6.4.6
 - React 16.13.1
 - Axios 0.19.2
