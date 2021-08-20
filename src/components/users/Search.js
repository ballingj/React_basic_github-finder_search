import React, { useState } from 'react';

const Search = ({ searchUsers, showClear, clearUsers, setAlert }) => {
  const [text, setText] = useState('');
  
  const onSubmit = (e) => {
    e.preventDefault();  //prevents the default behavior of the submit
    if (text === '') {
      setAlert('Please enter a search term', 'light');
    } else {
      searchUsers(text)    // this is a function that we call up the chain App.js
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
      {showClear && (
        <button
          className="btn btn-light btn-block"
          onClick={clearUsers}
        >
          Clear
        </button>
      )}
    </div>
  )
}

export default Search
