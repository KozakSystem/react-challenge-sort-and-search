import React, {Component} from 'react';
import UserData from './UserData';
//import Data from '../../public/data.json';

export default class UserList extends Component {
  constructor(props) {
    super(props);

    this.state = {
    	users: []
    }   
  }

  componentDidMount() {
  	this.loadUserList();
  }

  loadUserList() {
  	$.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({users: data});
        this.props.defaultUser(this.state.users[0]);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  renderUserData() {
	const self = this;

  	return _.map(this.state.users, function(user) {
		return(<UserData key={user.id} user={user} selectUser={self.props.selectUser}/>);
  	});
  }

  render() {
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
			{this.renderUserData.call(this)}
      	</tbody>
	  </table>
    );
  }
}
