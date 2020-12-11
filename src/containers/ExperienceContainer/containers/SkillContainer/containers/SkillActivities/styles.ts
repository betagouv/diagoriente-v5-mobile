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
      paddingTop: 34,
    },

    circleContainer: {
      display: 'flex',
      width: 'auto',
      alignItems: 'center',
      flexDirection: 'column',
      padding: '30px 0px 192px 0px',
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

    hideLine: {
      textDecoration: 'none',
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
      textAlign: 'center',
    },

    activityContainer: {
      paddingBottom: 54,
    },

    activity: {
      borderRadius: 30,
      border: '1px solid #00CFFF',
      padding: 5,
      margin: 8,
      fontSize: 14,
      maxWidth: '100%',
      width: 'fit-content',
      '&:hover': {
        backgroundColor: 'rgba(122, 230, 255, 0.2)',
      },
    },

    selected: {
      width: '100%',
    },

    selectedActivity: {
      backgroundColor: '#7AE6FF',
      border: 'transparent',
      color: '#424242',
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
      justifyContent: 'center',
      width: '100%',
      margin: '0px 10px',
    },

    previousNext: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 8px ',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: 'white',
    },
    classNameTitle: {
      color: '#4D6EC5',
      fontSize: 18,
      lineHeight: '26px',
    },
  }),
);
