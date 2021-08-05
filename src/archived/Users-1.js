import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  state = {
    users: [
      {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
      },
      {
        id: '2',
        login: 'defunkt',
        avatar_url: 'https://avatars.githubusercontent.com/u/2?v=4',
        html_url: 'https://github.com/defunkt'
      },
      {
        id: '3',
        login: 'pjhyett',
        avatar_url: 'https://avatars.githubusercontent.com/u/3?v=4',
        html_url: 'https://github.com/pjhyett'
      }

    ]
  }

  render() {
    return (  //modifying the style to grid format
      <div style={userStyle}>  
        {this.state.users.map(user => (
          <UserItem key={user.id} user={user} /> //pass the user as props to UserItem
        ))}
      </div>
    )
  }
}

const userStyle = {  ////defining the style to grid format
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',  // repeat(3, 1fr) 1 fraction
  gridGap: '1rem'
}

export default Users;