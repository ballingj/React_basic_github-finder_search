//added the Search component section4
import React, { Component } from 'react';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import Search from './components/users/Search';
import axios from 'axios';
import './App.css';
import PropTypes from 'prop-types'

class App extends Component {
  state = {
    users: [],
    loading: false
  }

  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
  }

  // async componentDidMount() {
  //   this.setState({ loading: true });

  //   const res = await axios.get(`https://api.github.com/users?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);
    
  //   this.setState({ users: res.data, loading: false });
  // }

  // Search Github users
  searchUsers = async text => {
    this.setState({ loading: true });

    const res = await axios.get(
      `https://api.github.com/search/users?q=${text}`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
         
    this.setState({ users: res.data.items, loading: false });
  }

  //clear users from state
  clearUsers = () => this.setState({ users: [], loading: false })

  render() {
    const { users, loading } = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="container">
          <Search searchUsers={this.searchUsers}
            clearUsers={this.clearUsers}
            showClear={users.length > 0 ? true : false}
          />
          <Users loading={loading} users={users}/>
        </div>
        
      </div>
    );
  }
}

export default App;
