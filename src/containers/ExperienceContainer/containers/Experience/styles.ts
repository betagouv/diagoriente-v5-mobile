import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'auto',
      position: 'relative',
      height: '100vh',
      '&::-webkit-scrollbar': {
        display: 'none',
      },
    },
    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },
    circleContainer: {
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: '#4D6EC5',
      borderTop: '1px solid #C9C9C7',
      '&:hover': {
        backgroundColor: '#223A7A',
      },
    },
    illus: {
      width: '100%',
      height: '100%',
    },
    avatarContainer: {
      flexDirection: 'row',
      width: 'fit-content',
    },
    avatarTitle: {
      alignSelf: 'center',
      color: '#FFFFFF',
      fontSize: 16,
      lineHeight: '23px',
      textAlign: 'left',
      maxWidth: 125,
    },

    circleStyle: {
      width: 220,
      [theme.breakpoints.down(350)]: {
        width: 200,
        height: '95%',
      },
    },
    circleStyleEng: {
      width: 240,
      [theme.breakpoints.down(350)]: {
        width: 210,
        height: '95%',
      },
    },
  }),
);
