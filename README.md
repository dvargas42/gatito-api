<h1 align="center">
  <img alt="Logo" src="" width="400px">

<h3 align="center">
  An API made in NodeJS for Gatito Petshop project.
</h3>

<p align="center">The best way to take care of your pet!</p>

<p align="center">

  <img alt="GitHub top language" src="https://img.shields.io/github/languages/top/dvargas42/vitto-minibank-api?color=blue">

  <a href="https://www.linkedin.com/in/daniel-santos-040983ab/" target="_blank" rel="noopener noreferrer">
    <img alt="Made by" src="https://img.shields.io/badge/made%20by-Daniel%20Vargas-blue">
  </a>

  <img alt="Repository size" src="https://img.shields.io/github/repo-size/dvargas42/vitto-minibank-api?color=blue">

  <a href="https://github.com/dvargas42/vitto-minibank-api/commits/main">
    <img alt="GitHub last commit" src="https://img.shields.io/github/last-commit/dvargas42/vitto-minibank-api?color=blue">
  </a>

  <a href="https://github.com/dvargas42/vitto-minibank-api/issues">
    <img alt="Repository issues" src="https://img.shields.io/github/issues/dvargas42/vitto-minibank-api?color=blue">
  </a>

  <img alt="GitHub" src="https://img.shields.io/github/license/dvargas42/vitto-minibank-api?color=blue">
</p>



<p align="center">
  <a href="#%EF%B8%8F-about-the-project">About the project</a>&nbsp;|&nbsp;
  <a href="#-screnshots">Screenshots</a>&nbsp;|&nbsp;
  <a href="#-technologies">Technologies</a>&nbsp;|&nbsp;
  <a href="#-getting-started">Getting started</a>&nbsp;|&nbsp;
  <a href="#-route-structure">Route structure (NEW!)</a>&nbsp;|&nbsp;
  <a href="#-how-to-contribute">How to contribute</a>&nbsp;|&nbsp;
  <a href="#-license">License</a>
</p>

## 💇🏼 About the project


This app was part of an exercise to build the ability to implement features in an API built with NodeJS.
Among the applied knowledge are: creation of routes, creation of middlewares and creation of global error objects. This project is still ongoing.

## 📸 Sreenshots

Images of the application in operation.

<p align="center">
<img alt="ScreenShot01" src="" width="400px">
<img alt="ScreenShot02" src="" width="400px">
</p>
<p align="center">
<img alt="ScreenShot03" src="" width="400px">
<img alt="ScreenShot04" src="" width="400px">
</p>
<p align="center">
<img alt="ScreenShot03" src="" width="400px">
<img alt="ScreenShot04" src="" width="400px">
</p>


## 🚀 Technologies

Technologies that I used to develop this web application


- [NodeJS](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Sequelize](https://typeorm.io/#/)
- [config](https://www.npmjs.com/package/bcryptjs)
- [jsontoxml](https://jwt.io/)
- [mysql2](https://jwt.io/)


## 💻 Getting started

To run this application you will need to have Docker installed on your PC.  After that, just run the tables creation and the tables will be created automatically. Below I leave a step-by-step to prepare your environment.

Attention, even after all this database will be empty. If you want, you can use a tool like Insomnia or Postman to manipulate the routes.

- [gatito-api](https://github.com/dvargas42/gatito-api)


### Requirements

- [NodeJS](https://nodejs.org/en/)
- [Yarn](https://classic.yarnpkg.com/) or [npm](https://www.npmjs.com/)


**Clone the project and access the folder**

```bash
$ git clone https://github.com/dvargas42/gatito-api.git
```

**Follow the steps below**

It will be necessary to create a database so that our api can persist the data

Make sure the Docker is installed with the following command:

```bash
$ docker version
```
If not, just install it using the links below.

For Windows and Mac:

- [Docker Windows / Mac](https://docs.docker.com/desktop/)

For Linux:

- [Docker Linux](https://docs.docker.com/engine/install/)

After that, enter command that will create a mysql Docker container already with petshop database.

```bash
$ docker docker run --name gatito -e MYSQL_ROOT_PASSWORD=root -p 3306:3306 -d mysql:latest
```

Now run the Docker bash end create database.

```bash
# Enter in container terminal
$ docker exec -it gatito bash

# Enter in mysql
$ mysql -u root -p 

# Into mysql, create database
> create petshop database;

# Exit mysql
> quit

# Exit container terminal
$ exit 

```

After, make sure the Docker image is running with the command below

```bash
$ docker ps -a
```

If not, just type the command below to upload the container

```bash
$ docker start gatito
```


**In another terminal tab or terminal window**

```bash
# Install the dependencies
$ npm install

# Create the tables
$ npm run createTable

# To finish, run the webapp 
$ npm run start

```
## 🛰 Routes structure

```shell

├── /api/fornecedores
│     │
│     ├── / -> (POST method) Create customer
│     │
│     ├── / -> (GET method) List all customers
│     │
│     ├── /:id -> (GET method) List one customer
│     │
│     ├── /:id -> (PUT method) Update customer
│     │
│     └── /:id -> (DELETE method) Delete customer

```

&nbsp;

## 🤔 How to contribute

**Make a fork of this repository**

```bash
# Fork using GitHub official command line
# If you don't have the GitHub CLI, use the web site to do that.

$ gh repo fork dvargas42/gatito-api

```

**Follow the steps below**

```bash
# Clone your fork
$ git clone your-fork-url && cd gatito-api

# Create a branch with your feature
$ git checkout -b my-feature

# Make the commit with your changes
$ git commit -m "My new feature"

# Send the code to your remote branch
$ git push origin my-feature
```

After your pull request is merged, you can delete your branch

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

Made with 💜 &nbsp;by Daniel Vargas 👋 &nbsp;[See my linkedin](https://www.linkedin.com/in/daniel-santos-040983ab/)