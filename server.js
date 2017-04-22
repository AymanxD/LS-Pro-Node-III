const express = require('express');
const app = express();
const books = require('./books');
const bodyParser = require('body-parser');
app.use(bodyParser.json());

app.get('/', (req, res) =>{
  res.send("Hello World!")
});

app.get('/books/:id', (req, res) => {
  res.send(books[req.params.id]);
});

app.get('/books/', (req, res) => {
  res.send(books);
});

app.post('/newbook', (req, res) => {
  const newBook = req.body;
  newBook.id = books.length + 1
  books.push(newBook);
});

app.listen(3000, () => {
  console.log("App is listening on 3000")
});
