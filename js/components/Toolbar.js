import React, {Component} from 'react';

export default class Toolbar extends Component {
	sortByNameHandler(e) {
		e.preventDefault();
		this.context.sortByName();
	}

	sortByAgeHandler(e) {
		e.preventDefault();
		this.context.sortByAge();
	}

	render() {
		return (
			<div style={{padding: '20px 0'}}>
				<a onClick={this.sortByNameHandler.bind(this)} className="btn btn-default" href="#" style={{marginRight: '10px'}} role="button">
					<span className="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>
					Sort by name
				</a>
				<a onClick={this.sortByAgeHandler.bind(this)} className="btn btn-default" href="#" role="button">
					<span className="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>
					Sort by age
				</a>
			</div> 
		)
	}
}

Toolbar.contextTypes = {
	sortByName: React.PropTypes.func,
	sortByAge: React.PropTypes.func
}