import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header-Large.css';
import DozoLogo from '../../assets/logo.png';

class HeaderLarge extends Component {
  static contextType = UserContext;

  handleLogoutClick = () => {
    this.context.processLogout();
  };

  renderLogoutLink() {
    return (
      <div>
        <nav className='Desktop-LoggedIn'>
          <span>{this.context.user.name}</span>
          <Link onClick={this.handleLogoutClick} to='/login'>
            Logout
          </Link>
        </nav>
      </div>
    );
  }

  renderLoginLink() {
    return (
      <nav>
        <Link to='/login'>Login</Link> <Link to='/register'>Sign up</Link>
      </nav>
    );
  }

  render() {
    return (
      <div className='Desktop-Menu'>
        <Link to='/'>
          <img className='Logo' src={DozoLogo} alt='Dozo Logo' />
        </Link>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </div>
    );
  }
}

export default HeaderLarge;
