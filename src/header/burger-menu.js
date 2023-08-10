import React, { useState } from 'react';
import './header.css';
import { Box, Button, Drawer, IconButton } from '@mui/material';
import burger from '../images/burger.svg';
import cross from '../images/cross.svg';
import arrowWhite from '../images/arrow_white.svg';
import circleWhite from '../images/circle-white.svg';
import accWhite from '../images/acc-white.svg';
import cartWhite from '../images/cart-white.svg';

const Burger = () => {
  const [open, setOpen] = useState(false);

  const list = () => (
    <Box
      sx={{
        width: 'auto',
        background: 'black',
        padding: '29px 20px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
      role="presentation"
      onClick={() => setOpen(false)}
      onKeyDown={() => setOpen(false)}
    >
      <div className="logo-and-button-burger">
        <span className="logo-text-burger-menu">Logo here</span>
        <IconButton onClick={() => setOpen(false)}>
          <img src={cross} alt="cross" />
        </IconButton>
      </div>
      <div className="display-fle-col-burger">
        <Button className="text-in-burger-menu">Home</Button>
        <Button className="text-in-burger-menu">
          Features <img src={arrowWhite} alt="dropdown" />
        </Button>
        <Button className="text-in-burger-menu">Blog</Button>
        <Button className="text-in-burger-menu">Shop</Button>
        <Button className="text-in-burger-menu">About</Button>
        <Button className="text-in-burger-menu">Contact</Button>
      </div>
      <div className="container-icons-burger">
        <IconButton className="first-icon-button-burger">
          <img src={circleWhite} alt="circle" className="icon-circle-header" />
          <img src={accWhite} alt="person" className="icon-person-header" />
        </IconButton>
        <IconButton className="second-icon-button-burger">
          <img src={circleWhite} alt="circle" className="icon-circle-header" />
          <img src={cartWhite} alt="person" className="icon-person-header" />
        </IconButton>
      </div>
    </Box>
  );

  return (
    <div className="burger-main-container">
      <React.Fragment>
        <IconButton onClick={() => setOpen(true)} className="burger-menu">
          <img src={burger} alt="burger" />
        </IconButton>
        <Drawer anchor={'top'} open={open} onClose={() => setOpen(false)}>
          {list()}
        </Drawer>
      </React.Fragment>
    </div>
  );
};

export default Burger;
