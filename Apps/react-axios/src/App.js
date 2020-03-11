import React, { Component } from 'react';
import './App.css';
import UserForm from './components/UserForm';
import axios from 'axios';

// https://api.github.com/users/john

class App extends Component {

	state = {
		repositories: null
	}
	
	getUser = (e) => {
		e.preventDefault();
		const user = e.target.elements.username.value;
		if(user) {
			axios.get(`https://api.github.com/users/${user}`)
				.then((res) => {
					console.log(res);
					const repos = res.data.public_repos;
					this.setState({
						repositories: repos
					});
				});
		}	
	}
	render() {
		return (
			<div className="App">
				<header className="App-header">
					<h1 className="App-title">HTTP Calls in React</h1>  
				</header>
				<UserForm getUser={this.getUser} />
		{ this.state.repositories ? <p>Number of repos: { this.state.repositories }</p> : <p>Please enter the user name</p>}
			</div>
  		);
	}
}

export default App;
