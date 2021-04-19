import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  root: {
    width: '100% !important',
    outline: 0,
    [theme.breakpoints.down('xs')]: {
      height: 'max-content !important',
    },
  },
  sliderContainer: {
    width: '100%',
  },
  content: {
    display: 'flex',
  },
  sliderWrapper: {
    width: '100%',
  },
  item: {
    width: '100%',
    height: 'calc(100vh - 150px)',
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'auto',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
  },
  titleContainer: {
    marginBottom: 30,
    display: 'flex',
    justifyContent: 'center',
  },
  CheckBoxStyle: {
    paddingLeft: '5%',
    display: 'flex',
    padding: '20px 0px',
    pointerEvents: 'none',
  },
  titleContainer1: {
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'Andika New Basic',
    color: '#424242',
    textAlign: 'center',
    // textTransform: 'uppercase',
    width: '90%',
    // lineHeight:20,
    padding: 10,
  },
  traitLogo: {
    position: 'absolute',
    top: -16,
    left: -22,
    zIndex: 3,
  },
  topTitle: {
    fontWeight: 900,
    fontSize: 24,
    color: theme.palette.secondary.main,
  },
  bottomTitle: {
    fontWeight: 900,
    fontSize: 24,
    color: theme.palette.primary.main,
    position: 'relative',
    zIndex: 5,
  },
  descLogo: {
    position: 'relative',
    height: 80,
  },
  avatarContainer: {
    display: 'flex',
    flexWrap: 'wrap',
    height: '100%',
    justifyContent: 'space-evenly',
  },
  circle: {
    width: '100%',
  },
  subitem: {
    minWidth: '100%',
    width: '29%',
    cursor: 'pointer',
    backgroundColor: 'rgba(243,242,244,1)',
  },
  subitem1: {
    minWidth: 170,
    padding: '10px 3px',
    width: '25%',
    cursor: 'pointer',
  },
  selected: {
    position: 'relative',
    // backgroundColor: 'rgba(223, 212, 255, 0.5)',
    backgroundColor: '#A275FF',
    padding: '10px',
  },
  titleSelected1: {
    fontWeight: 400,
    fontSize: 14,
    fontFamily: 'Andika New Basic',
    color: '#fff',
    textAlign: 'center',
    width: '90%',
    padding: 10,
    ligneHeight: '20px',
  },
  // wrapperBtn: {
  //   display: 'flex',
  //   flexDirection: 'column',
  //   alignItems: 'center',
  //   [theme.breakpoints.down('xs')]: {
  //     display: 'flex',
  //     flexDirection: 'column',
  //     alignItems: 'center',
  //     left: '7vh',
  //     paddingTop: '57vh',
  //   },
  // },
  nextWrap: { right: 4 },
  prevWrap: { left: 3 },
  containerBtnLeft: {
    width: 44,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
    borderStyle: 'hidden',
    paddingLeft: 5,
    '&:active': {
      borderStyle: 'hidden',
    },
    position: 'absolute',
    top: '-19.8vh',
    left: '0vh',
    zIndex: 99999,

    [theme.breakpoints.up(560)]: {
      top: '-17.6vh',
    },
    [theme.breakpoints.up(620)]: {
      top: '-46.6vh',
    },
  },
  containerBtnRight: {
    width: 44,
    borderRadius: '50%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
    outline: 'none',
    borderStyle: 'hidden',
    paddingLeft: 5,
    '&:active': {
      borderStyle: 'hidden',
    },
    position: 'absolute',
    top: '-19.8vh',
    right: '0vh',
    zIndex: 9999,

    [theme.breakpoints.up(560)]: {
      top: '-17.6vh',
    },
    [theme.breakpoints.up(620)]: {
      top: '-46.6vh',
    },
  },
  rotatedArrow: {
    transform: 'rotate(180deg)',
  },
  titleContainerArrow: { margin: '5px 10px' },
  topTitleLeftArrow: {
    fontSize: 22,
    fontWeight: 900,
    color: theme.palette.secondary.main,
    textAlign: 'left',
    fontFamily: 'ocean',
    lineHeight: '26px',
    textTransform: 'uppercase',
  },
  topTitleRightArrow: {
    fontSize: 22,
    fontWeight: 900,
    color: theme.palette.secondary.main,
    textAlign: 'left',
    fontFamily: 'ocean',
    lineHeight: '26px',
    textTransform: 'uppercase',
  },
  bottomTitleLeftArrow: {
    fontSize: 22,
    fontWeight: 900,
    color: theme.palette.primary.main,
    textAlign: 'left',
    fontFamily: 'ocean',
    lineHeight: '26px',
    textTransform: 'uppercase',
  },
  bottomTitleRightArrow: {
    fontSize: 22,
    fontWeight: 900,
    color: theme.palette.primary.main,
    textAlign: 'left',
    fontFamily: 'ocean',
    lineHeight: '26px',
    textTransform: 'uppercase',
  },

  hide: {
    display: 'none',
  },
  arrowCon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  rowReverse: {
    flexDirection: 'row-reverse',
  },
  testImg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
  },
  imageContainer: {
    position: 'relative',
    padding: '10px',
  },
  show: {
    opacity: 1,
  },
  hideImg: {
    opacity: 0,
  },
  checkBox: {
    marginRight: 10,
  },
  checkBoxImg: {
    width: 20,
    height: 20,
  },
  slideTitle: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    height: 55,
    width: '100%',
    backgroundColor: '#FFFFFF',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
  },
  imgHeader: {
    margin: 10,
    [theme.breakpoints.down(330)]: {
      margin: 3,
    },
  },

  imgHeaderPersonnes: {
    margin: 10,

    marginRight: '50px',
    [theme.breakpoints.down(380)]: {
      marginRight: '20px',
    },
    [theme.breakpoints.down(330)]: {
      margin: 2,
    },
  },
  btnTitle: {
    fontFamily: 'Andika New Basic',
    fontWeight: 700,
    fontSize: 14,
    lineHeight: 20,
    color: '#420FAB',
    marginLeft: '10px',
  },
}));
