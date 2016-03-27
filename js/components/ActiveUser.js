import React, {Component} from 'react';

export default class ActiveUser extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	user: this.props.user
    };
  }

  componentDidUpdate() {
  	this.setState({
  		user: this.props.user
  	})
  }

  render() {
  	console.log()
    return (
      <div className="thumbnail" >
		<img src={'images/' + this.state.user.image + '.svg'} alt="user-image"/>
		<div className="thumbnail-caption">
			<h3>{this.state.user.name}</h3>
			<table className="user-info table table-responsive">
				<tbody>
					<tr>
						<td>Age:</td><td>{this.state.user.age}</td>
					</tr>
					<tr>
						<td>Favorite animal:</td>
						<td>{this.state.user.image}</td>
					</tr>
					<tr>
						<td>Phone:</td>
						<td>{this.state.user.phone}</td>
					</tr>
				</tbody>
			</table>
			<p>
				<b>Favorite phrase:</b><span> </span>
				<span>{this.state.user.phrase}</span>
			</p>
		</div>
      </div>
    );
  }
}
