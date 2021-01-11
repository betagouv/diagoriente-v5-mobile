import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Theme as RequestTheme } from 'requests/types';

export default makeStyles<Theme, { theme?: Omit<RequestTheme, 'activities'> | null }>((theme: Theme) =>
  createStyles({
    appBar: {
      width: '100%',
      background: theme.palette.background.default,
      display: 'flex',
      justifyContent: 'center',
      position: 'fixed',
      bottom: 66,
      flexDirection: 'column',
      transition: 'all 250ms cubic-bezier(0.4, 0, 1, 1) 0ms',
      boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
    },

    container: {
      display: 'flex',
      height: '58px',
      alignItems: 'center',
      width: '100%',
      justifyContent: 'space-between',
      paddingLeft: 42,
      paddingRight: 21,
      cursor: 'pointer',
    },

    menuIconClosed: {
      transform: 'rotate(180deg)',
    },
    menuIcon: {
      transition: 'all 300ms linear',
    },
    titleSelection: {
      fontWeight: 'bold',
      fontSize: 18,
      color: '#FFFFFF',
    },

    childrenSelection: {
      background: '#FFFFFF',
      overflow: 'auto',
      maxHeight: 'calc(29vh - 70px)',
      // [theme.breakpoints.down(412)]: {
      //   maxHeight: 'calc(28vh - 70px)',

  
      //   },
      [theme.breakpoints.down(330)]: {
        maxHeight: 'calc(35vh - 70px)',

  
        },
    },

    header: {
      height: 50,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '100%',
    },

    btnLabel: {
      color: '#223A7A',
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      marginRight: 10,
    },

    avatarStyle: {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
    },

    activityContainer: {
      padding: '0px 15px 30px 15px',
    },

    activitySelected: {
      marginTop: 15,
      width: '100%',
      textAlign: 'left',
      fontSize: 14,
      '&:hover': {
        backgroundColor: '#7AE6FF',
      },
      '&:disabled': {
        border: 'none',
        color: '#00B2DB',
        // padding: 0,
        fontWeight: 'bold',
      },
    },

    selected: {
      width: '100%',
    },

    selectedActivity: {
      backgroundColor: '#7AE6FF',
      '&:hover': {
        backgroundColor: '#7AE6FF',
      },
    },

    themeRoot: {
      padding: (props) => (props.theme ? '0 0px' : 0),
    },

    activityTitleSelection: {
      color: '#424242',
      fontSize: 14,
      paddingTop: 31,
      margin: 0,
    },

    themeSelection: {
      display: 'flex',
      alignItems: 'center',
      padding: '30px 15px',
      [theme.breakpoints.down(370)]: {
        padding: '25px 15px',

        },
    },

    themeTile: {
      paddingLeft: 2,
      fontSize: 14,
      flex: 1,
      color: '#424242',
    },

    emptyChildren: {
      paddingTop: 50,
      paddingBottom: 50,
      paddingLeft: 45,
      paddingRight: 25,
      color: '#424242',
      fontSize: 14,
    },

    themeAvatar: {
      paddingBottom: 2,
      alignItems: 'flex-start',
    },
    circleClassName: {
      padding: 0,
      background: 'transparent',
    },
    dot: {
      textAlign: 'left',
      listStyle: 'inside',
      fontSize: 16,
      margin: 0,
      width:'fit-content',
      wordBreak:'break-word'
    },
    boldText: {
      fontWeight: 'bold',
    },
    blob: {
      background: 'rgba(255, 255,255, 0.5)',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      margin: 30,
      height: 26,
      width: 26,
    },
    badgeText: {
      color: theme.palette.background.default,
      fontWeight: 'bold',
      lineHeight: '17px',
    },

    squareContainerClassName: {
      height: 90,
      width: 90,
    },

    animation: {
      boxShadow: '0 0 0 0 rgba(255, 255,255, 1)',
      transform: 'scale(1)',
      animationName: '$pulse',
      animationDuration: '1500ms',
    },
    '@keyframes pulse': {
      from: {
        transform: 'scale(1.5)',
        boxShadow: '0 0 0 0 rgba(255, 255,255, 0.7)',
        width: 0,
        height: 0,
      },
      to: {
        transform: 'scale(1)',
        boxShadow: '0 0 0 10px rgba(0, 0, 0, 0)',
        width: 40,
        height: 40,
      },
    },
    selctionBlob: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
);
