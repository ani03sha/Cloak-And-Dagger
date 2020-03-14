import React, { Component } from 'react';
import Greetings from './components/Greetings';
import Counter from './components/Counter';

class App extends Component {

	state = {
		count: 0
	};

	increaseCount = () => {
		this.setState({
			count: this.state.count + 1
		});
	}

	decreaseCount = () => {
		this.setState({
			count: this.state.count - 1
		});
	}

	resetCount = () => {
		this.setState({
			count: 0
		});
	}

	render() {
		return (
			<>
				<Greetings greeting="Good morning" message="It is a beautiful day"/>
				<Counter 
					count={this.state.count} 
					increaseCount={this.increaseCount} 
					decreaseCount={this.decreaseCount} 
					resetCount={this.resetCount} 
				/>
			</>
		); 
	};
}

export default App;