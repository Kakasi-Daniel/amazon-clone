import React, { useState } from 'react';
import './Header.css';
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';
import { auth } from './firebase';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

function Header() {
  const [{ basket, user }, dispatch] = useStateValue();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    }
  };

  const [btnStatus, change] = useState(['ham__btn']);

  const openMenu = () => {
    if (btnStatus.length === 1) {
      change([...btnStatus, 'opened']);
    } else {
      change(['ham__btn']);
    }
  };

  return (
    <>
      <div className="hamburger__nav">
        <Link to="/">
          <div onClick={openMenu} className={btnStatus.join(' ')}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </Link>
        <SearchIcon style={{ color: '#fff' }} />
        <Link to="/checkout">
          <div className="header__optionBasket">
            <ShoppingBasketIcon />
            <span className="header__optionLineTwo header__basketCount">
              {basket?.length}
            </span>
          </div>
        </Link>
        <Link to={!user ? 'login' : '/'}>
          <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionLineOne">
              {' '}
              {user ? user.email : 'Hello Guest'}
            </span>
            <span className="header__optionLineTwo">
              {user ? 'Sign Out' : 'Sign In'}
            </span>
          </div>
        </Link>
      </div>

      <div className="header">
        <Link to="/">
          <img
            className="header__logo"
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="header-logo"
          />
        </Link>
        <div className="header__search">
          <input type="text" className="header__searchInput" />
          <SearchIcon className="header__searchIcon" />
        </div>
        <div className="header__nav">
          {user ? (
            <div className="header__option myaccount">
              <p>My account</p> <AccountCircleIcon />
            </div>
          ) : null}

          <Link to={!user ? 'login' : '/'}>
            <div onClick={handleAuthentication} className="header__option">
              <span className="header__optionLineOne">
                Hello {user ? user.email : 'Guest'}
              </span>
              <span className="header__optionLineTwo">
                {user ? 'Sign Out' : 'Sign In'}
              </span>
            </div>
          </Link>
          <div className="header__option">
            <span className="header__optionLineOne">Returns</span>
            <span className="header__optionLineTwo">& Orders</span>
          </div>

          <div className="header__option">
            <span className="header__optionLineOne">Your</span>
            <span className="header__optionLineTwo">Prime</span>
          </div>

          <Link to="/checkout">
            <div className="header__optionBasket">
              <ShoppingBasketIcon />
              <span className="header__optionLineTwo header__basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Header;
