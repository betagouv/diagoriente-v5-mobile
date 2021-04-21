import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<
  Theme,
  {
    fullSelect?: boolean;
    fullScreenModal?: boolean;
    open?: boolean;
    arrowColor?: string;
    borderColor?: string;
    placeHolderColor?: string;
  }
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

  inputContainer1: {
    height: 46,
    width: 320,
    fontFamily: 'Andika New Basic',

    border: (props) => `1px solid ${'#C9C9C7' && props.borderColor} `,
    borderRadius: 5,
    margin: '6px 0px',
    background: '#fff',
    paddingLeft: (props) => (props.fullSelect || props.fullScreenModal ? 36 : 20),
    outline: 0,
    position: 'relative',
    fontWeight: 'bold',
    color: '#424242',
    fontSize: 14,
    '&:focus-within': {
      borderColor: theme.palette.success.main,
    },
    '&::placeholder': {
      color: (props) => props.placeHolderColor || '#424242 ',

      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 20,
    },
    [theme.breakpoints.down(380)]: {
      width: 290,
    },
  },
  selectedInput: {
    border: (props) => `1px solid ${'#C9C9C7' && props.borderColor} `,
    textOverflow: 'ellipsis',
    height: 46,
    width: 320,
    fontFamily: 'Andika New Basic',
    borderRadius: 5,
    margin: '6px 0px',
    background: '#fff',
    paddingLeft: (props) => (props.fullSelect || props.fullScreenModal ? 36 : 20),
    outline: 0,
    position: 'relative',
    fontWeight: 'bold',
    fontSize: 14,

    '&::placeholder': {
      color: (props) => props.placeHolderColor || 'rgb(0, 178, 219) ',

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
    paddingBottom: 50,
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
    [theme.breakpoints.down(420)]: {
      paddingLeft: 0,
    },
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
  btn: {
    zIndex: 1,
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
      [theme.breakpoints.up(566)]: {
        height: '85%',
        overflow: 'auto',
      },
    },
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
    borderBottom: '0.5px solid #C9C9C7',
    justifyContent: 'center',
    [theme.breakpoints.down(330)]: {
      width: 'auto',
    },
  },
  closeFullModelContainer: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottom: '0.5px solid #C9C9C7',
    [theme.breakpoints.down(420)]: {
      width: 'inherit',
    },
    [theme.breakpoints.down(330)]: {
      marginLeft: 5,
    },
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
    width: 295,
    color: (props) => props.arrowColor || '#420FAB',
    marginLeft: 10,
    [theme.breakpoints.down(330)]: {
      width: 'inherit',
      marginLeft: 5,
    },
  },
  CheckBoxStyle: {
    paddingLeft: '5%',
    display: 'flex',
    padding: '20px 0px',
    pointerEvents: 'none',
  },
  close: {
    padding: '20px',
    [theme.breakpoints.down(420)]: {
      padding: '10px',
    },
    [theme.breakpoints.down(330)]: {
      padding: 0,
      position: 'absolute',
      right: '5px',
      top: '15px',
    },
  },
}));
