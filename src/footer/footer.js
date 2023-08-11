import React from 'react';
import './footer.css';
import { Button, Grid, TextField } from '@mui/material';
import phone from '../images/phone.svg';
import location from '../images/location.svg';
import mail from '../images/email.svg';

const Footer = () => {
  return (
    <div className="container-footer">
      <Grid container justifyContent="space-between">
        <Grid item xs={12} className="flex-center">
          <span className="logo-footer">Logo here</span>
        </Grid>
        <Grid item xs={12} className="margin-bottom">
          <hr />
        </Grid>
        <Grid item xs={7} md={3} className="margin-footer">
          <Grid container>
            <span className="header-in-footer">Reach us</span>
            <Grid item xs={12} className="icon-and-text-footer">
              <img src={phone} alt="phone" />
              <span className="info-contact-text-footer info-contact-text-adaptive">
                +1012 3456 789
              </span>
            </Grid>
            <Grid item xs={12} className="icon-and-text-footer">
              <img src={mail} alt="mail" />
              <span className="info-contact-text-footer info-contact-text-adaptive">
                demo@gmail.com
              </span>
            </Grid>
            <Grid item xs={12} className="icon-and-text-footer">
              <img src={location} alt="location" />
              <span className="info-contact-text-footer info-contact-text-adaptive">
                132 Dartmouth Street Boston, Massachusetts 02156 United States
              </span>
            </Grid>
          </Grid>
        </Grid>
        <Grid item xs={4} md={2} className="margin-footer">
          <span className="header-in-footer">Company</span>
          <span className="text-info-footer">About</span>
          <span className="text-info-footer">Contact</span>
          <span className="text-info-footer">Blogs</span>
        </Grid>
        <Grid item xs={8} md={2} className="margin-footer">
          <span className="header-in-footer">Legal</span>
          <span className="text-info-footer">Privacy Policy</span>
          <span className="text-info-footer">Terms & Services</span>
          <span className="text-info-footer">Terms of Use</span>
          <span className="text-info-footer">Refund Policy</span>
        </Grid>
        <Grid item xs={4} md={2} className="margin-footer">
          <span className="header-in-footer">Quick Links</span>
          <span className="text-info-footer">Techlabz Keybox</span>
          <span className="text-info-footer">Downloads</span>
          <span className="text-info-footer">Forum</span>
        </Grid>
        <Grid item xs={12} md={3} className="margin-footer">
          <Grid container className="container-join-news">
            <Grid item xs={12}>
              <span className="header-in-footer">Join Our Newsletter</span>
            </Grid>
            <Grid item xs={7}>
              <TextField
                id="outlined-basic"
                label="Your email address"
                variant="outlined"
                size="small"
                sx={{
                  margin: '29px 0 19px',
                  borderRadius: '4px 0 0 4px',
                  background: '#1E1E1E',
                  '& .MuiInputBase-root': {
                    color: 'white !important',
                    height: '36.5px',
                  },
                  '& label': {
                    color: '#616161',
                    fontFamily: 'Poppins',
                    fontSize: 11,
                    fontStyle: 'normal',
                    fontWeight: 400,
                    lineHeight: 'normal',
                  },
                }}
              />
            </Grid>
            <Grid item xs={5}>
              <Button className="button-subscribe-footer">Subscribe</Button>
            </Grid>
            <Grid item xs={12}>
              <span className="text-in-send-section">
                * Will send you weekly updates for your better tool management.
              </span>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Footer;
