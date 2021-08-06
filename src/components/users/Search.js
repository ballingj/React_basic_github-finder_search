import React, { Component } from 'react'

export class Search extends Component {
  state = {
    text: ''
  }
  
  onSubmit = (e) => {
    e.preventDefault();  //prevents the default behavior of the submit 
    console.log(this.state.text);
  }

  onChange = (e) => {
    //this.setState({ text: e.target.value }) //e is for event -target.value is the content of the input
    this.setState({ [e.target.name]: e.target.value }) //an improvement over avobe code
  }

  render() {
    return (
      <div>
        <form className="form" onSubmit={this.onSubmit}>
          <input type="text" name="text" placeholder="Search Users..." value={this.state.text} onChange={this.onChange }/>
          <input type="submit" value="Search" className="btn btn-dark btn-block" />
        </form>
      </div>
    )
  }
}

export default Search
