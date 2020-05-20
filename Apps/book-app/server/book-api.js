const express = require('express');
const bodyPraser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Book array
let books = [];

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

app.listen(port, () => console.log(`Book app is listening on port ${port}!`));