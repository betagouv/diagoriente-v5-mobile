import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export const WIDTH = 1000;
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

    greyContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      padding: '35px 40px 40px 40px',
      flexGrow: 1,
      [theme.breakpoints.down(340)]: {
        padding: '35px 20px 40px 20px',
      },
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
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
    },

    ActivitiesContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1,
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
      [theme.breakpoints.down(500)]: {
        right: -25,
      },
      [theme.breakpoints.down(420)]: {
        right: -20,
      },
      [theme.breakpoints.down(380)]: {
        right: -15,
      },
    },

    orDivider: {
      width: '100%',
      flexDirection: 'row',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '45px 0px',
    },
    halfDivider: {
      width: 'calc(50% - 25px)',
      borderTop: '1px solid #C9C9C7',
    },

    questionRow: {
      display: 'flex',
      width: '100%',
      position: 'relative',
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

    extraActivityLink: {
      display: 'flex',
      width: '100%',
      height: 20,
      marginTop: 50,
      marginBottom: 70,
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
