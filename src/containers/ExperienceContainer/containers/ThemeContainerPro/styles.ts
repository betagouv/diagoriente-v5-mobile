import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '50px 120px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        padding: '0px',
      },
      minHeight: 'calc(100vh - 148px)',
    },

    themeContainer: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
    },

    searchContainer: {
      width: '100%',
    },
    boxSearch: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 40px 0px 40px ',
      [theme.breakpoints.down(340)]: {
        padding: '60px 19px 0px 20px ',
      },
    },

    boxSearchTitle: {
      fontWeight: 'bold',
      fontSize: 14,
      width: '100%',
      lineHeight: ' 20px',
      textAlign: 'center',
      color: '#223A7A',
    },

    inputSearchContainer: {
      marginTop: 15,
      width: '100%',
    },

    wrapperInput: {
      width: '100%',
      justifyContent: 'center',
    },

    inputBase: {
      width: 290,
      margin: '0px',
    },

    input: {
      fontWeight: 700,
    },

    resultsContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0px -4px 5px 0px rgb(50 50 50 / 25%)',
      position: 'absolute',
    },

    titleWrapper: {
      width: '100%',
      minHeight: 36,
      height: 'fit-content',
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(201, 201, 199, 0.5)',
      padding: '0px 40px',
      [theme.breakpoints.down(340)]: {
        padding: '0px 20px',
      },
    },

    resultTitle: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: '20px',
      color: '#424242',
      padding: '8px 0px',
      maxWidth: '100%',
    },

    selectedResult: {
      backgroundColor: 'rgba(122, 230, 255, 0.5)',
      borderBottom: 'none',
    },

    resultWrapper: {
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #C9C9C7',
    },

    ativityContainer: {
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #C9C9C7',
      padding: '10px 40px 5px 60px',
      [theme.breakpoints.down(340)]: {
        padding: '10px 20px 5px 40px',
      },
    },

    activity: {
      fontSize: 12,
      lineHeight: '15px',
      color: '#424242',
      marginBottom: 10,
    },

    errorMsg: {
      color: '#D60051',
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
      lineHeight: '20px',
      marginTop: 20,
    },
  }),
);
