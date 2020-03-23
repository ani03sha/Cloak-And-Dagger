import React, { Component } from 'react';
import Navbar from './components/navbar/Navbar';
import GlobalStyle from './styles/Global';

class App extends Component {
	
	state = {
		navBarOpen: false
	}

	handleNavBar = () => {
		this.setState({
			navBarOpen: !this.state.navBarOpen
		});
	}

	render () {
		return (
			<>
				<Navbar 
					navBarState={this.state.navBarOpen}
					handleNavBar={this.handleNavBar}
				/>
				<GlobalStyle />
			</>
		);
	}
}

export default App;
