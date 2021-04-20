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
      backgroundColor: '#F3F2F4',
      height: '100vh',
      padding: '20px 40px',
      [theme.breakpoints.down(340)]: {
        padding: '20px',
      },
    },

    /*  themeContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      height: '77vh',
      paddingTop: 34,
      paddingBottom: 150,
      alignItems: 'center',
      [theme.breakpoints.down(370)]: {
        paddingTop: 10,
        height: '95vh',
      },
      [theme.breakpoints.up(560)]: {
        height: '180vh',
      },
    }, */

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
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
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
      flexDirection: 'column',
      justifyContent: 'center',
      marginTop: 40,
      [theme.breakpoints.down(420)]: {
        marginTop: 10,
      },
    },
    textContainer: {
      display: 'flex',
      alignItems: 'baseline',
      marginBottom: 8,
      width: '100%',
    },
    text: {
      marginRight: 5,
      color: '#5A6170',
      fontWeight: 'bold',
      fontSize: 16,
      '@media not all and (min-resolution:.001dpcm)': {
        '@supports (-webkit-appearance:none) and (display:flow-root)': {
          marginRight: 10,
          color: '#5A6170',
          fontWeight: 'bold',
          fontSize: 14,
        },
      },
    },
    note: {
      fontSize: 12,
      lineHeight: '15px',
      color: '#00B2DB',
    },
    datePickerContainer: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
    },
    example: {
      fontSize: 12,
      lineHeight: '15px',
      color: '#6B6B6A',
    },

    /*   dateContainer: {
      marginTop: 35,
      [theme.breakpoints.down(420)]: {
        marginTop: 5,
      },
      '@media not all and (min-resolution:.001dpcm)': {
        '@supports (-webkit-appearance:none) and (display:flow-root)': { marginTop: 35, marginRight: '-2vh' },
      },
    }, */

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
      },
    },
    classNameTitle: {
      color: '#4D6EC5',
      fontSize: 18,
      lineHeight: '26px',
      '@media not all and (min-resolution:.001dpcm)': {
        '@supports (-webkit-appearance:none) and (display:flow-root)': {
          color: '#4D6EC5',
          fontSize: 14,
          lineHeight: '26px',
        },
      },
    },
    dateStyle: {
      minWidth: '80px !important',
      left: '150px !important',
      '& .makeStyles-menu-1139 ': {
        minWidth: '60px !important',
      },
    },
    inputContainer: {
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
        display: 'flex',
        flexDirection: 'column',
        gridGap: 0,
        alignItems: 'center',
        marginTop: 20,
      },
      [theme.breakpoints.down(370)]: {
        marginTop: 10,
      },
    },
    onGoingContainer: {
      display: 'flex',
      alignItems: 'baseline',
      marginTop: 30,
      pointerEvents: 'auto',
    },
    onGoingLabel: {
      fontSize: 16,
      lineHeight: '24px',
      color: '#424242',
      marginLeft: 12,
    },
  }),
);
