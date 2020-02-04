import React, { Component } from 'react';
import HeaderMobile from './Header-Mobile';
import HeaderLarge from './Header-Large';
import UserContext from '../../contexts/UserContext';
import './Header.css';

class Header extends Component {
  static contextType = UserContext;

  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
  }

  // toogles mobile menu open/close
  toggleMenu = () => {
    this.setState(prevState => ({ open: !prevState.open }));
  };

  render() {
    return (
      <header>
        <button className='Open-Menu' onClick={this.toggleMenu}>
          <i className='fas fa-bars'></i>
        </button>
        <HeaderMobile
          id='MobileMenu'
          state={this.state}
          mobileToggle={this.toggleMenu}
        />
        <HeaderLarge state={this.state} />
      </header>
    );
  }
}

export default Header;
