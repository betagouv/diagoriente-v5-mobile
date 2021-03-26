import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

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
    },

    themeContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '35px 40px 40px 40px',
      height: '100vh',
    },

    circleContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '30px 0px 20px 0px',
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
  }),
);
