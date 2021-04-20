import { makeStyles } from '@material-ui/core/styles';

const MAX_WIDTH = 600;
const FONT_SIZE = 14;
export const PADDING = '25px 45px 50px 45px';

export default makeStyles((theme) => ({
  root: {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  conseilContainer: {
    padding: PADDING,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down(415)]: {
      padding: '25px 17px 50px 17px',
    },
  },
  closeFullModelContainer: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 45,
    borderBottom: '0.5px solid #C9C9C7',
    [theme.breakpoints.down(415)]: {
      paddingLeft: 15,
    },
  },
  closeModelLabel: {
    fontFamily: 'Andika New Basic',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '26px',
    color: '#DB8F00',
    marginLeft: 20,
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: 25,
  },
  titleContainer: {
    fontSize: 42,
    fontFamily: 'ocean',
    marginTop: 25,
  },
  description: {
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
    color: '#db8f00',
    maxWidth: MAX_WIDTH,
    width: '100%',
  },
  info: {
    marginTop: 20,
    maxWidth: MAX_WIDTH,
  },
  text: {
    fontSize: FONT_SIZE,
  },
  logoContainerBtn: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
    paddingBottom: 30,
  },
  btn: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btnLabel: {
    color: '#011A5E',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
  },
}));
