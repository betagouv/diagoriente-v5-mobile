import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  container: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#f3f2f4',
    [theme.breakpoints.up(560)]: {
      height: '155vh',
    },
    [theme.breakpoints.up(700)]: {
      height: '125vh',
    },
  },
  content: {
    maxWidth: 1080,
    width: '100%',
  },
  interestContainerLogo: {
    display: 'flex',
    justifyContent: 'center',
  },
  subTitleContainer: {
    textAlign: 'center',
    height: '450px',
  },
  subTitle: {
    fontSize: 18,
    paddingLeft: '68px',
    paddingRight: '68px',
    'padding-top': '5vh',
    [theme.breakpoints.down(330)]: {
      paddingLeft: '20px',
      paddingRight: '20px',
    },
  },
  avatarContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  btnContainer: {
    width: '100vw',
    display: 'flex',
    height: '50px',
    position: 'absolute',
    bottom: '0px',
    justifyContent: 'center',
    backgroundColor: '#7533FF',
  },
  btn: {
    backgroundColor: theme.palette.success.main,
    height: 50,
    width: 168,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
      borderRadius: 10,
    },
  },
  line1: {
    'font-family': 'Andika New Basic',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '14px',
    'line-height': '21px',
    'text-align': 'start',
  },

  tContainer: { height: '80px' },
}));
