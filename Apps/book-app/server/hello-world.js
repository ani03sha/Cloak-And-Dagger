const express = require('express');

// Creating the express app
const app = express();
// Setting the port
const port = 3000;

app.get("/", (request, response) => {
    response.send("Hello World, from Express");
});

// Starting the client
app.listen(port, () => console.log(`Hello world app listening on port ${port}`));