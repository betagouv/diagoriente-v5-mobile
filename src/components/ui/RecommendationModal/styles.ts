import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },

  content: {
    maxWidth: 1080,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 30,
  },
  imgContainer: {
    width: 'fit-content !important',
  },
  squareContainerClassName: {
    height: '10px !important',
  },
  titleThemeDone: {
    fontSize: 14,
    marginTop: 30,
    fontWeight: 700,
    marginBottom: 30,
  },

  title: {
    fontFamily: 'ocean',
    fontSize: 62,
    fontWeight: 900,
    color: '#FF0060',
  },

  titleClassName: {
    whiteSpace: 'nowrap',
    fontSize: 14,
    fontWeight: 700,
    marginTop: 50,
  },

  classNameTitle: {
    fontSize: 18,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    width: 500,
    alignItems: 'center',
    fontSize: 42,
    fontWeight: 900,
  },

  textDescription: {
    marginTop: 20,
    marginBottom: 30,
    width: 500,
    alignItems: 'center',
    fontSize: 18,
  },

  text: {
    fontSize: 18,
    color: '#424242',
    width: '100%',
    textAlign: 'center',
    margin: 10,
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },

  btn: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: 'bold',
    cursor: 'pointer',
    width: 156,
    '&:hover': {
      backgroundColor: '#00B2DB',
    },
  },
  labelContainer: {
    padding: '3px 0px 3px 45px',
  },

  btnLabel: {
    color: theme.palette.info.main,
    display: 'flex',
  },
  arrow: { marginLeft: 25, marginRight: 19 },

  previousNext: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '8px 8px ',
    position: 'fixed',
    bottom: 0,
    width: '100%',
    backgroundColor: 'white',
    boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
    zIndex: 1,
  },

  info: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontSize: 14,
    cursor: 'pointer',
    color: '#424242',
    fontWeight: 'bold',
  },

  titleContainer: {
    width: '100%',
    height: 168,
    backgroundColor: '#FFFFFF',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    display: 'flex',
    paddingBottom: '100px',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F3F2F4',
  },
  modalContainerOK: {
    display: 'flex',
    paddingBottom: '100px',
    flexDirection: 'column',
    alignItems: 'center',
    flex: 1,
    backgroundColor: '#F3F2F4',
    height: '100%',
    minHeight: 600,
  },

  titleModal: {
    fontFamily: 'ocean',
    fontSize: 32,
    textAlign: 'center',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    marginBottom: 10,
  },

  descriptionModal: {
    fontSize: 14,
    fontWeight: 400,
    textAlign: 'center',
    color: '#424242',
    marginTop: 15,
    marginBottom: 10,
  },

  descriptionModalContainer: {
    fontSize: 14,
    textAlign: 'center',
    color: '#424242',
    marginTop: 20,
    width: '85%',
  },

  subTitle: {
    fontSize: 14,
  },

  marginInput: {
    margin: '6px 0px 0px 0px',
    width: '100%',
  },

  fontInput: {
    fontSize: 14,
    '&::placeholder': {
      color: '#C9C9C7',
      opacity: 1,
    },

    '&::-ms-input-placeholder': {
      color: '#C9C9C7',
      opacity: 1,
    },

    '&::-ms-input-placeholder ': {
      color: '#C9C9C7',
      opacity: 1,
    },
  },

  experienceContainer: {
    width: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    marginBottom: 15,
  },

  formContainer: {
    // width: '85%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 15,
  },

  inputContainer: {
    display: 'flex',
  },

  iconBackground: {
    marginTop: 30,
    marginBottom: 40,
  },

  message: {
    color: '#FF0060',
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
  },

  btnpreced: {
    color: '#6B6B6A',
    height: 50,
    marginTop: 33,
    fontSize: 14,
    textAlign: 'center',
    textDecoration: 'underline',
  },

  arrowpreced: {
    marginRight: 13,
    marginTop: 4,
  },

  btnContainerModal: {
    display: 'flex',
    justifyContent: 'center',
  },

  btnSuccModal: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 7,
  },

  precedbutton: {
    display: 'flex',
    textDecoration: 'underline',
    cursor: 'pointer',
    justifyContent: 'center',
    alignItems: 'centet',
    '&:hover': {
      backgroundColor: 'none',
    },
  },

  avatar: {
    paddingBottom: 100,
  },

  btnSkillCardContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 173,
    marginTop: 30,
  },

  btnSkillCard: {
    backgroundColor: '#FFA600',
    fontSize: 18,
    fontWeight: 'bold',
    '&:hover': {},
  },

  textArea: {
    background: '#FFFF',
    borderRadius: 5,
    width: '100%',
    resize: 'none',
    '&: root': {
      height: 265,
    },
    '&: multiline': {
      padding: '35px 40px 30px 30px',
    },
  },

  defaultValue: {
    fontSize: 14,
    color: '#6B6B6A',
    lineHeight: '21px',
    height: 265,

    '@media not all and (min-resolution:.001dpcm)': {
      fontSize: 14,
      color: '#6B6B6A',
      lineHeight: '21px',
      height: 300,
    },
  },

  multiline: { padding: '35px 40px 30px 30px' },

  popupContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    alignItems: 'center',
    flex: '1 1 0%',
    justifyContent: 'space-between',
  },

  popupDescription: {
    textAlign: 'center',
    color: '#424242',
  },

  incluse: {
    backgroundColor: '#FF0060',
    color: '#fff',
    fontSize: 18,
    marginTop: 25,
    '&:hover': {
      backgroundColor: '#D60051',
    },
  },

  linkHome: {
    color: '#00B2DB',
    fontSize: 14,
    fontWeight: 'bold',
    textDecoration: 'none',
    marginTop: 14,
  },

  inputRoot: {
    display: 'flex',
    flexDirection: 'column',
  },
  hideText: {
    opacity: '0',
    margin: 0,
    height: 20,
  },

  errorName: {
    color: theme.palette.error.main,
    opacity: '1',
  },
  marginText: {
    marginLeft: '28%',
  },
  start: {
    color: '#00CFFF',
    fontWeight: 'bold',
  },
  required: {
    fontSize: 14,
    marginTop: 15,
    textAlign: 'center',
    paddingLeft: 20,
  },
}));
