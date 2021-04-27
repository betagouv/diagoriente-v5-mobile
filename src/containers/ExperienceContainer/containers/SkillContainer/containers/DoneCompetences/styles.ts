import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },

  content: {
    width: '100%',
    height: '100vh',
    backgroundColor: '#F3F2F4',
    [theme.breakpoints.up(560)]: {
      height: 'auto',
    },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '60px 30px 75px 30px',
    '@media not all and (min-resolution:.001dpcm)': {
      maxWidth: 1080,
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '70px 30px 75px 30px',
    },
  },

  header: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    margin: '40px 0px 75px 0px',
  },

  title: {
    fontFamily: 'ocean',
    fontSize: 32,
    fontWeight: 900,
    color: '#FF0060',
  },

  description: {
    marginTop: 30,
    marginBottom: 50,
    width: '100%',
    alignItems: 'center',
    fontSize: 14,
    fontWeight: 700,
    padding: '0px 15px',
    '@media not all and (min-resolution:.001dpcm)': {
      marginTop: 0,
      marginBottom: 20,
      width: '100%',
      alignItems: 'center',
      fontSize: 14,
      fontWeight: 700,
      padding: '0px 15px',
    },
  },

  text: {
    fontSize: 14,
    color: '#424242',
    width: '100%',
    textAlign: 'center',
  },
  avatar: {
    width: 'fit-content !important',
    position: 'absolute',
    top: 150,
  },

  btnskillContainer: {
    display: 'flex',
    flexDirection: 'column',
    '@media not all and (min-resolution:.001dpcm)': {
      marginTop: '9vh',
      display: 'flex',
      flexDirection: 'column',
    },
  },

  btnskillFirstUser: {
    paddingTop: 20,
    paddingBottom: 20,
  },

  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    marginBottom: 30,
  },

  btnSkillCardContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
  },

  btn: {
    backgroundColor: theme.palette.secondary.main,
    fontSize: 18,
    fontWeight: 700,
    width: '100%',
    '&:hover': {
      backgroundColor: '#00B2DB',
    },
    '@media not all and (min-resolution:.001dpcm)': {
      backgroundColor: theme.palette.secondary.main,
      fontSize: 14,
      fontWeight: 700,
      width: '100%',
      '&:hover': {
        backgroundColor: '#00B2DB',
      },
    },
  },

  btnFirstUse: {
    backgroundColor: '#7533FF',
    fontSize: 18,
    fontWeight: 'bold',
    '&:hover': {
      backgroundColor: '#420FAB',
    },
  },

  btnLabelFirstUse: {
    color: '#fff',
  },

  btnSkillCard: {
    backgroundColor: '#D60051',
    fontSize: 18,
    fontWeight: 'bold',
    width: '100%',
    minWidth: 290,
    height: 50,
    color: '#fff',
    '&:hover': {
      backgroundColor: '#FF0060',
    },
    '@media not all and (min-resolution:.001dpcm)': {
      backgroundColor: '#D60051',
      fontSize: 14,
      fontWeight: 'bold',
      width: '100%',
      minWidth: 290,
      height: 50,
      color: '#fff',
      '&:hover': {
        backgroundColor: '#FF0060',
      },
    },
  },

  btnLabel: {
    color: theme.palette.info.main,
  },

  btnChildrenClassName: {
    margin: '3px 10px 3px 10px !important',
  },

  info: {
    textAlign: 'center',
    textDecoration: 'underline',
    fontSize: 14,
    paddingBottom: 50,
    cursor: 'pointer',
    color: '#424242',
    fontWeight: 'bold',
  },

  titleModal: {
    fontFamily: 'ocean',
    fontSize: 32,
    textAlign: 'center',
    color: theme.palette.primary.main,
    textTransform: 'uppercase',
  },

  descriptionModal: {
    fontSize: 18,
    textAlign: 'center',
    color: '#424242',
    marginTop: 30,
  },

  subTitle: {
    fontSize: 14,
  },

  avatarTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    lineHeight: '24px',
    color: '#223A7A',
  },

  themeDoneContainer: {
    width: '100%',
    marginTop: 25,
  },
  titleThemeContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  titleThemeDone: {
    fontSize: '14px',
    fontWeight: 400,
  },

  checked: {
    marginLeft: 10,
  },
}));
