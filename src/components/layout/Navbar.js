// start of convertion to functional component
import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Navbar = ({ icon, title }) => {

    return (
      <nav className="navbar bg-dark">
        <h1>
          <Link to='/'>
            <i className={icon} /> {title}
          </Link>
        </h1>
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>

        </ul>
      </nav>
    )
  }

//static defaultProps just sets up the default prop values incase no props was passed
//in functional components default props and propTypes are defined outside of the function
Navbar.defaultProps = {
  title: 'Github Finder',
  icon: 'fab fa-github'
};

//propTypes is a type checking function -- it checks if value passed matches the types defined in this function
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired
};

export default Navbar
