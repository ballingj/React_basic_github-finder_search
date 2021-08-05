import React from 'react';
import UserItem from './UserItem';
import { Spinner } from '../layout/Spinner';
import PropTypes from 'prop-types';

//Here we refactored the code from class to function
//we also destructured the props with users and loading
//finally added the Spinner component
const Users = ({ users, loading }) => {
  if (loading) {
    return <Spinner />
  } else {
    return (
      <div style={userStyle}>
        {users.map(user => (
          <UserItem key={user.id} user={user} /> //pass the user as props to UserItem
        ))}
      </div>
    );
  }
}

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired,
}

const userStyle = {  ////defining the style to grid format
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',  // repeat(3, 1fr) 1 fraction
  gridGap: '1rem'
}

export default Users;