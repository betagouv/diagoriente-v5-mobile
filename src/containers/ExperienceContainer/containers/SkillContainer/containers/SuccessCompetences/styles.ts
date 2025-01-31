import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: '#F3F2F4',
  },

  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '0px 30px 30px 30px',
    height: '100vh',
    [theme.breakpoints.down(330)]: {
      height: 'auto',
    },
    [theme.breakpoints.up(560)]: {
      height: 'auto',

    },
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
  },
  imgContainer: {
    width: 'fit-content !important',
    marginTop: 10,
  },
  title: {
    fontFamily: 'ocean',
    fontSize: 32,
    fontWeight: 900,
    color: '#FF0060',
  },

  titleClassName: {
    whiteSpace: 'nowrap',
    fontSize: 14,
  },

  classNameTitle: {
    fontSize: 14,
    color: ' #424242',
    paddingTop: 10,
  },
  description: {
    marginTop: 20,
    marginBottom: 20,
    width: 285,
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 700,
  },

  textDescription: {
    marginTop: 20,
    marginBottom: 30,
    width: 500,
    alignItems: 'center',
    fontSize: 18,
    padding: '0px 18px',
    maxWidth: 340,
    [theme.breakpoints.down(340)]: {
      maxWidth: 320,
    },
  },

  text: {
    fontSize: 14,
    color: '#424242',
    width: '100%',
    textAlign: 'center',
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
    '&:hover': {
      backgroundColor: '#00B2DB',
    },
    '@media not all and (min-resolution:.001dpcm)': {
      backgroundColor: theme.palette.secondary.main,
      fontSize: 14,
      fontWeight: 'bold',
      cursor: 'pointer',
      '&:hover': {
        backgroundColor: '#00B2DB',
      },
    }
  },

  btnLabel: {
    color: theme.palette.info.main,
  },

  info: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontSize: 14,
    cursor: 'pointer',
    color: '#424242',
    fontWeight: 'bold',
  },

  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  titleModal: {
    fontFamily: 'ocean',
    fontSize: 32,
    textAlign: 'center',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
    marginTop: 10,
  },

  descriptionModal: {
    fontSize: 18,
    textAlign: 'center',
    color: '#424242',
    marginTop: 15,
    marginBottom: 10,
  },

  descriptionModalContainer: {
    fontSize: 18,
    textAlign: 'center',
    color: '#424242',
    marginTop: 20,
    marginBottom: 50,
  },

  subTitle: {
    fontSize: 14,
  },

  marginInput: {
    margin: '13px 0px 0px 0px',
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
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
    paddingLeft: 91,
    paddingRight: 107,
    marginBottom: 15,
  },

  formContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginBottom: 28,
    paddingLeft: 91,
    paddingRight: 107,
  },

  inputContainer: {
    display: 'flex',
  },

  iconBackground: {
    background: '#ffff',
    marginTop: 30,
  },

  message: {
    color: '#FF0060',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
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
  },

  defaultValue: {
    fontSize: 14,
    color: '#6B6B6A',
  },

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

  titleThemeContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  titleThemeDone: {
    fontSize: 14,
    '@media not all and (min-resolution:.001dpcm)': {
      fontSize: 11,
    }
  },

  checked: {
    marginLeft: 10,
  },
}));
