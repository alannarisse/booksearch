import React, { Component} from 'react';
// import { FormGroup, FormControl, InputGroup, Glyphicon } from 'react-bootstrap';
import './Global.css';
import BookList from './BookList';

class Global extends Component {

constructor(props) {
	super(props);
	this.state = {
		query: '',
		items: []
	};
}
search() {
	let query = this.state.query;
    const BASE_URL = "https://www.googleapis.com/books/v1/volumes?q=" + query;
    fetch(BASE_URL, {method:"GET"})
    .then(response =>  response.json())
	.then (json => {
		let {items} = json;
     	this.setState({
        	items : items
      	})
     })
}

render(){
	return(
		<div>
		<h2>Book Search</h2>
		<form>
			<input type="text"
				placeholder="Search books"
				onChange={event => this.setState({query: event.target.value})}
				onKeyPress={event => {
					if (event.key === 'Enter'){
						this.search();
					}
				}}
			/>
				<button name="searchBtn" onClick={() => this.search()}>search</button>

		</form>
		<BookList items={this.state.items}/>
		</div>
		)
	};
}

export default Global;