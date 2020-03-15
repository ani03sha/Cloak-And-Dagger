const express = require('express');
const app = express();
const router = require('./router');

/**
 * Below are middleware functions that we are going to use to make our life easier
 */
app.use(express.urlencoded({ extended: false }));
// Converts the response into json
app.use(express.json())
// This will give our code access to the files that ate present in the "public" folder
app.use(express.static('public'))
// View that we want to load - for e.g., index.html, about.html etc
app.set('views', 'views')
// The view engine that we are going to use - handlebars (hbs) in this case
app.set('view engine', 'hbs')


app.use('/', router);



app.listen(3000, () => {
    console.log('The server is now running at post 3000');
});