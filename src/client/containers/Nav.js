import React, { useState } from 'react';
import { NavLink, useHistory, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { useAlert } from 'react-alert';
import Icon from '../assets/icons/main.png';

import { userLogout } from '../redux/index';

function Nav({ loggedIn, logout, items }) {
  const [navToggle, setNavToggle] = useState(false);

  const history = useHistory();
  const alert = useAlert();

  const toggle = () => {
    setNavToggle(!navToggle);
  };

  // NavLinks for non authenticated users
  const guestNavLinks = () => (
    <ul>
      <li className="brand-icon"><NavLink activeClassName="current" exact to="/"><img src={Icon} alt="ICON" /></NavLink></li>
      <li className="burger-nav"><i onClick={toggle} role="button" tabIndex={0} onKeyDown={toggle} className={navToggle ? 'fas fa-times' : 'fas fa-bars'} /></li>
      <div className={navToggle ? 'nav-links' : 'nav-links hidden'}>
        <li>
          <NavLink onClick={toggle} activeClassName="current" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={toggle} activeClassName="current" exact to="/collections">Explore</NavLink>
        </li>
      </div>
      <div className="nav-icons">
        <li>
          <NavLink activeClassName="current" exact to="/login-register"><i className="fas fa-user" /></NavLink>
        </li>
        <li>
          <NavLink activeClassName="current" exact to="/cart">
            <i className="fas fa-shopping-bag">
              {' '}
              { items.length }
            </i>
          </NavLink>
        </li>
      </div>
    </ul>
  );

  // NavLinks for authenticated users
  const userNavLinks = () => (
    <ul>
      <li className="brand-icon"><NavLink activeClassName="current" exact to="/"><img src={Icon} alt="ICON" /></NavLink></li>
      <li className="burger-nav"><i onClick={toggle} role="button" tabIndex={0} onKeyDown={toggle} className={navToggle ? 'fas fa-times' : 'fas fa-bars'} /></li>
      <div className={navToggle ? 'nav-links' : 'nav-links hidden'}>
        <li>
          <NavLink onClick={toggle} activeClassName="current" exact to="/">Home</NavLink>
        </li>
        <li>
          <NavLink onClick={toggle} activeClassName="current" exact to="/collections">Explore</NavLink>
        </li>
      </div>
      <div className="nav-icons">
        <li>
          <NavLink activeClassName="current" exact to="/dashboard"><i className="fas fa-user" /></NavLink>
        </li>

        <li>
          <NavLink activeClassName="current" exact to="/cart">
            <i className="fas fa-shopping-bag">
              {' '}
              {items.length}
            </i>
          </NavLink>
        </li>

        <li>
          <NavLink onClick={() => { logout(); alert.success('Logged out'); history.push('/login-register'); }} activeClassName="current" exact to="/login-register"><i className="fas fa-sign-out-alt" /></NavLink>
        </li>
      </div>
    </ul>

  );

  return (
    <nav className="nav-container">
      <div className="nav-contents">
        {/* Show user NavLinks based on their login status */}
        {loggedIn ? userNavLinks() : guestNavLinks()}
      </div>
    </nav>
  );
}

// PropTypes validation
Nav.propTypes = {
  loggedIn: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired
};


const mapStateToProps = state => ({
  loggedIn: state.user.loggedIn,
  loading: state.user.loading,
  items: state.cart.items
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  logout: () => dispatch(userLogout(ownProps))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Nav));
