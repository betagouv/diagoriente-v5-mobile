import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export const HEADER_HEIGHT = 46;
export default makeStyles((theme: Theme) =>
  createStyles({
    appBar: {
      height: HEADER_HEIGHT,
      background: theme.palette.background.default,
      display: 'flex',
      justifyContent: 'center',
      zIndex: 2000,
    },

    toolbarContainer: {
      display: 'flex',
      justifyContent: 'center',
      minHeight: 'auto !important',
      flexDirection:'row',
    },
centerContainer:{
  display: "flex",
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
},
    flexCenter: {
      alignItems: 'center',
      display: "flex",
    position: "absolute",
    left: "20px",
    },

    logoContainer: {
      display: 'flex',
      alignItems: 'center',
    },
diagLogoContainer:{

},
    menuIcon: {
      marginRight: 8,
      cursor: 'pointer',
    },

    typography: {
      marginRight: 10,
      fontSize: 14,
      alignItems: 'center',
      color: '#ffff',
      fontWeight: 'bold',
    },
    logoLink: {
      display: 'flex',
      alignItems: 'center',
    },
  }));
