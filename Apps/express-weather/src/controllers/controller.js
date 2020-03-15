const axios = require('axios');
const API_KEY = 'YOUR API KEY';

const Weather = require('../model/Weather');

exports.renderHomePage = (request, response) => {
    response.render('index');
}

exports.renderAboutPage = (request, response) => {
    response.render('about');
}

exports.getWeather = (request, response) => {
    const city = request.body.city;
    const URL = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`;
    
    const weather = new Weather(request.body.city);
    weather.validateUserInput();
    
    if(weather.errors.length) {
        response.render('index', {
            error: weather.errors.toString()
        });
    } else {
        axios.get(URL).then((res) => {
            const { temp: temperature } = res.data.main;
            const { name: location } = res.data;
            response.render('index', {
                weather: `It is currently ${temperature} in ${location}`
            })
        }).catch((error) => {
            console.log(error);
        });
    }
}