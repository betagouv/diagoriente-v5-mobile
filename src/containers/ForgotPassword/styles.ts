import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    // height: 'calc(100vh - 113px)',
    paddingBottom: 40,
    paddingTop: 40,
    alignItems: 'center',
  },
  title: {
    fontFamily: 'ocean',
    fontWeight: 900,
    fontSize: 42,
    textAlign: 'center',
    color: theme.palette.info.main,
    marginBottom: 60,
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
    marginBottom: 40,
    padding: '0px 13px',
  },
  subTitleSent: {
    fontSize: 14,
    textAlign: 'center',
  },
  loginContainer: {
    maxWidth: 757,
    width: '100%',
  },
  container: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
      width: '95%',
    },
  },
  errorText: {
    color: theme.palette.error.main,
    fontSize: 12,
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    height: 50,
    width: '100%',
    padding: '0px 7px',
    '&:hover': {
      backgroundColor: '#223A7A',
      borderRadius: 10,
    },
  },
  btnLabel: {
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  emptyDiv: {
    width: 260,
  },
  inputContainer: {
    display: 'grid',
    gridTemplateAreas: '"label input"',
    gridTemplateColumns: '138px 229px',
    gridGap: '15px',
    gridTemplateRows: '45px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 0px 0px 0px',
    width: '100%',
    [theme.breakpoints.down(400)]: {
      display: 'flex',
      // flexDirection:'column',
      // gridGap:0,
      flexWrap: 'wrap',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
}));
