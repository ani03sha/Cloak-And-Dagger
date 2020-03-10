import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

const API_KEY = "778a43cdc7b07974ec1ac50e2b3e13d6";

class App extends Component {

	state = {
		temperature: undefined,
		city: undefined,
		country: undefined,
		humidity: undefined,
		description: undefined,
		error: undefined
	};

	getWeather = async (e) => {
		e.preventDefault();
		// The below two lines of code will read the value from the webpage inputs
		const city = e.target.elements.city.value;
		const country = e.target.elements.country.value;
		const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`);  
		const data = await api_call.json();
		
		if(city && country) {
			// Setting returned values from the state
			this.setState({
				temperature: data.main.temp,
				city: data.name,
				country: data.sys.country,
				humidity: data.main.humidity,
				description: data.weather[0].description,
				error: ''
			});
		} else {
			console.log(data);
			// Setting returned values from the state
			this.setState({
				temperature: undefined,
				city: undefined,
				country: undefined,
				humidity: undefined,
				description: undefined,
				error: 'Please enter city and country'
			});
		}
	}

	render() {
  		return (
    		<div className="App">
      			<Title />
      			<Form getWeather={this.getWeather}/>
      			<Weather 
				  temperature={this.state.temperature}
				  city={this.state.city}
				  country={this.state.country}
				  humidity={this.state.humidity}
				  description={this.state.description}
				  error={this.state.error} 
				/>
    			</div>
	  	);
	};
}

export default App;
