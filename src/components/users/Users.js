import React, {useContext} from 'react';
import UserItem from './UserItem';
import { Spinner } from '../layout/Spinner';
import GithubContext from '../../context/github/githubContext';

//Here we refactored the code from class to function
//we also destructured the props with users and loading
//finally added the Spinner component
const Users = () => {
  const githubContext = useContext(GithubContext);
  //const context = useContext(contextValue) //syntax

  const { loading, users } = githubContext;

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

const userStyle = {  ////defining the style to grid format
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',  // repeat(3, 1fr) 1 fraction
  gridGap: '1rem'
}

export default Users;