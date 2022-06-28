# NodeJS-MongoDB-Backend-Simple-Crud-Example

Simple CRUD example node js project. I used mongoose for cloud db connect on mongoDB. Authorization with jsonwebtoken. Dockerized project.

## Technologies
Project is created with:

* Yarn version: 1.22.10

* Node version: 12.14.1
  
## Setup

For a setup this project you might add `.env` file  

#### .env file fields
* DATABASE_NAME=Your-Database-Name  
* USERNAME=Your-DB-UserName
* PASSWORD=Your-DB-Password 
* JWT_CODE=Your-randomize-word

with theese fileds. After that

```
$ yarn install
$ yarn start
```

## Setup v2 on docker

add .evn file 

### .env file fields
* DATABASE_NAME=Your-Database-Name  
* USERNAME=Your-DB-UserName
* PASSWORD=Your-DB-Password 
* JWT_CODE=Your-randomize-word

```
$ docker build -t nodejs-mongodb .
$ docker run --name simple-node-js-api -p 5000:5000 -e PORT=5000 -d nodejs-mongodb:latest
```
