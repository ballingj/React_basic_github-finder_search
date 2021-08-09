import React, { Component } from 'react'
import PropTypes from 'prop-types'

export class Search extends Component {
  state = {
    text: ''
  }
  
  static propTypes = {
    searchUsers: PropTypes.func.isRequired,
    clearUsers: PropTypes.func.isRequired,
    showClear: PropTypes.bool.isRequired,
  }

  onSubmit = (e) => {
    e.preventDefault();  //prevents the default behavior of the submit 
    this.props.searchUsers(this.state.text);    // this is a function that we call up the chain App.js
    this.setState({ text: '' })   // clear the text in the form after
  }

  onChange = (e) => {
    //this.setState({ text: e.target.value }) //e is for event -target.value is the content of the input
    this.setState({ [e.target.name]: e.target.value }) //an improvement over avobe code [] is necessary for javascript to interpret the value as key and not just another string
  }

  render() {
    const { showClear, clearUsers } = this.props;
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange }/>
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
}

export default Search
