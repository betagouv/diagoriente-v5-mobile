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
      paddingBottom: 70,
      width: '100%',
    },
    modal: {
      width: 250,
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
      width: '100%',
      flexWrap: 'wrap',
      padding: '10px 25px 90px 25px',
      justifyContent: 'center',
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

    hideLine: {
      textDecoration: 'none',
    },

    loadingContainer: {
      width: '100%',
      height: 'calc(100vh - 166px)',
      backgroundColor: '#E5E5E5',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },

    avatarStyle: {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
    },

    title: {
      color: '#424242',
      textAlign: 'center',
      fontSize: 14,
    },

    competences: {
      width: '100%',
      margin: 0,
      border: '1px solid #4D6EC5',
      borderRadius: 5,
      padding: 10,
      fontSize: 18,
      color: '#424242',
    },
    infoDisplyed: {
      width: '100%',
      margin: 0,
      border: '1px solid #4D6EC5',
      borderRadius: 5,
      padding: 10,
      fontSize: 18,
      color: '#424242',
      backgroundColor: ' rgba(77, 110, 197, 0.2)',
      '&:hover': {
        backgroundColor: ' rgba(77, 110, 197, 0.2)',
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

    selected: {
      width: '100%',
    },

    activityContainer: {
      paddingBottom: 54,
    },

    selectedCompetence: {
      backgroundColor: '#4D6EC5',
      color: '#fff',
      fontSize: 18,
      fontWeight: 'bold',
      '&:hover': {
        backgroundColor: '#4D6EC5',
      },
    },

    tooltip: {
      background: '#4D6EC5',
    },

    margin: {
      margin: 0,
    },

    incluse: {
      backgroundColor: '#FF0060',
      color: '#fff',
      fontSize: 18,
      '&:hover': {
        backgroundColor: '#D60051',
      },
    },
    popupContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      flex: '1 1 0%',
      justifyContent: 'space-between',
    },
    iconClassName: {
      marginBottom: 31,
    },
    popupDescription: {
      textAlign: 'center',
    },
    footerContainer: {
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: 'white',
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
        color: '#4D6EC5',
        fontSize: 14,
        lineHeight: '26px',
      },
    },
  }),
);
