import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export const WIDTH = 1000;
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
      paddingBottom: 100,
    },

    themeContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      paddingTop: 34,
      /*  paddingBottom: 250, */
      // height: '100vh',
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
      padding: '15px 50px',
      justifyContent: 'center',
      [theme.breakpoints.down(380)]: {
        padding: '15px 25px',
      },
    },

    selectGrid: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',
    },

    selectContainer: {
      display: 'flex',
      alignItems: 'center',
    },

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      marginBottom: 50,
    },

    rootClassName: {
      marginTop: 20,
    },

    styleSelect: {
      border: '2px solid #00CFFF',
      color: '#00B2DB',
      WebkitTextStroke: '#00B2DB',
      WebkitTextStrokeWidth: '0.1px',
    },

    borderSelect: {
      border: '1px solid #00CFFF',
    },

    addIcon: {
      position: 'absolute',
      bottom: 7,
      right: 0,
      cursor: 'pointer',
      [theme.breakpoints.down(420)]: {
        right: -20,
      },
    },

    questionRow: {
      display: 'flex',
      width: '100%',
      position: 'relative',
    },
    rowActivityWidth: {
      maxWidth: WIDTH,
      width: '100%',
    },
    rowActivity: {
      display: 'flex',
      position: 'relative',
    },
    rowActivityHidden: {
      opacity: 0,
    },
    activityTitle: {
      width: '100%',
      marginTop: 45,
      maxWidth: WIDTH,
    },
    'MuiTextField-root': {
      '& fieldset': {
        display: 'none',
      },
    },

    textArea: {
      background: '#FFFF',
      borderRadius: 5,
      resize: 'none',
      width: '100%',
      maxWidth: WIDTH,
      border: '1px solid #00CFFF',
    },

    defaultValue: {
      fontSize: 14,
      color: '#6B6B6A',
    },

    activityCaracter: {
      margin: 2,
      color: theme.palette.error.main,
      maxWidth: WIDTH,
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingBottom:50
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
  }),
);
