import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },

    themeContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '35px 40px 40px 40px',
      flexGrow: 1,
      [theme.breakpoints.down(340)]: {
        padding: '35px 20px 40px 20px',
      },
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
    },
    defaultValue: {
      fontSize: 14,
      color: '#6B6B6A',
    },
    'MuiTextField-root': {
      '& fieldset': {
        display: 'none',
      },
    },

    textArea: {
      background: '#FFFF',
      borderRadius: 5,
      resize: 'none',
      width: '100%',
      border: '1px solid #C9C9C7',
      marginTop: 25,
    },
    activityCaracter: {
      color: '#FF0060',
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
    },
  }),
);
