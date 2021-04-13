import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      backgroundColor: '#F3F2F4',
      height: '100vh',
      padding: '20px 40px',
      [theme.breakpoints.down(340)]: {
        padding: '20px',
      },
    },

    title: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
      textAlign: 'center',
    },
    inputBase: {
      width: 280,
      height: 45,
    },
  }),
);
