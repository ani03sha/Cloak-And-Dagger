const express = require('express');
const bodyPraser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Book array
let books = [{
    "isbn": "9781593275846",
    "title": "Eloquent JavaScript, Second Edition",
    "author": "Marijn Haverbeke",
    "publish_date": "2014-12-14",
    "publisher": "No Starch Press",
    "numOfPages": 472,
},
{
    "isbn": "9781449331818",
    "title": "Learning JavaScript Design Patterns",
    "author": "Addy Osmani",
    "publish_date": "2012-07-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 254,
},
{
    "isbn": "9781449365035",
    "title": "Speaking JavaScript",
    "author": "Axel Rauschmayer",
    "publish_date": "2014-02-01",
    "publisher": "O'Reilly Media",
    "numOfPages": 460,
}];

// Enable CORS
app.use(cors());

// Configuring body-parser middleware
app.use(bodyPraser.urlencoded({ extended: false }));
app.use(bodyPraser.json());

// Post method to save books
app.post('/book', (request, response) => {
    const book = request.body;

    console.log(book);
    // Add the book to the in-memory array
    books.push(book);

    response.send('Book is added to the database');
});

app.get('/book', (request, response) => {
    response.json(books);
})

app.listen(port, () => console.log(`Book app is listening on port ${port}!`));