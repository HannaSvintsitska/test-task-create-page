import React from 'react';
import './form.css';
import { Grid } from '@mui/material';
import phone from '../../images/phone.svg';
import location from '../../images/location.svg';
import mail from '../../images/email.svg';
import circle1 from '../../images/circle-small.svg';
import letter from '../../images/letter.svg';
import { useMediaQuery } from 'react-responsive';
import { ReactComponent as Twitter } from '../../images/twitter.svg';
import { ReactComponent as Instagram } from '../../images/instagram.svg';
import { ReactComponent as Discord } from '../../images/discord.svg';
import AllFieldsForm from './allFieldsForm';

const Form = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 426px)',
  });

  return (
    <Grid container className="container-form">
      <Grid item xs={12} md={5} className="contact-info-form">
        <img src={circle1} alt="small-circle" className="circle1" />
        <div className="circle2" />
        <Grid container className="container-space-between-form">
          <Grid item xs={12} className="display-flex-column-form">
            <span className="contact-h1-form">Contact Information</span>
            <span className="contact-h2-text-form">
              Say something to start a live chat!
            </span>
          </Grid>
          <Grid item xs={12} className="info-form">
            <Grid container>
              <Grid item xs={12} className="icon-and-text-form">
                <img src={phone} alt="phone" />
                <span className="info-contact-text-form">+6758 4834 643</span>
              </Grid>
              <Grid item xs={12} className="icon-and-text-form">
                <img src={mail} alt="mail" />
                <span className="info-contact-text-form">demo@gmail.com</span>
              </Grid>
              <Grid item xs={12} className="icon-and-text-form">
                <img src={location} alt="location" />
                <span className="info-contact-text-form">
                  168 Dartmouth Street Boston
                </span>
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12} className="icons-social-networks-form">
            <Grid item xs={2} className="icon-container-form">
              <Twitter className="image-form" />
            </Grid>
            <Grid item xs={2} className="position-form icon-container-form">
              <Instagram className="image-form" />
            </Grid>
            <Grid item xs={2} className="icon-container-form">
              <Discord className="image-form" />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6} className="fields-form">
        <AllFieldsForm />
      </Grid>
      {!isMobile && <img src={letter} alt="letter" className="image-letter" />}
    </Grid>
  );
};

export default Form;
