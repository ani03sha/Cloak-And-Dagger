const axios = require('axios');
const API_KEY = 'YOUR API KEY';

exports.renderHomePage = (request, response) => {
    response.render('index');
}

exports.renderAboutPage = (request, response) => {
    response.render('about');
}

exports.getWeather = (request, response) => {
    const city = request.body.city;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    axios.get(URL).then((res) => {
        response.render('index', {
            weather: `It is currently ${res.data.main.temp} in ${res.data.name}`
        })
    }).catch((error) => {
        console.log(error);
    });
}