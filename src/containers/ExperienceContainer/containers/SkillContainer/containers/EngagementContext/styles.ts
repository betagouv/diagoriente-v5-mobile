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
      height:'80px',
      flexDirection: 'column',
      // padding: '50px 120px',
      width: '100%',
      // [theme.breakpoints.down('sm')]: {
      //   padding: '40px',
      // },
    },

    themeContainer: {
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 60,
      height:'100vh',
      // paddingBottom: 140,
      alignItems: 'center',
    },

    circleContainer: {
      display: 'flex',
      width: '100%',
      flexWrap: 'wrap',
      padding: SKILL_CONTAINER_PADDING,
      [theme.breakpoints.down('xs')]: {
        justifyContent: 'center',
      },
      [theme.breakpoints.down('sm')]: {
        padding: 30,
      },
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
      textDecoration: 'underline',
      fontWeight: 'bold',
    },

    arrowpreced: {
      marginRight: 13,
    },

    header: {
      height: 50,
      display: 'flex',
      justifyContent: 'space-between',
      // alignItems: 'center',
      width: '100%',
    },

    hideLine: {
      textDecoration: 'none',
    },

    loadingContainer: {
      width: '100%',
      height: 'calc(100vh - 166px)',
      backgroundColor: '#E5E5E5',
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
      '&:hover': {
        backgroundColor: 'rgba(122, 230, 255, 0.2)',
      },
    },

    selected: {
      width: '100%',
    },

    selectedActivity: {
      backgroundColor: '#7AE6FF',
      color: '#424242',
      fontWeight: 'bold',
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

    selectRoot: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
    },
    selectContainer: {
      display: 'flex',
      width: '100%',
      marginTop: 20,
      paddingLeft: 20,
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: 50,
    },

    text: {
      paddingLeft: 20,
    },

    contextContainer: {
      display: 'flex',
      width: '100%',
      flexWrap:'wrap',
      justifyContent: 'center',
      paddingTop: 30,
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
      boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 1,
      '@media not all and (min-resolution:.001dpcm)': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 13px ',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
      }
    },
    classNameTitle: {
      color: '#4D6EC5',
      fontSize: 18,
      lineHeight: '26px',
      '@media not all and (min-resolution:.001dpcm)': {
        color: '#4D6EC5',
        fontSize: 14,
        lineHeight: '26px',
      }
    },
  }));
