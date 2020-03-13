import React, {
	Component
} from "react"
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from './ImageList/ImageList';


const API_KEY = "<API KEY>";

class App extends Component {

	state = {
		images: []
	};

	handleGetRequest = async (e) => {
		e.preventDefault();
		const searchTerm = e.target.elements.searchValue.value;
		const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
		const request = await fetch(URL);
		const response = await request.json();
		this.setState({
			images: response.hits
		})
		console.log(this.state.images);
	};

	render() {
		return ( 
			<div>
				<ImageSearch handleGetRequest={this.handleGetRequest} />
				<ImageList images={this.state.images} /> 
			</div>
		);
	};
}

export default App;