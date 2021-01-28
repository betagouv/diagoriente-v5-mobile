import { createStyles, makeStyles } from '@material-ui/core/styles';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export default makeStyles((theme) =>
  createStyles({
    InfoContainer: {
      display: 'flex',
      padding: SKILL_CONTAINER_PADDING,
      flexDirection: 'column',
      alignItems: 'center',
      paddingTop: 34,
      flex: 1,
      '@media not all and (min-resolution:.001dpcm)': {
        display: 'flex',
        padding: "24px 22px 28vh 10px",
        flexDirection: 'column',
        alignItems: 'center',
        paddingTop: 34,
        flex: 1,
      }
    },
    root:{
      width:'auto'
     },
    titleContainer: {
      display: 'list-item',
      alignItems: 'center',
      paddingBottom: 45,
      flexDirection:'column',
      textAlign:'center',
      width: '100%',
      justifyContent: 'space-between',
    },

    title: {
      fontFamily: 'Ocean',
      fontWeight: 900,
      fontSize: '2.2em',
      lineHeight: 1,
      paddingTop: 9,

    },

    empty: {
      width: 160,
    },
    btn: {
      backgroundColor: '#FF0060',
      marginTop: 66,
      '&:hover': {
        backgroundColor: '#D60051',
      },
    },

    textButton: {
      color: '#fff',
      fontSize: 18,
    },

    userInfo: {
      fontSize: 14,
      flex: '1 1 auto',
      width:'min-content',
      [theme.breakpoints.down(330)]: {
        paddingRight: 10,
      },
    },

    cancelText: {
      color: '#D60051',
      fontWeight: 'bold',
      WebkitTextStroke: '0.2px',
      fontSize: 14,
      cursor: 'pointer',
      marginTop: 22,
    },

    location: {
      display: 'flex',
      alignItems: 'center',
    
    },

    locationlogo: {
      marginRight: 10,
    },

    baseClassName: {
      margin: 0,
    },

    infoClassName: {
      color: '#6B6B6A',
    },

    emptyDiv: {
      width: 196,
    },

    infoRowContainer: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down(400)]: {
        // marginRight: 36,
      },
      // [theme.breakpoints.down(450)]: {
      //   display: 'inline',
      // },

    },

    paddingClassName: {
      padding: '0px 15px 0px -1px ',
    },

    passwordRoot: {
      display: 'initial',
      width: '45%',
      paddingBottom: 13,
      marginLeft:209,
      [theme.breakpoints.down(450)]: {
        marginLeft:72,

      },
      [theme.breakpoints.down(420)]: {
        width: '60%',
        marginLeft:90,

      },
      [theme.breakpoints.down(380)]: {
        width: '60%',
        marginLeft:85,

      },
      [theme.breakpoints.down(330)]: {
        marginLeft:48,

      },
  
    },

    passwordContainer: {
      display: 'flex',
      flexDirection: 'column',
      [theme.breakpoints.down(450)]: {
        marginRight:20,

      }
    },

    avatarsContainer: {
      width: 334,
      height: '100%',
      display: 'flex',
      flexWrap: 'wrap',
      [theme.breakpoints.down(450)]: {
        paddingLeft:27,

      },
      [theme.breakpoints.down(380)]: {
        width: 328,
        paddingLeft:27,



      },
      [theme.breakpoints.down(330)]: {
        width: 293,
        paddingLeft:12,



      }
    },

    avatar: {
      width: 70,
      height: 70,
      cursor: 'pointer',
      '&:hover': {
        opacity: 0.8,
      },
    },

    selectedAvatar: {
      border: `2px solid ${theme.palette.primary.main}`,
      borderRadius: '50%',
    },

    alignItems: {
      alignItems: 'flex-start',
      [theme.breakpoints.down(450)]: {
        alignItems: 'center',
        display:'flex'
      },
    },

    editIcon: {
      marginLeft: 19,
    },

    childrenClassName: {
      margin: '3px 20px 3px 5px',
      width: 'auto',
    },
    infoRow:{
      // display:'inline'
    },
    modifierInfo:{
      display: 'flex',
      padding: '13px 0px',
      alignItems: 'center',
      paddingLeft:11,
      [theme.breakpoints.down(450)]: {
        padding: '13px 0px',
        display: 'grid',
        gridGap: '15px',
        gridTemplateRows: '35px',
        alignItems: 'flex-start',
        margin: '0px 35px 0px 40px',
             },
             [theme.breakpoints.down(380)]: {
              margin: '0px 0px 0px 30px',
                   },
             [theme.breakpoints.down(330)]: {
              margin: '0px 0px 0px 20px',
                   },

    
  },
  profilRow:{
    dispaly:'flex',
  },
  villeResidence:{
  
      [theme.breakpoints.down(480)]: {
      margin: '0px 0px 0px 40px',

    },
    [theme.breakpoints.down(380)]: {
      margin: '0px 0px 0px 36px',

    },
    [theme.breakpoints.down(330)]: {
      margin: '0px 0px 0px 21px',

    }
  }
  }));
