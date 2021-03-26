import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<
  Theme,
  { fullSelect?: boolean; fullScreenModal?: boolean; open?: boolean; arrowColor?: string }
>((theme: Theme) => ({
  content: {
    position: 'relative',
  },
  inputWrapper: {
    display: 'flex',
    position: 'relative',
  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1200,
  },
  inputContainer: {
    height: 46,
    width: 320,
    fontFamily: 'Andika New Basic',
    border: (props) => `1px solid  ${props.open ? theme.palette.success.main : theme.palette.success.main}`,
    borderRadius: 5,
    margin: '6px 0px',
    background: '#fff',
    paddingLeft: (props) => (props.fullSelect || props.fullScreenModal ? 36 : 5),
    outline: 0,
    position: 'relative',
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 14,
    '&:focus-within': {
      borderColor: theme.palette.success.main,
    },
    '&::placeholder': {
      color: (props) => (props.open ? theme.palette.success.main : '#424242'),
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    [theme.breakpoints.down(380)]: {
      width: 290,
    },
  },
  inputContainer1: {
    height: 46,
    width: 320,
    fontFamily: 'Andika New Basic',
    border: (props) => `1px solid  ${props.open ? theme.palette.success.main : '#C9C9C7'}`,
    borderRadius: 5,
    margin: '6px 0px',
    background: '#fff',
    paddingLeft: (props) => (props.fullSelect || props.fullScreenModal ? 36 : 5),
    outline: 0,
    position: 'relative',
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 14,
    '&:focus-within': {
      borderColor: theme.palette.success.main,
    },
    '&::placeholder': {
      color: (props) => (props.open ? theme.palette.success.main : '#424242'),
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    [theme.breakpoints.down(380)]: {
      width: 290,
    },
  },
  logoContainer: {
    position: 'absolute',
    right: 12,
    top: 14,
    backgroundColor: '#fff',
  },
  menu: {
    position: 'absolute',
    left: 9,
    top: 19,
    zIndex: 3,
  },

  rotatedBase: {
    transform: 'rotate(90deg)',
    transition: '0.5s ease',
    cursor: 'pointer',
  },
  rotated: {
    transform: 'rotate(270deg)',
    transition: '0.5s ease',
    cursor: 'pointer',
  },
  secteurContainer: {
    background: '#FFFFFF',
    border: '1px solid #C9C9C7',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: 5,
    position: 'absolute',
    top: 46,
    width: 633,
    height: 448,
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px 25px',
    overflow: 'auto',
    zIndex: 5,
  },

  secteurContainerFullScreen: {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
    overflow: 'auto',
    zIndex: 99999,
  },
  fullScreenItem: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  itemSecteurWrapper: {
    height: 56,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    // '&:hover': {
    //   backgroundColor: 'rgba(255,211,130,0.2)',
    // },
  },

  itemSecteur: {
    margin: 2,
    width: 284,
    '&:hover': {
      color: theme.palette.primary.main,
    },
    padding: '3px 0px',
  },
  itemSecteurSelected: {
    '&:hover': {
      color: '#424242',
    },
  },
  item: {
    padding: '10px 10px',
    fontFamily: 'Andika New Basic',
    fontSize: 14,
    lineHeight: '26px',
    // '&:hover': {
    //   color: '#DB8F00',
    // },
  },
  selected: {
    fontWeight: 'bold',
    backgroundColor: '#FFD382 !important',
    // padding: '3px 10px',
    // '&:hover': {
    //   color: '#424242',
    // },
  },
btn:{
  zIndex:1
},
  modalWrapper: {
    width: '100%',
    height: '100%',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 99999,
  },

  backdrop: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(1,26,94,0.5)',
  },

  modalItemsContainer: {
    display: 'flex',
    flexDirection: 'column',
    background: '#FFFFFF',
    border: '1px solid #C9C9C7',
    boxSizing: 'border-box',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: '10px 10px 0px 0px',
    position: 'fixed',
    bottom: 0,
    left: 0,
    width: '100%',
    '@media not all and (min-resolution:.001dpcm)': {
      display: 'flex',
      flexDirection: 'column',
      background: '#FFFFFF',
      border: '1px solid #C9C9C7',
      boxSizing: 'border-box',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
      borderRadius: '10px 10px 0px 0px',
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
        }
  },

  optionList: {
    width: '100%',
    background: '#FFFFFF',
  },

  closeModelContainer: {
    width: '100%',
    height: 60,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottom: '0.5px solid #C9C9C7',
  },
  closeFullModelContainer: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between',
    borderBottom: '0.5px solid #C9C9C7',
  },

  itemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  arrowClose: {
    width: 12,
    height: 19,
    transform: 'rotate(180deg)',
  },

  modalArrowClose: {
    width: 12,
    height: 19,
    transform: 'rotate(90deg)',
  },
  closeModelLabel: {
    fontFamily: 'Andika New Basic',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '26px',
    color: (props) => props.arrowColor || '#420FAB',
    marginLeft: 20,
  },
  CheckBoxStyle: {
    paddingLeft: '5%',
    display: 'flex',
    padding: '20px 0px',
    pointerEvents: 'none',
  },
  close:{
    padding:'20px',
  }
}));
