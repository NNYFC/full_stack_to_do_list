# TO DO list
This repository contains both frontend and backend implementation of a Todo list application.
The backend developped using [express](https://expressjs.com/) can be found in <b>backend</b> folder and the fronend in the <b>frontend</b> folder.


### 1. Backend set-up
- Install [node >= v20.14.0](https://nodejs.org/en/download)
- Insall [npm >= 10.8.1](https://nodejs.org/en/download)
To update your version of npm you can run `npm install -g npm@10.8.1`


### 2. Frontend set-up
Using the same configuration above for the backend set-up, just the below additional setup is needed
- Install [angular-cli >= 17.3.9](https://angular.dev/tools/cli/setup-local) by running `npm install -g @angular/cli@17.3.9`


### Starting Backend
Inorder to start the backend, make sure to set all environment variables need
 - PORT
 - DATABASE_URL
 - DATABASE_PORT
 - DATABASE_PASSWORD
 - DATABASE_NAME
 - DATABASE_USERNAME
 - HOST_URL

Once set, run `npm start`

You can access the API documentation ([Swaggger](https://swagger.io/docs/)) base on the <b>HOST_URL</b> + <b>PORT</b> set in environment variable and add <b>/api-docs/</b> at the end. to give ``http://localhost:3000/api-docs/`` in case running it locally.

### Starting Frontend
Inorder to start the frontend, position in <b>frontend</b> folder and run `npm install` to download all dependencies necessary for the application. 

Once execution completed:
 run `ng serve` to start the application.
 run `ng build` to build the application, a <b>dist</b> folder will be created which is the build result.

The application can be access locally through ``http://localhost:4200/``
