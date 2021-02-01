import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  drawerPaper: {
    width: '287px',
    height: 'auto',
    backgroundColor: theme.palette.background.default,
    overflow: 'auto',
    display: 'flex',
    justifyContent: 'center',
    padding: 20,
    borderRadius: '0px 0px 10px 0px',
    [theme.breakpoints.down(550)]: { width: '80%' },
  },

  root: {
    width: '100%',
    maxWidth: 360,
  },

  linkContainer: {
    margin: 0,
    listStyle: 'none',
    textDecoration: 'none',
    fontSize: 14,
    paddingBottom: 10,
    paddingTop: 14,
    borderBottom: '0.5px solid rgba(255,255,255,0.5)',
    '&:last-child': {
      border: 'none',
      paddingBottom: 0,
    },
  },

  link: {
    textDecoration: 'none',
    color: '#F3F2F4',
    width: '100%',
    position: 'relative',
  },
  linkJob: {
    textDecoration: 'none',
    color: '#223A7A',
    width: 'fit-content',
    position: 'relative',
  },
  firstUseLink: {
    backgroundColor: '#ffc354',
    borderRadius: 7,
    padding: 5,
    fontSize: 15,
    fontWeight: 'bolder',
  },

  square: {
    width: '80px',
    height: '50px',
    background: '#ffff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  imageWrapper: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 20,
    paddingTop: 10,
  },

  toolbar: {
    height: 39,
  },
  msgContainer: {
    position: 'absolute',
    top: 300,
    left: 0,
    zIndex: 9999,
    display: 'flex',
    [theme.breakpoints.up(600)]: {
      top: 40,
      left: 315,
    },
    [theme.breakpoints.up(550)]: {
      top: 40,
      left: 290,
    },
  },
  textMsg: {
    fontWeight: 'bold',
    fontSize: '18px',
    lineHeight: '31px',
    color: '#fff',
    width: '320px',
    padding: 15,
    textAlign: 'justify',
    [theme.breakpoints.up(550)]: {
      width: '275px',
    },
    [theme.breakpoints.up(600)]: {
      width: 'calc(57% - 330px)',
    },
    [theme.breakpoints.up(700)]: {
      width: 'calc(57% - 240px)',
    },
    [theme.breakpoints.up(800)]: {
      width: 'calc(57% - 170px)',
    },
  },
  btn: {
    backgroundColor: '#FFA600',
    marginTop: 20,
    marginLeft: 16,
    '&:hover': {
      backgroundColor: '#FFA600',
    },
  },
  btnLabel: {
    color: '#223A7A',
    fontWeight: 'bold',
  },
}));
