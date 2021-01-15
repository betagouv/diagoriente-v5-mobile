import { makeStyles } from '@material-ui/core/styles';

const MAX_WIDTH = 600;
const FONT_SIZE = 16;
const PADDING = '0px 45px 30px 45px';
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

  maxWidth: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: MAX_WIDTH,
    padding: PADDING,
    [theme.breakpoints.down(415)]: {
      padding: '0px 15px 30px 15px',
    },
  },

  titleContainer: {
    fontSize: 42,
    fontFamily: 'ocean',
    marginTop: 25,
    textAlign: 'center',
    textTransform: 'uppercase',
  },

  contactContainer: {
    width: '100%',
    fontSize: FONT_SIZE,
    padding: '20px 0',
  },
  information: {
    background: '#F3F2F4',
    border: '1px solid #C9C9C7 ',
    padding: '15px 24px',
    borderRadius: 5,
    fontSize: FONT_SIZE - 2,
  },

  text: {
    fontSize: FONT_SIZE,
    padding: '5px 0px 20px 0px',
  },

  textBold: {
    WebkitTextStroke: '#424242',
    WebkitTextStrokeWidth: '0.4px',
  },

  textArea: {
    background: '#FFFF',
    borderRadius: 5,
    resize: 'none',
    width: '100%',
  },

  defaultValue: {
    fontSize: 14,
    '&::placeholder': {
      opacity: 1,
      color: '#6B6B6A',
    },
  },

  textIdeaContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 20,
  },
  textIdeaRoot: {
    display: 'flex',
    color: '#db8f00',
    paddingBottom: 20,
    WebkitTextStroke: '#db8f00',
    WebkitTextStrokeWidth: '0.2px',
  },
  textIdea: {
    paddingLeft: 10,
    maxWidth: 'fit-content',
  },
  ideaText: {
    fontSize: 12,
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    paddingTop: 25,
    paddingBottom: 20,
  },
  checkboxText: {
    paddingLeft: 10,
  },

  btn: {
    position: 'relative',
    left: 'auto',
    bottom: 'auto',
    right: 'auto',
    top: 'auto',
    backgroundColor: '#FFA600',
    alignSelf: 'center',
    transform: 'none',
    '&:hover': {
      backgroundColor: '#FFA600',
    },
  },
  btnLabel: {
    color: '#011A5E',
    fontWeight: 'bold',
    fontSize: FONT_SIZE,
  },

  arrow: { width: '8px !important', height: '13 !important' },

  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  iconBackground: {
    background: '#ffff',
    marginTop: 30,
  },

  descriptionModalContainer: {
    fontSize: 18,
    textAlign: 'center',
    color: '#424242',
    marginTop: 20,
    marginBottom: 50,
  },

  message: {
    color: '#FF0060',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
  },
}));
