import React, {Component} from 'react';

export default class UserData extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	user: this.props.user
    }
  }

  clickHandler() {
	this.props.selectUser(this.state.user)
  }

  render() {
    return (
      <tr onClick={this.clickHandler.bind(this)}>
      	<td>
      		<img src={'/images/' + this.state.user.image + '.svg'} className="user-image"/>
      	</td>
      	<td>{this.state.user.name}</td>
      	<td>{this.state.user.age}</td>
      	<td>{this.state.user.phone}</td>
      </tr>
    );
  }
}
