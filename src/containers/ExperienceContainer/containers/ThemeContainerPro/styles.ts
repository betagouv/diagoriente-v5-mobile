import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { CollectionsBookmarkOutlined } from '@material-ui/icons';
import { size } from 'lodash';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      height:'auto',
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
    },

    themeContainer: {
      position: 'relative',
      width: '100%',
      // height: '563px',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // paddingTop: 34,
    },

    themeTitle: {
      color: '#424242',
      fontSize: 14,
    },

    gridContainer: {
      padding: SKILL_CONTAINER_PADDING,

      [theme.breakpoints.down('md')]: {
        padding: '40px 15px',
      },
    },

    circleContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      flexDirection:'column',
      paddingBottom:100,
    },
    searchContainer: {
      width: '100%',
    },
    boxSearch: {
      background: '#B7ECFA',
      borderRadius: 10,
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      padding: '40px 0px 30px 0px ',
      margin: '28px 29px 20px 28px',
    },
    itemData: {
      border: '1px solid #00CFFF',
      borderRadius: 30,
      width: 'max-content',
      padding: 10,
      cursor: 'pointer',
      color: '#424242',
      textTransform: 'capitalize',
      '&:hover': {
        backgroundColor: 'rgba(122, 230, 255, 0.2)',
      },
      [theme.breakpoints.down(450)]: {
        width: 'auto',
      },
    },
    selected: {
      backgroundColor: '#7AE6FF',
      '&:hover': {
        backgroundColor: '#7AE6FF',
      },
    },
    boxSearchTitle: {
      fontWeight: 'bold',
      fontSize: 14,
      width: 256,
      lineHeight: ' 20px',
      textAlign: 'center',

    },
    searchProp: {
      color: '#00CFFF',
    },
    inputSearchContainer: {
      marginTop: 17,
    },
    title: {
      fontWeight: 900,
      fontSize: 42,
      fontFamily: 'Ocean',
      color: '#223A7A',
      marginTop: 50,
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

    // header: {
    //   height: 50,
    //   display: 'flex',
    //   justifyContent: 'space-between',
    //   margin: '27px 0px 14px 27px',
    //   alignItems: 'center',
    //   // width: '100%',
    // },



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
    btn: {
      // backgroundColor: theme.palette.background.default,
      // '&:hover': {
      //   backgroundColor: theme.palette.background.default,
      // },
    },
   
    // ArrowColor: {
    //   color: '#fff',
    // },
   
    footerContainer: {
      position: 'fixed' ,
      bottom: 0,
      width: '100%',
      backgroundColor: 'white'

    },
    child:{
      position: 'fixed',
      bottom : 0,
  

    },
 

  }));
