import React, { Component} from 'react';


class BookList extends Component{
	render(){
		return(
		<div>
		{
			this.props.items.map((item, index) => {
				let {title, imageLinks, infoLink, subtitle, description, authors} = item.volumeInfo;
				return(
					<div key={index}>
					<img 
						src={imageLinks !== undefined ? imageLinks.thumbnail : ''} 
						alt="book cover"
					/>
					<a href={infoLink} target="_blank"><br/>
					{title}</a><br/>
					{subtitle}<br/>
					{authors[0]}<br/>
					<p>{description}</p>
					</div>
					)
			})
		}
		</div>
		)
	}

}

export default BookList;