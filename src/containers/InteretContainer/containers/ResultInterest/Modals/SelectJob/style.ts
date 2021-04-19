import { makeStyles, Theme } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';

export default makeStyles<Theme>((theme) => ({
  modalBody: {
    overflow: 'auto',
    paddingTop: 52,
    backgroundColor: '#F3F2F4',
    flex: 1,
  },
  titleModal: {
    fontFamily: 'ocean',
    fontSize: 32,
    textAlign: 'center',
    color: '#420FAB',
    textTransform: 'uppercase',
    height: 100,
    backgroundColor: '#fff',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  CheckBoxStyle: {
    paddingLeft: '5%',
    display: 'flex',
    padding: '20px 0px',
    pointerEvents: 'none',
  },
  descriptionModal: {
    fontSize: 14,
    textAlign: 'start',
    marginTop: 40,
    'padding-left': '4vh',
    'padding-right': '2vh',
  },
  descriptionModal1: {
    fontSize: 14,
    textAlign: 'center',
    marginTop: 40,
    'padding-left': '4vh',
    'padding-right': '2vh',
  },

  subTitle: {
    fontSize: 14,
    marginTop: 15,
  },

  experienceContainer: {
    width: '100%',
    padding: '30px 0px',
  },
  expContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingTop: '20px',
    marginBottom: '20px',
  },
  titlePerso: {
    color: '#424242',
    fontWeight: 900,
    fontSize: 16,
    padding: '20px',
  },
  titlePro: {
    color: '#424242',
    fontWeight: 900,
    fontSize: 16,
    padding: '20px',
    marginTop: '50px',
  },
  avatarStyle: {
    position: 'relative',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  themesContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  square: {
    height: '60px !important',
  },
  themeContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: '55px',
    padding: 20,

    [theme.breakpoints.down(330)]: {
      padding: 0,
      width: '80%',
    },
  },
  circle: {
    [theme.breakpoints.down(380)]: {
      width: '100px',
    },
    [theme.breakpoints.down(330)]: {
      width: '70px',
    },
  },
  themeContainerProSelected: {
    backgroundColor: '#7AE6FF',
  },
  themeContainerPersoSelected: {
    backgroundColor: '#7AE6FF',
  },
  checkBox: {
    marginRight: 10,
  },
  checkBoxImg: {
    width: 20,
    height: 20,
    backgroundColor: '#fff',
  },

  themeTitle: {
    textAlign: 'inherit',
    fontSize: 14,
    marginBottom: 3,
    [theme.breakpoints.down(380)]: {
      width: 'fit-content',
    },
  },
  themeTitleSelected: {
    fontWeight: 'bold',
  },
  btnContainerModal: {
    display: 'flex',
    justifyContent: 'center',
    borderRadius: 'none !important',

    width: '100%',
    position: 'fixed',
    bottom: 0,
    height: 48,
  },
  link: {
    fontSize: 14,
    fontWeight: 900,
  },
  btnContainer: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
  },
  btn: {
    backgroundColor: '#7533FF !important',
    width: '100%',
    height: 50,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnLabel: {
    color: '#FFF',
    '& .MuiButton-root-96:hover': {
      backgroundColor: '#7533FF',
    },
  },
  aide: {
    width: 51,
    height: 50,
    backgroundColor: '#C9C9C7',
    position: 'fixed',
    bottom: 20,
    right: 20,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  aideText: {
    fontWeight: 900,
    fontSize: 40,
    fontFamily: 'ocean',
    color: '#FFFFFF',
    paddingTop: 5,
    cursor: 'pointer',
  },
  accessibility: {
    paddingTop: 80,
    display: 'flex',
    justifyContent: 'center',
    paddingBottom: 150,
    'padding-bottom': '25%',
    [theme.breakpoints.up(700)]: {
      paddingTop: 30,
      paddingBottom: 70,
    },
    [theme.breakpoints.down(560)]: {
      paddingTop: 30,
      paddingBottom: 30,
    },
  },
  rotadArrow: {
    transform: 'rotate(180deg)',
    paddingRight: 5,
  },
  arrowClass: {
    paddingBottom: 20,
    display: 'flex',
  },
}));
