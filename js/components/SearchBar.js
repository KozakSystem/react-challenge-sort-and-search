import React, {Component} from 'react';

export default class SearchBar extends Component {
	constructor(props) {
		super(props),
		
		this.state = {
			users: this.props.users
		};
	}

	typeHandler(e) {
		let value = e.target.value.toLowerCase();

		this.context.srcByName(value);
	} 

	render() {
		return (
			<form>
			  <div className="form-group">
			    <input onChange={this.typeHandler.bind(this)} type="search" className="form-control" placeholder="Search animals by name"/>
			  </div>
			</form>
		) 
	}
}

SearchBar.contextTypes = {
	srcByName: React.PropTypes.func
}