//section5 converted to Hook
import React, { Fragment, useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Users from './components/users/Users';
import User from './components/users/User';
import Search from './components/users/Search';
import { Alert } from './components/layout/Alert'
import { About } from './components/pages/About';
import axios from 'axios';
import GithubState from './context/github/GithubState';
import './App.css';

const App = () => {
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({});
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(false);
  const [alert, setAlert] = useState(null);

  

  // get single Github user
  const getUser = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
         
    setUser(res.data);
    setLoading(false);
  };

  // get user's repos
  const getUserRepos = async (username) => {
    setLoading(true);

    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc`,
      {
        headers: {
          Authorization: `${process.env.REACT_APP_GITHUB_TOKEN}`,
        },
      }
    );
    
    setRepos(res.data);
    setLoading(false);

  }

  //clear users from state
  const clearUsers = () => {
    setUsers([])
    setLoading(false);
  };

  // Set Alert - change the alert value with message and type
  const showAlert = (msg, type) => {
    setAlert({ msg, type });
    setTimeout(() => setAlert(null), 5000);  //clear after 5 sec
  }

  return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar />
            <div className="container">
              <Alert alert={alert} />
              <Switch>
                <Route
                  exact path='/'
                  render={props => (
                    <Fragment>
                      <Search
                        clearUsers={clearUsers}
                        showClear={users.length > 0 ? true : false}
                        setAlert={showAlert}
                      />
                      <Users loading={loading} users={users}/>
                    </Fragment>
                  )}
                />
                <Route exact path='/about' component={About} />
                <Route exact path='/user/:login' render={props => (
                  <User {...props} getUser={getUser} getUserRepos={getUserRepos} user={user} repos={repos} loading={loading} />
                )} />
              </Switch>              
            </div>            
          </div>
        </Router>
      </GithubState>
    );
}

export default App;