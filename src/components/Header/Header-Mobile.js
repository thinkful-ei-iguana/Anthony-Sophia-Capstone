import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header-Mobile.css';

class HeaderMobile extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  render() {
    return (
      <div
        className={`mobileMenu ${
          this.props.state.open ? 'is-open' : 'is-closed'
        }`}
      >
        <nav className={this.props.state.open}>
          <button className='Close-Menu' onClick={this.props.mobileToggle}>
            <i className='fas fa-times'></i>
          </button>
          <div id='Inner-Container'>
            <div id='Account-Options'>
              {TokenService.hasAuthToken() ? (
                <div className='Header__logged-in'>
                  <div className='dropdown'>
                    <button className='dropbtn'>Account</button>
                    <div className='dropdown-content'>
                      <Link to={`/user/${this.context.user.name}`}>
                        My Account
                      </Link>
                      <Link to='/Create-Word'>Create</Link>
                      <Link onClick={this.handleLogoutClick} to='/login'>
                        Logout
                      </Link>
                    </div>
                  </div>
                </div>
              ) : (
                <div className='Header__logged-out'>
                  <Link className='mobile-Login' to='/login'>
                    Log in
                  </Link>
                  <Link className='mobile-Register' to='/register'>
                    Register
                  </Link>
                </div>
              )}
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export default HeaderMobile;
