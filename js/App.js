import React, { Component } from 'react';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeUser: ''
    };
  }

  defineActiveUser(user) {
    this.setState({activeUser: user});
  }

  render() {
    return (
      <div className="container app">
        <SearchBar/>
        <Toolbar/>
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            {this.state.activeUser ? <ActiveUser user={this.state.activeUser}/> : ''}
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            <UserList users={this.state.users} defaultUser={this.defineActiveUser.bind(this)} selectUser={this.defineActiveUser.bind(this)}/>
          </div>
        </div>
      </div>
    );
  }
}
