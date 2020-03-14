const request = require('request');
const dotenv = require('dotenv').config();

const location = process.argv[2];
const URL = `http://openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${process.env.API_KEY}`;

if (!location) {
    return console.log('Please enter a location');
}
request(URL, (error, response, body) => {
    const data = JSON.parse(body);
    console.log(`It's currently ${data.main.temp} outside`);
});