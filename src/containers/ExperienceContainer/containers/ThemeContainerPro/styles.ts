import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CollectionsBookmarkOutlined } from '@material-ui/icons';
import { size } from 'lodash';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height: 'auto',
      display: 'flex',
      flexDirection: 'column',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      padding: '50px 120px',
      width: '100%',
      [theme.breakpoints.down('sm')]: {
        padding: '0px',
      },
      minHeight: 'calc(100vh - 148px)',
    },

    themeContainer: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
    },

    themeTitle: {
      color: '#424242',
      fontSize: 14,
    },

    searchContainer: {
      width: '100%',
    },
    boxSearch: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '60px 40px 0px 40px ',
      [theme.breakpoints.down(320)]: {
        padding: '60px 20px 0px 20px ',
      },
    },

    boxSearchTitle: {
      fontWeight: 'bold',
      fontSize: 14,
      width: '100%',
      lineHeight: ' 20px',
      textAlign: 'center',
      color: '#223A7A',
    },
    searchProp: {
      color: '#00CFFF',
    },
    inputSearchContainer: {
      marginTop: 15,
      width: '100%',
    },
    wrapperInput: { width: '100%', justifyContent: 'center' },
    inputBase: { width: 290, margin: '0px' },
    input: { fontWeight: 700 },
    resultsContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      boxShadow: '0px -4px 5px 0px rgb(50 50 50 / 25%)',
      position: 'absolute',
    },
    titleWrapper: {
      width: '100%',
      height: 35,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'rgba(201, 201, 199, 0.5)',
      paddingLeft: 40,
    },
    resultWrapper: {
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #C9C9C7',
    },
    selectedResult: {
      backgroundColor: 'rgba(122, 230, 255, 0.5)',
      borderBottom: 'none',
    },
    resultTitle: {
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: '20px',
      color: '#424242',
    },

    title: {
      fontWeight: 900,
      fontSize: 42,
      fontFamily: 'Ocean',
      color: '#223A7A',
      marginTop: 50,
    },

    ativityContainer: {
      width: '100%',
      height: 'fit-content',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      backgroundColor: '#FFFFFF',
      borderBottom: '1px solid #C9C9C7',
      padding: '10px 40px 5px 60px',
    },
    activity: {
      fontSize: 12,
      lineHeight: '15px',
      color: '#424242',
      marginBottom: 10,
    },

    marginTitle: {
      margin: '0 15px',
      color: '#424242',
      fontSize: 14,
    },

    textSelected: {
      margin: '0 15px',
      fontWeight: 'bold',
      fontSize: 14,
      color: '#424242',
    },

    text: {
      fontWeight: 'normal',
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
      '&:hover': {
        opacity: 0.5,
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

    themeText: {
      fontWeight: 600,
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

    margin: {
      margin: '0px 20px',
    },
    selectedImg: {
      '&:not(.nohover):hover': {
        opacity: 1,
      },
    },
  }),
);
