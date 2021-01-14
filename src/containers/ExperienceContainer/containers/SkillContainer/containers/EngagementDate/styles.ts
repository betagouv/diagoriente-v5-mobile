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
      paddingTop: 34,
      paddingBottom: 150,
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
      height: '100%',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
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

    contextContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'center',
      paddingTop: 30,
    },
    contextPadding: {
      paddingRight: 40,
    },

    date: {
      display: 'flex',
      alignItems: 'center',
      justifyContent:'center',
      marginTop: 40,
    },

    text: {
      marginRight: 10,
      color: '#5A6170',
      fontWeight: 'bold',
      fontSize: 16,
    },

    dateContainer: {
      marginTop: 35,
    },

    errorText: {
      display: 'flex',
      alignItems: 'center',
      height: 20,
      fontSize: 14,
      color: theme.palette.error.main,
      marginLeft: 32,
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
    },
    classNameTitle: {
      color: '#4D6EC5',
      fontSize: 18,
      lineHeight: '26px',
    },
    inputContainer:{
      display: 'grid',
      gridTemplateAreas: '"label input"',
      gridTemplateColumns: '172px 229px',
      gridGap: '15px',
      gridTemplateRows: '45px',
      alignItems: 'center',
      justifyContent: 'center',
      margin: '0px 0px 0px 0px',
      width: '100%',
      [theme.breakpoints.down(470)]: {
        display:'flex',
        flexDirection:'column',
        gridGap:0,
        alignItems:'center',
        marginTop:20
        },
    },
  }));
