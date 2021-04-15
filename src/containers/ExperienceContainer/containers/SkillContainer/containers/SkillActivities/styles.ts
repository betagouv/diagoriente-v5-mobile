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
      '@media not all and (min-resolution:.001dpcm)': {
    
        [theme.breakpoints.down(377)]: {
          padding: '35px 35px 40px 33px',
        },
      },
    },

    activitiesContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      paddingTop: 30,
    },

    circle: {
      width: '12.5%',
      minWidth: 130,
      marginBottom: 62,
    },

    marginTitle: {
      margin: '0 15px',
    },

    btnpreced: {
      color: '#6B6B6A',
      height: 50,
      marginTop: 33,
      fontSize: 14,
      textAlign: 'center',
      fontWeight: 'bold',
      textDecoration: 'none',
    },

    arrowpreced: {
      marginRight: 13,
    },

    loadingContainer: {
      width: '100%',
      height: 'calc(100vh - 166px)',
      display: 'flex',
      justifyContent: 'center',
    },

    avatarStyle: {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
    },

    title: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
    },

    subtitle: {
      width: '100%',
    },

    activityContainer: {
      paddingBottom: 54,
    },

    activity: {
      borderRadius: 5,
      border: '1px solid #00CFFF',
      padding: 15,
      margin: 8,
      fontSize: 14,
      maxWidth: '100%',
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      justifyContent: 'left',
    },

    selected: {
      width: '100%',
    },

    selectedActivity: {
      backgroundColor: '#7AE6FF',
      border: 'transparent',
      color: '#424242',
      fontWeight: 700,
      fontSize: 14,
      '&:hover': {
        backgroundColor: '#7AE6FF',
      },
    },

    themeRoot: {
      padding: '0 40px',
    },

    titleSelection: {
      color: '#424242',
      fontSize: 14,
      paddingTop: 31,
      margin: 0,
    },

    themeSelection: {
      display: 'flex',
      paddingTop: 15,
      alignItems: 'center',
      paddingBottom: 25,
    },

    themeTile: {
      paddingLeft: 2,
      fontSize: 14,
      flex: 1,
    },

    themeAvatar: {
      paddingRight: 2,
    },

    childrenClassName: {
      display: 'flex',
      margin: 0,
      textAlign: 'left',
    },
    extraActivityLink: {
      display: 'flex',
      width: '100%',
      height: 20,
      marginTop: 70,
      marginBottom: 40,
    },
    extraActivityLabel: {
      color: '#00B2DB',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: '20px',
      marginLeft: 10,
    },
  }),
);
