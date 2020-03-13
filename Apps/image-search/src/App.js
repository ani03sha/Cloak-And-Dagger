import React, {
	Component
} from "react"
import ImageSearch from './ImageSearch/ImageSearch';
import ImageList from './ImageList/ImageList';


const API_KEY = "YOUR API KEY";

class App extends Component {

	state = {
		images: [],
		error: null
	};

	handleGetRequest = async (e) => {
		e.preventDefault();
		const searchTerm = e.target.elements.searchValue.value;
		const URL = `https://pixabay.com/api/?key=${API_KEY}&q=${searchTerm}&image_type=photo&pretty=true`
		const request = await fetch(URL);
		const response = await request.json();
		if(searchTerm) {
			this.setState({
				images: response.hits,
				error: null
			});
		} else {
			this.setState({
				error: "Please enter a value"
			});
		}
	};

	render() {
		return ( 
			<div>
				<ImageSearch handleGetRequest={this.handleGetRequest} />
				{
					this.state.error !== null ? 
					<div style={{ color: "#fff", textAlign:"center" }}>
						{this.state.error}
					</div> :
					<ImageList images={this.state.images} /> 
				}
			</div>
		);
	};
}

export default App;