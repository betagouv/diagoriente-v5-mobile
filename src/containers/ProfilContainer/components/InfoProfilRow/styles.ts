import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    infoRowContainer: {
      display: 'flex',
      padding: '13px 0px',
      alignItems: 'center',
      [theme.breakpoints.down(420)]: {
     padding: '13px 24px',

      },
      [theme.breakpoints.down(330)]: {
        padding: '13px 0px',
   
         },
    },
    title: {
      fontSize: 14,
      fontWeight: 'bold',
      WebkitTextStroke: '#424242',
      WebkitTextStrokeWidth: '0.1px',
      textAlign: 'right',
      width: 170,
      marginRight: 26,
      [theme.breakpoints.down(380)]: {
        width: 155,
        marginRight:16
      },
      [theme.breakpoints.down(450)]: {
        textAlign: 'left',
      },
      [theme.breakpoints.down(330)]: {
        paddingLeft: 11,
      },

    },
    userInfo: {
      fontSize: 14,
      flex: '1 1 auto',
  
    },
  }));
