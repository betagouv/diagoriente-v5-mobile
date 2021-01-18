import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      overflow: 'auto',
      position: 'relative',
      background: '#F3F2F4',
      height: '100vh',
      paddingBottom: '100px',
      '&::-webkit-scrollbar': {
        display: 'none',
      }
    },
    boxInfo: {
      width: '100%',
      position: 'fixed',
      bottom: 0,
      backgroundColor: 'white',
      boxShadow: '0px 0px 5px -3px rgba(0, 0, 0, 0.75)',
      display: 'flex',
      flexDirection: 'column',
      padding: '2px 7px',
      [theme.breakpoints.down(350)]: {
        padding: '2px 7px',
      },
    },

    boxInfoImgSubBox: {
      display: 'flex',
      flexDirection: 'row',
    },

    boxInfoImg: {
      marginTop: 15,
      marginBottom: 24,
    },
    descriptionBoxInfo: {
      marginLeft: 20,
    },
    gameLinksContainer: {
      display: 'flex',
      justifyContent: 'space-between',
    },
    linkBoxInfo: {
      textAlign: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      color: '#4D6EC5',
      lineHeight: '20px',
      marginTop: 12,
      marginBottom: 12,
    },

    textColor: {
      color: theme.palette.background.default,
    },

    root: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    square: {
      height: 140,
      width: 140,
      borderRadius: '50%',
      backgroundColor: '#C9C9C7',
    },

    avatarWrapper: {
      display: 'flex',
      justifyContent: 'center',
    },

    circleContainer: {
      display: 'flex',
      justifyContent: 'center',
    },
    illus: {
      width: '100%',
      height: '100%',
    },

    btnpro: {
      backgroundColor: '#4D6EC5',
      height: 50,

      '&:hover': {
        backgroundColor: '#223A7A',
        borderRadius: 10,
      },
    },

    btnperso: {
      backgroundColor: '#4D6EC5',
      height: 50,
      '&:hover': {
        backgroundColor: '#223A7A ',
        borderRadius: 10,
      },
    },

    linkLabel: {
      color: '#223A7A',
      fontSize: 14,
      lineHeight: '21px',
      fontWeight: 'bold',
      width: 120,
    },
    title: {
      fontFamily: 'Andika New Basic',
      textAlign: 'center',
      color: '#424242',
      fontSize: 14,
      lineHeight: '21px',
    },

    help: {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      paddingRight: 22,
    },

    avatarContainer: {
      flexDirection: 'row',
      width: '100%',
    },

    reverseAvatarContainer: {
      flexDirection: 'row-reverse',
      width: '100%',
    },

    marginTitle: {
      alignSelf: 'center',
      // width: 100,
      color: '#424242',
      fontSize: 14,
    },

    titleAlignLeft: {
      textAlign: 'left',
      marginLeft: -4,
    },

    titleAlignRight: {
      textAlign: 'right',
      marginRight: 10,
    },

    linkContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
    },

    hideLine: {
      textDecoration: 'none',
    },

    margin: {
      margin: '3px 20px 6px 20px',
    },
    circleStyle: {
      width: 220,
      [theme.breakpoints.down(350)]: {
        width: 200,
        height: '95%',
      },
    },
    circleStyleEng: {
      width: 240,
      [theme.breakpoints.down(350)]: {
        width: 210,
        height: '95%',
      },
    },
    PaddingBetwwen: {
      "padding-right": "1.6vh"
    },
  }),
);
