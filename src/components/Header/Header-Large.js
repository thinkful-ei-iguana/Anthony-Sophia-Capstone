import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import TokenService from '../../services/token-service';
import UserContext from '../../contexts/UserContext';
import './Header-Large.css';

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
      <header className='Desktop-Menu'>
        <h1>
          <Link to='/'>Spaced repetition</Link>
        </h1>
        {TokenService.hasAuthToken()
          ? this.renderLogoutLink()
          : this.renderLoginLink()}
      </header>
    );
  }
}

export default HeaderLarge;
