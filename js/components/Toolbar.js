import React, {Component} from 'react';

export default class Toolbar extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div style={{padding: '20px 0'}}>
				<a className="btn btn-default" href="#" style={{marginRight: '10px'}} role="button">
					<span className="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>
					Sort by name
				</a>
				<a className="btn btn-default" href="#" role="button">
					<span className="glyphicon glyphicon-sort-by-alphabet" aria-hidden="true"></span>
					Sort by age
				</a>
			</div> 
		)
	}
}