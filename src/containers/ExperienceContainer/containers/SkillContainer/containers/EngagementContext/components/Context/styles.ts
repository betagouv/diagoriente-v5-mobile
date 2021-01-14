import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      [theme.breakpoints.down(420)]: {
        justifyContent: 'space-between',
      }, 
    },

    checkbox: {
      marginTop: 30,
    },

    title: {
      fontSize: 18,
      marginTop: 30,
      WebkitTextStroke: '#424242',
      WebkitTextStrokeWidth: '0.2px',
      [theme.breakpoints.down(420)]: {
        width:'min-content'
      }, 
    },

    titleChecked: {
      fontWeight: 'bold',
    },
  }));
