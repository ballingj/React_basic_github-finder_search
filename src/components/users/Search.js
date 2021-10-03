import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext'
import { searchUsers } from '../../context/github/actions'
import { SEARCH_USERS, SET_LOADING, CLEAR_USERS } from '../../context/types'

const Search = () => {
  const {dispatch, users } = useContext(GithubContext);
  const { setAlert } = useContext(AlertContext);
  
  const [text, setText] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault()  //prevents the default behavior of the submit
    if (text === '') {
      setAlert('Please enter a search term', 'light');
    } else {
      dispatch({ type: SET_LOADING })
      searchUsers(text).then(users => {
        dispatch({ type: SEARCH_USERS, payload: users })
        setText('')         // clear the text in the form after
      })
    }
  };

  const onChange = (e) => setText(e.target.value);  // refactored to use useState

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={() => dispatch({ type: CLEAR_USERS })}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
