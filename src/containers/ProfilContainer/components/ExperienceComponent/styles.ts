import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export default makeStyles((theme) =>
  createStyles({
    profilContainer: {
      position: 'relative',
      width: '100%',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 34,
      flex: 1,
      paddingBottom:110,
      padding: SKILL_CONTAINER_PADDING,
      [theme.breakpoints.down(330)]: {
    padding:'0px 0px 110px 0px'
      },
    },

    childrenCardContainer: {
      [theme.breakpoints.down(500)]: {
        display: 'flex',
        width: '100%',
        flexDirection:'column',
        paddingTop: 20,
      },
   
    },
    cardGridContainer: {
      width: '100%',
      paddingTop: 57,
      padding : '57px 35px 20px 35px',
      [theme.breakpoints.down(500)]: {
        padding : '10px 10px 10px 10px',

      },
      [theme.breakpoints.down(350)]: {
width:'97%'
      },
    },

    cardClassName: {
      paddingTop: 50,
    },

    titleContainer: {
      display: 'contents',
      alignItems: 'center',
      paddingBottom: 45,
      paddingLeft:115,
      // width: '100%',
      justifyContent: 'space-between',
      [theme.breakpoints.down(500)]: {
        paddingLeft:35,

      },
      [theme.breakpoints.down(350)]: {
        paddingLeft:15,
        display:'contents'

      },
    
    },
    spinner: {
      flex: '1 1 0',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontFamily: 'Ocean',
      fontWeight: 900,
      fontSize: '2.2em',
      lineHeight: 1,
      paddingTop: 9,
      [theme.breakpoints.down(330)]: {
        paddingTop:20,

      },
  
    },

    logo: {
      height: 60,
      width: 60,
    },

    cardGrid: {
      display: 'flex',
      width: '100%',
    },

    themeContainer: {
      display: 'flex',
    },
    itemContainer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },

    themeSelection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    themeTile: {
      paddingLeft: 2,
      fontSize: 14,
      flex: 1,
      color: '#424242',
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center',
      whiteSpace: 'pre-wrap',
      textOverflow: 'ellipsis',
    },

    emptyDiv: {
      height: 45,
    },

    empty: {
      width: 160,
    },

    competenceTitle: {
      fontSize: 14,
      fontWeight: 18,
    },

    text: {
      fontSize: 18,
      [theme.breakpoints.down(500)]: {
        textAlign:'justify',
        padding: '15px 15px'
      },
    },
 
    btn: {
      backgroundColor: '#011A5E',
      '&:hover': {
        backgroundColor: '#223A7A',
      },
      [theme.breakpoints.down(330)]: {
        margin: '0px 0px'
      },
   
    },

    textButton: {
      color: '#fff',
      fontSize: 18,
      width: 262,
      padding:'0px 0px'
    },


    link: {
      display: 'flex',
      alignItems: 'center',
      borderRadius: 10,
       margin:10,
      flex: 1,
      justifyContent:'center'
  
    },

    popupContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      flex: '1 1 0%',
      justifyContent: 'space-between',
    },

    popupDescription: {
      textAlign: 'center',
      color: '#424242',
    },

    incluse: {
      backgroundColor: '#FF0060',
      color: '#fff',
      fontSize: 18,
      marginTop: 25,
      '&:hover': {
        backgroundColor: '#D60051',
      },
    },

    linkHome: {
      color: '#00B2DB',
      fontSize: 14,
      fontWeight: 'bold',
      textDecoration: 'none',
      marginTop: 14,
      '&:hover': {
        backgroundColor: 'transparent',
        color: '#00CFFF',
      },
    },
    btnEx:{
    backgroundColor:'#FFFFFF',
    width:'100%',
    position:'fixed',
    bottom:0,
    zIndex:1,
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    }
  }));
