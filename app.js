

const express = require('express');

const app = express()

app.use(express.static('public'));

app.get('/pattismith', (request, response, next) => {
    response.sendFile(__dirname + "/views/index.html");
  });

  app.get('/about', (request, response, next) => {
    response.sendFile(__dirname + "/views/about.html");
  });

  app.get('/music', (request, response, next) => {
    response.sendFile(__dirname + "/views/music.html");
  });

  app.get('/books', (request, response, next) => {
    response.sendFile(__dirname + "/views/books.html");
  });

 

app.listen(3000, () => console.log('My first app listening on port 3000!'));

