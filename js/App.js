import React, { Component, PropTypes } from 'react';
import Button from './components/Button';
import SearchBar from './components/SearchBar';
import Toolbar from './components/Toolbar';
import ActiveUser from './components/ActiveUser';
import UserList from './components/UserList';

let self;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: null,
      activeUser: null,
      activeUserId: null,
      sortByAgeDir: 'asc',
      sortByNameDir: 'asc',
      lastSortField: 'name',
      lastSortType: 'sortByNameDir',
      output: null
    };
  }

  componentDidMount() {
    this.loadUserList();
    self = this;
  }

  getChildContext() {
    return {
        activeUser: this.defineActiveUserId.bind(this),
        sortByAge: this.sortByAge.bind(this),
        sortByName: this.sortByName.bind(this),
        srcByName: this.srcByName.bind(this)
    };
  }

  loadUserList() {
    $.ajax({
      url: '/data.json',
      dataType: 'json',
      cache: false,
      success: function(data) {
        this.setState({
          users: data,
          output: data
        });

        this.defineActiveUserId(0);
      }.bind(this),
      error: function(xhr, status, err) {
        console.error(this.props.url, status, err.toString());
      }.bind(this)
    });
  }

  defineActiveUserId(userId) {
    self.setState({
      activeUserId: userId,
      activeUser: _.find(self.state.users, {id: userId})
    });
  }

  sortByAge() {
    let users_list = this.state.output;
    let rez = _.orderBy(users_list, ['age'], [this.state.sortByAgeDir]);

    this.setState({
      sortByAgeDir: this.state.sortByAgeDir == 'asc' ? 'desc' : 'asc',
      activeUser: rez[0],
      output: rez,
      lastSortField: 'age',
      lastSortType: 'sortByAgeDir'
    });
  }

  sortByName() {
    let users_list = this.state.output;
    let rez = _.orderBy(users_list, ['name'], [this.state.sortByNameDir]);

    this.setState({
      sortByNameDir: this.state.sortByNameDir == 'asc' ? 'desc' : 'asc',
      activeUser: rez[0],
      output: rez,
      lastSortField: 'name',
      lastSortType: 'sortByNameDir'
    });
  }

  srcByName(query) {
    let users_list = this.state.users;

    if(query.length > 0) {
      let rez = _.filter(users_list, function(user) { 
        return user.name.toLowerCase().indexOf(query) != -1; 
      });

      if(rez) {
        this.setState({
          activeUser: rez[0],
          output: rez
        });
      } 
    } else {
      let sort_field = this.state.lastSortField;
      let sort_type = this.state[this.state.lastSortType] == 'asc' ? 'desc' : 'asc';
      let users_sort = _.orderBy(users_list, [sort_field], [sort_type]);

      this.setState({
        activeUser: users_sort[0],
        output: users_sort
      });
    }
  }

  render() {
    return (
      <div className="container app">
        { this.state.users ? <SearchBar users={this.state.users}/> : '' }
        { this.state.users ?  <Toolbar/> : '' }
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            { this.state.activeUser ? <ActiveUser user={this.state.activeUser} /> : ''}
          </div>
          <div className="col-sm-8 col-md-9 col-lg-10">
            {this.state.output ? <UserList users={this.state.output}/> : ''}
          </div>
        </div>
      </div>
    );
  }
}

App.childContextTypes = {
  activeUser: React.PropTypes.func,
  sortByAge: React.PropTypes.func,
  sortByName: React.PropTypes.func,
  srcByName: React.PropTypes.func
};