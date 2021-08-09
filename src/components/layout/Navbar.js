// start of convertion to functional component
import React from 'react';
import PropTypes from 'prop-types';

const Navbar = ({ icon, title }) => {

    return (
      <nav className="navbar bg-dark">
        <h1>
          <i className={icon} /> {title}
        </h1>
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
