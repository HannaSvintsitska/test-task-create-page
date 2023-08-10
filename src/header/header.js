import { Button, IconButton } from '@mui/material';
import React from 'react';
import './header.css';
import arrow from '../images/icon-arrow.svg';
import circle from '../images/Ellipse 35.svg';
import person from '../images/Mask group.svg';
import cart from '../images/bi_cart.svg';
import Burger from './burger-menu';

const Header = () => {
  return (
    <div className="main-container-header">
      <span className="textLogo">Logo here</span>
      <Burger />
      <div className="nav-bar-header">
        <Button className="buttons-nav-bar">Home</Button>
        <Button className="buttons-nav-bar">
          Features <img src={arrow} alt="dropdown" />
        </Button>
        <Button className="buttons-nav-bar">Blog</Button>
        <Button className="buttons-nav-bar">Shop</Button>
        <Button className="buttons-nav-bar">About</Button>
        <Button className="buttons-nav-bar">Contact</Button>
        <div className="buttons-group-header">
          <IconButton className="first-icon-button-header">
            <img src={circle} alt="circle" className="icon-circle-header" />
            <img src={person} alt="person" className="icon-person-header" />
          </IconButton>
          <IconButton>
            <img src={circle} alt="circle" className="icon-circle-header" />
            <img src={cart} alt="cart" className="icon-person-header" />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
