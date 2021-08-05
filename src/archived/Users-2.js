import React, { Component } from 'react';
import UserItem from './UserItem';

class Users extends Component {
  render() {
    return (  //modifying the style to grid format
      <div style={userStyle}>  
        {this.props.users.map(user => (
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