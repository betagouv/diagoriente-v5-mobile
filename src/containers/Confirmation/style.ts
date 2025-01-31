import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: 'calc(100vh - 113px)',
    paddingBottom: 40,
    alignItems: 'center',

  },
  title: {
    fontFamily: 'ocean',
    fontWeight: 900,
    fontSize: 42,     
    textAlign: 'center',
    color: theme.palette.info.main,
    marginBottom: 40,
  },
  subTitle: {
    fontSize: 14,
    textAlign: 'center',
  },
  loginContainer: {
    maxWidth: 757,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    '&::-webkit-scrollbar': {
      display: 'none',
    },
  },
  container: {
    margin: 'auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 50,

    '&::-webkit-scrollbar': {
      display: 'none',
    },
    '@media not all and (min-resolution:.001dpcm)': {
      margin: 'auto',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: 50,

      '&::-webkit-scrollbar': {
        display: 'none',
      },
    }
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
    width: '48vh',
    padding: '0px 25px',
    '&:hover': {
      backgroundColor: '#223A7A',
      borderRadius: 10,
    },
  },
  btnLabel: {
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 14,
    '@media not all and (min-resolution:.001dpcm)': {
      color: '#fff',
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: 12,
    }
  },
  emptyDiv: {
    width: 260,
  },
}));
