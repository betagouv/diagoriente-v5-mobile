import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

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
    modal: {
      width: 250,
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

    subtitle: {
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

    avatarStyle: {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
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

    emptyDiv: {
      width: '100%',
      height: 50,
    },
  }),
);
