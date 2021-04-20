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
      flexGrow: 1,
    },

    titleContainer: {
      padding: '35px 40px 40px 40px',
      display: 'flex',
      flexDirection: 'column',
    },

    title: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
    },

    skillsContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },

    loadingContainer: {
      width: '100%',
      height: 'calc(100vh - 166px)',
      backgroundColor: '#E5E5E5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    iconClassName: {
      marginBottom: 31,
    },

    popupContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      flex: '1 1 0%',
      justifyContent: 'space-between',
    },

    popupDescription: {
      textAlign: 'center',
    },

    incluse: {
      backgroundColor: '#FF0060',
      color: '#fff',
      fontSize: 18,
      '&:hover': {
        backgroundColor: '#D60051',
      },
    },

    emptyDiv: {
      width: '100%',
      height: 49,
    },
  }),
);
