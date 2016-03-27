import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props),
		this.state = {};
	}

	render() {
		return (
			<form>
			  <div className="form-group">
			    <input type="search" className="form-control" placeholder="Search animals by name"/>
			  </div>
			</form>
		) 
	}
}