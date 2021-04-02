import { makeStyles, Theme } from '@material-ui/core/styles';
import { position } from 'html2canvas/dist/types/css/property-descriptors/position';

export default makeStyles<Theme>((theme) => ({
  container: {
    width: '100%',
    height: `100%`,
    display: 'flex',
    justifyContent: 'center',
    flex: '1 1 0%',
    position: 'relative',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    marginBottom: 10,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  },
  titleTopContainer: { display: 'flex', justifyContent: 'center', flex: 1, fontFamily: 'Ocean' },
  topTitle: {
    fontSize: 35,
    fontWeight: 900,
    color: theme.palette.secondary.main,
    textTransform: 'uppercase',
    margin: '0px 5px',
  },
  bottomTitle: {
    fontSize: 35,
    fontWeight: 900,
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    margin: '0px 5px',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 35,
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'center !important',
    },
  },
  linkContainer: {
    width: 'auto',
    paddingRight: 20,
  },
  wrapper: {
    width: '100%',
    position: 'relative',
    flex: '1 1 0%',
  },
  maxWidth: {
    maxWidth: 1080,
    position: 'relative',
    flex: '1 1 0%',
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  loadingContainer: {
    width: '100%',
    height: 'calc(100vh - 166px)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5E5E5',
  },
  circleContainer: {
    position: 'relative',
    display: 'flex',
    width: '100%',
    flexWrap: 'wrap',
    flex: '1 1 0%',
    padding: '0px 0px',
    [theme.breakpoints.down('xs')]: {
      justifyContent: 'center',
    },
    [theme.breakpoints.down('sm')]: {
      'padding-top': '0px',
    },
  },
  footer: {
    height: 90,
    backgroundColor: theme.palette.secondary.main,
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px -4px 6px rgba(0, 0, 0, 0.25)',
    padding: '10px 60px 10px 10px',
    position: 'relative',
    [theme.breakpoints.down('xs')]: {
      padding: 10,
      overflow: 'overlay',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
      '-ms-overflow-style': 'none',
    },
  },
  description: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#fff',
    lineHeight: '22px',
  },
  descriptionContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginRight: 10,
  },
  footerContent: {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    overflow: 'overlay',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '-ms-overflow-style': 'none',
  },
  btn: {},
  contentBtn: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapperBtn: {
    alignSelf: 'center',
  },


  btnLabel: {
    color: '#fff',
    fontSize: '16px',
    fontFamily: 'Andika New Basic',
    fontWeight: 'bold',
  },
  textModal: {
    padding: '20px 0px',
    textAlign: 'center',
  },
  titleContainerModal: {
    fontWeight: 'bold',
    fontSize: 32,
    fontFamily: 'ocean',
    color: theme.palette.secondary.main,
    textAlign: 'center',
    marginBottom: 20,
  },
  imgContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 20,
    width: '80%',
  },
  imgContainerWarning: {
    width: '100%',
    height: '100%',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  ellipse: {
    backgroundColor: '#420FAB',
    height: '92px',
    width: '92px',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    bottom: 32,
    right: 15,
  },
  textEllipsis: {
    fontSize: 24,
    fontFamily: 'Ocean',
    color: 'white',
  },
  headerModelConfirm: {
    backgroundColor: '#fff',
    height: '65px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  textModelConfirm: {
    color: '#420FAB',
    fontFamily: 'Andika New Basic',
    fontWeight: 900,
    fontSize: 16,
    lineHeight: '32px',
    textAlign: 'center',
  },
  itemRow: {
    height: '18vh',
    display: 'flex',
    alignItems: 'center',
    backgroundColor: 'rgba(223, 212, 255, 0.5)',
  },
  arrowStyle: {
    transform: 'rotate(90deg)',
    marginLeft: 20,
  },
  btnNext: {
    backgroundColor: '#7533FF',
    height: '50px',
    right: '0px',
    top: '0px',
    width: '150px',
    position: 'absolute',
    textAlign: 'center',
    [theme.breakpoints.down(330)]: {
      width: '120px',
    },
  },
  fiveCircle: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    height: '50px',
    backgroundColor: '#420FAB',
    position: 'fixed',
    bottom: '0px',
    boxShadow: ' 0px -4px 5px rgba(0, 0, 0, 0.1)',
    justifyContent: 'flexStart',
    alignItems: 'center',
  },
  circleNumber:{
border:'none',
  },
  placeHolderCircle:{
margin:'7px'
  },
  circle: {
    borderRadius: '50%',
    // border: '1px solid #fff',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '	rgb(255,255,255,0.5)',
    fontFamily: 'Ocean ',
    fontSize: '20px',
    fontWeight: 900,
    width: 30,
    height: 30,
    color: '#7533FF',
  },
 
  circleSelected: {
    borderRadius: '50%',
    border: '1px solid #fff',
    margin: '5px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    fontFamily: 'Ocean',
    fontSize: '20px',
    fontWeight: 900,
    width: 30,
    height: 30,
    color: '#7533FF',
    // [theme.breakpoints.down(380)]: {
    //   margin: '7px',
    // },
 
  },
  diagPop: {
    height: ' 600px',
    width: '400px',
    position:'relative',
    [theme.breakpoints.down(426)]: {
      height: ' 530px',
    },
    [theme.breakpoints.down(380)]: {
      width: '338px',
    },
    [theme.breakpoints.down(330)]: {
      width: '295px',
    },
  },
  closePop: {
    right: '58px',
    top: '48px',
    position: 'fixed',
    [theme.breakpoints.down(426)]: {
      right: '5px',
      top: '50px',
    },

  },
  closePop1: {
    right: '10px',
    top: '115px',
    position: 'fixed',
    [theme.breakpoints.down(380)]: {
      right: '4px',
    },

  },
  comprisButton: {
    color: '#7533FF',
    fontSize: '16px',
    fontFamily: 'Andika New Basic',
    fontWeight: 'bold',
  },
  titreModal: {
    color: '#7533FF',
    fontSize: '32px',
    fontFamily: 'Ocean Six',
    fontWeight: 900,
  },
  modalAtt: {
    height: '100px important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 95,
    [theme.breakpoints.down(380)]: {
      padding: 85,
    },
    [theme.breakpoints.down(330)]: {
      padding: 65,
    },
  },
  modalAtt2: {
    height: '100px important',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 80,
    [theme.breakpoints.down(380)]: {
      padding: 70,
    },
    [theme.breakpoints.down(330)]: {
      padding: 60,
    },
  },
}));
