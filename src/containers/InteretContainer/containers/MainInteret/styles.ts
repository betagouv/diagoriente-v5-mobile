import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 20,
    backgroundColor: '#f3f2f4',
  },
  content: {
    maxWidth: 1080,
    width: '100%',
  },
  titleContainer: {
    fontWeight: 'bold',
    fontSize: 42,
    fontFamily: 'ocean',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    marginBottom: '9vh',
  },
  description: {
    fontSize: 18,
    textAlign: 'center',
    marginBottom: 10,
  },
  TitlePosition: {
    'padding-top': '3vh',
  },
  title: {
    fontWeight: 'bold',
    fontSize: 30,
    fontFamily: 'ocean',
    color: theme.palette.primary.main,
    textAlign: 'center',
    textTransform: 'uppercase',
    marginBottom: 25,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
  },
  textFooter: {
    'font-family': 'Andika New Basic',
    'font-style': 'normal',
    'font-weight': 'normal',
    'font-size': '14px',
    'line-height': '22px',
    'text-align': 'center',
    'margin-left': '53px',
    'margin-right': '53px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 1,
  },
  interetTiltle: {
    width: '33.33vw',
    textAlign: 'center',
  },
  titleBorders: {
    borderLeft: '1px solid #FFFFFF',
    borderRight: '1px solid #FFFFFF',
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    color: '#fff',
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  linksContainer: {
    position: 'fixed',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'linear-gradient(180deg, #F3F2F4 0%, #F3F2F4 51.56%, rgba(243, 242, 244, 0) 100%), #F3F2F4',
    [theme.breakpoints.up(560)]: {
      display: 'flex',
    },
  },
}));
