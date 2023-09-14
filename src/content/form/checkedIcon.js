import { Radio, styled } from '@mui/material';
import checkedRadio from '../../images/checked-radio.svg';

const BpIcon = styled('span')(({ theme }) => ({
  borderRadius: '50%',
  width: 13,
  height: 13,
  boxShadow:
    theme.palette.mode === 'dark'
      ? '0 0 0 1px rgb(16 22 26 / 40%)'
      : 'inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)',
  backgroundColor: '#E0E0E0',

  'input:hover ~ &': {
    backgroundColor: theme.palette.mode === 'dark' ? '#30404d' : '#ebf1f5',
  },
}));

const BpCheckedIcon = () => {
  return <img src={checkedRadio} alt="radio" />;
};

export default function BpRadio(props) {
  return (
    <Radio
      disableRipple
      color="default"
      checkedIcon={<BpCheckedIcon />}
      icon={<BpIcon />}
      {...props}
    />
  );
}
