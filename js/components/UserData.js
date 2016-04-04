import React, {Component} from 'react';

export default class UserData extends Component {

  clickHandler() {
    this.context.activeUser(this.props.user.id);
  }

  render() {
    return (
      <tr onClick={this.clickHandler.bind(this)}>
      	<td>
      		<img src={'/images/' + this.props.user.image + '.svg'} className="user-image"/>
      	</td>
      	<td>{this.props.user.name}</td>
      	<td>{this.props.user.age}</td>
      	<td>{this.props.user.phone}</td>
      </tr>
    );
  }
}

UserData.contextTypes = {
   activeUser: React.PropTypes.func
}
