import React from 'react';
import './App.css';
import Title from './components/Title';
import Form from './components/Form';
import Weather from './components/Weather';

function App() {
  	return (
    	<div className="App">
      		<Title />
      		<Form />
      		<Weather />
    		</div>
  	);
}

export default App;
