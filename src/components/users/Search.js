import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext'

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  
  const [text, setText] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();  //prevents the default behavior of the submit
    if (text === '') {
      alertContext.setAlert('Please enter a search term', 'light');
    } else {
      githubContext.searchUsers(text)  
      setText('')         // clear the text in the form after
    }
  };

  const onChange = (e) => setText(e.target.value);  // refactored to use useState

  return (
    <div>
      <form className="form" onSubmit={onSubmit}>
        <input type="text" name="text" placeholder="Search Users..." value={text} onChange={onChange}/>
        <input type="submit" value="Search" className="btn btn-dark btn-block" />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className="btn btn-light btn-block"
          onClick={githubContext.clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
