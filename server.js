//requiring the Express module that was installed via npm:
const express = require('express');
// setting up express application:
const app = express();
//variables are available through the path module
const path = require('path');


const urlLogger = (request, response, next) => {
  //middleware code here:
  console.log('Request URL:', request.url);
  //move on to next middleware function or the route handler:
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

// const error = (request, response, next) => {
//   response.status(404).send("Page not found.");
//   next()
// }


app.use(urlLogger, timeLogger);

//for every request to the server, always run the function passed into app.use()
//the part in the brackets defines the path to the static assets
//path.join(__dirname, 'public') is the absolute path of the public directory
//__dirname is a variable that holds the directory of the current Node application
app.use(express.static(path.join(__dirname, 'public')));

// app.get('/', (request, response) => {
//   response.send('hello world');
// });

//route handler:
app.get('/json', (request, response) => {
  response.status(200).json({"name": "Justyna"});
})


//the following function tells the server to start listening for connections on port 3000:
app.listen(3000, () => {
  console.log('Express intro running on localhost:3000')
});
