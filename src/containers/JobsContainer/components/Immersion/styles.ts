import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  immersion: {
    width: '100%',
    /* height: 314, */
    background: '#F3F2F4',
    position: 'relative',
    padding: '20px 45px 23px 45px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  logoContainer: {
    /*   position: 'absolute',
    top: -18,
    left: 120, */

    marginBottom: -24,
  },
  titleImersion: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  btnImersionContainer: {},
  btnImersion: {
    backgroundColor: '#D60051',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    marginTop: 20,
    padding: '10px 90px',
  },
  btnLabel: { color: '#ffff', fontWeight: 'bold' },

  autocompleteContainer: {
    margin: '10px 0px',
  },
  autoCompleteStyle: {
    width: '320px !important',
    height: '46px !important',
  },
  selectWrapper: {
    display: 'flex',
    position: 'relative',
  },
  containerSelect: {
    width: '70%',
    height: '36px',
    display: 'flex',
    position: 'relative',
    alignItems: ' center',
    border: '1px solid #C9C9C7',
    borderRadius: '4px',
    boxSizing: 'border-box',
    backgroundColor: '#ffff',

    [theme.breakpoints.down(380)]: {
      width: '80%',
    },
    [theme.breakpoints.down(361)]: {
      width: '85%',
    },
    [theme.breakpoints.down(330)]: {
      width: '100%',
    },
  },
  labelSelect: {
    fontWeight: 'bold',
    fontSize: '14px',
    lineHeight: '20px',
    textAlign: 'right',
    color: '#424242',
    marginLeft: '10px',
  },
  containerOptions: {
    position: 'absolute',
    zIndex: 50,
    top: '35px',
    right: '0px',
    width: '226px',
    maxHeight: 'auto',
    height: '99px',
    overflowY: 'auto',
    borderRadius: '5px',
    padding: '5px',
    backgroundColor: '#fff',
  },
  itemOption: {
    // color: '#10255e',
    padding: '10px 20px',
    fontWeight: 'bolder',
    lineHeight: '22px',
    fontSize: '14px',
    '&:hover': {
      backgroundColor: '#f5f6fb',
      borderRadius: '20px',
    },
  },
  rotated: {
    transform: 'rotate(270deg)',
    transition: '0.5s ease',
    position: 'absolute',
    top: '8px',
    right: '20px',
  },
  rotatedBase: {
    transform: 'rotate(90deg)',
    transition: '0.5s ease',
    position: 'absolute',
    top: '8px',
    right: '20px',
  },
}));
