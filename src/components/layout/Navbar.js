import React, { Component } from 'react'
import PropTypes from 'prop-types';

export class Navbar extends Component {
  //static defaultProps just sets up the default prop values incase no props was passed
  static defaultProps = {
    title: 'Github Finder',
    icon: 'fab fa-github'
  };

  //static propTypes is a type checking function -- it checks if value passed matches the types defined in this function
  static propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
  };

  render() {
    return (
      <nav className="navbar bg-primary">
        <h1>
          <i className={this.props.icon} /> {this.props.title}
        </h1>
      </nav>
    )
  }
}

export default Navbar
