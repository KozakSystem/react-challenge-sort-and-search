import React, {Component} from 'react';
import UserData from './UserData';

export default class UserList extends Component {
  renderUserData() {
    const self = this;

    return _.map(this.props.users, function(user) {
        return ( <UserData key = { user.id } user = { user } />);
    });
  }

  render() {
    let users_list = this.props.users;

    return (
      <table className="user-list table table-striped">
      	<thead>
      		<tr>
      			<th>Image</th>
      			<th>Name</th>
      			<th>Age</th>
      			<th>Phone</th>
      		</tr>
      	</thead>
      	<tbody>
			   { users_list && users_list.length > 0 ? this.renderUserData() : ''}
      	</tbody>
	  </table>
    );
  }
}
