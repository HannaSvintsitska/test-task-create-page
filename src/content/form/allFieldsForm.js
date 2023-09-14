import {
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid,
  RadioGroup,
  TextField,
} from '@mui/material';
import React from 'react';
import { mobStyle, style } from './styleForFields';
import BpRadio from './checkedIcon';
import { radioTextStyle } from './styleForMui';
import { useMediaQuery } from 'react-responsive';

const AllFieldsForm = () => {
  const isMobile = useMediaQuery({
    query: '(max-width: 426px)',
  });
  return (
    <Grid container justifyContent="space-between">
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          id="standard-basic"
          label="First name"
          variant="standard"
          sx={isMobile ? mobStyle : style}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Last name"
          variant="standard"
          sx={isMobile ? mobStyle : style}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Email"
          variant="standard"
          sx={isMobile ? mobStyle : style}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Phone number"
          variant="standard"
          sx={isMobile ? mobStyle : style}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl>
          <FormLabel id="demo-row-radio-buttons-group-label">
            <span className="radio-label">Select Subject?</span>
          </FormLabel>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            sx={isMobile ? { marginTop: '10px' } : { marginTop: '15px' }}
          >
            <FormControlLabel
              defaultChecked={true}
              value="1"
              control={<BpRadio />}
              label="General Inquiry"
              sx={radioTextStyle}
            />
            <FormControlLabel
              value="2"
              control={<BpRadio />}
              label="General Inquiry"
              sx={radioTextStyle}
            />
            <FormControlLabel
              value="3"
              control={<BpRadio />}
              label="General Inquiry"
              sx={radioTextStyle}
            />
          </RadioGroup>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          id="standard-basic"
          label="Message"
          variant="standard"
          size={isMobile ? 'small' : ''}
          placeholder="Write your message.."
          sx={isMobile ? { margin: '25px 0' } : style}
        />
      </Grid>
      <Grid item xs={12} className="flex-end-form">
        <Button className="button-send-form">Send message</Button>
      </Grid>
    </Grid>
  );
};

export default AllFieldsForm;
