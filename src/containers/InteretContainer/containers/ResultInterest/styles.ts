import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  root: {
    width: '100%',
    height: '90vh',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F3F2F4',
    [theme.breakpoints.up(500)]: {
      height: '87vh',
    },
    [theme.breakpoints.up(570)]: {
      height: '99vh',
    },
    [theme.breakpoints.up(666)]: {
      bottom: '-60vh',
    },
  },
  content: {
    maxWidth: 1080,
    width: '100%',
    [theme.breakpoints.up(560)]: {
      marginBottom: 50,
    },
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    alignItems: 'center',
    backgroundColor: '#ffff',
    height: 100,
    [theme.breakpoints.up(500)]: {
      marginTop: 0,
    },
  },
  title: {
    fontFamily: 'ocean',
    fontSize: 32,
    fontWeight: 900,
    color: '#420FAB',
  },
  description: {
    marginTop: 70,
    marginBottom: 70,
    width: '100%',
    'padding-left': '5vh',
    'padding-right': '5vh',
    [theme.breakpoints.up(500)]: {
      marginBottom: 17,
      marginTop: 35,
    },
  },
  text: {
    fontSize: 16,
    LineHeight: '26px',
    width: '100%',
    textAlign: 'center',
  },
  btnContainer: {
    width: '100%',
    height: 50,
    border: 'none',
    position: 'absolute',
    bottom: '0px',
    backgroundColor: '#7533FF',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    [theme.breakpoints.up(500)]: {
      bottom: '0px',
    },
    [theme.breakpoints.up(567)]: {
      bottom: '-43px',
    },
    // [theme.breakpoints.up(666)]: {
    //   bottom: '-43px',

    // },
  },
  btn: {
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btnLabel: {
    color: '#FFF',
  },

  info: {
    textAlign: 'center',
    textDecoration: 'underline',
    cursor: 'pointer',
    fontSize: 14,
    fontWeight: 900,
  },
  link: {
    color: '#00B2DB',
  },
}));
