import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { isOpen: boolean }>((theme) => ({
  container: {
    display: 'flex',
    flex: '1 1 0%',
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 20,
    width: '90%',
  },
  profileHeader: {
    color: '#223A7A',
    fontFamily: 'Ocean',
    fontWeight: 900,
    fontSize: '2.2em',
    lineHeight: 1,
    marginLeft: 15,
    marginTop: 11,
  },
  logo: {
    marginTop: 4,
    height: 60,
    width: 60,
  },
  info: {
    fontSize: '1em',
    lineHeight: 1,
    color: '#223A7A',
  },
  link: {
    fontSize: '1em',
    lineHeight: 1,
    color: '#02B2DB',
    marginTop: 5,
    position: 'relative',
    zIndex: 3,
    '&:hover': {
      color: '#00CFFF',
    },
  },
  content: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    //height:'100vh',
    flex: '1 1 0%',
    justifyContent: 'stretch',
    marginTop: (props) => (props.isOpen ? 10 : 30),
  },
  contentChild: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 18,
    lineHeight: '29px',
  },
  bold: {
    fontWeight: 900,
    WebkitTextStroke: '0.2px',
  },
  firstContent: {
    display: 'flex',
    flexDirection: 'column',
    width: '90%',
    marginTop: 30,
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 10,
    /*   height: '100%',
    justifyContent: 'center', */
  },
  itemLink: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  itemButton: {
    backgroundColor: '#fff',
    height: 49,
    width: '90%',
    fontSize: '30px',
    fontFamily: 'Ocean',
    fontWeight: 900,
    paddingTop: 11,
    lineHeight: '32px',
    color: '#424242',
    '&:hover': {
      backgroundColor: '#fff',
      opacity: 0.7,
    },
    boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)',

    '@media not all and (min-resolution:.001dpcm)': {
      backgroundColor: '#fff',
      height: 49,
      width: '90%',
      fontSize: '22px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      paddingTop: 11,
      lineHeight: '32px',
      color: '#424242',
      '&:hover': {
        backgroundColor: '#fff',
        opacity: 0.7,
      },
      boxShadow:'0px 4px 4px rgba(0, 0, 0, 0.25)'
    }

  },
  itemDescription: {
    textAlign: 'center',
    fontSize: '12px',
    color: '#fff',
  },
  black: {
    color: '#424242',
  },
  blue: {
    color: '#223A7A',
  },
  purple: {
    color: '#420FAB',
  },
  textModal: {
    fontSize: 20,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '200px',
  },
}));
