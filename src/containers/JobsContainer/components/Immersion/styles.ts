import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  immersion: {
    width: '100%',
    /* height: 314, */
    background: '#ffe9c3',
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
    height: 29,
    width: 29,
    marginBottom: 10,
  },
  titleImersion: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  btnImersionContainer: {},
  btnImersion: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    marginTop: 20,
    padding: '7px 60px',
  },
  btnLabel: { color: '#011A5E', fontWeight: 'bold' },

  autocompleteContainer: {
    margin: '10px 0px',
  },
  autoCompleteStyle: {
    width: '320px !important',
    height: '46px !important',
  },
}));
