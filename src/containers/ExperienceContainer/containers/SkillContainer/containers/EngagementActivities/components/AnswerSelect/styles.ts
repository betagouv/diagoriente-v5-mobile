import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      paddingBottom: 25,
      width: '100%',
    },

    menu: {
      top: '0 !important',
      left: '0 !important',
      overflow: 'auto',
      minWidth: '100% !important',
      minHeight: '100%',
      borderRadius: 0,
    },

    itemsList: {
      paddingBottom: 0,
      paddingTop: 0,
    },

    rootBackground: {
      backgroundColor: '#FFFFFF !important',
      border: 'none !important',
    },

    selectContainer: {
      position: 'relative',
      fontFamily: 'Andika New Basic !important',
      overflow: 'hidden',
      fontWeight: 'bold',
      height: 50,
      border: '1px solid #D1D5DE',
      fontSize: 14,
      lineHeight: '20px',
      backgroundColor: '#FFFFFF',

      '& fieldset': {
        display: 'none',
      },
      width: '100% !important',
    },

    padding: {
      paddingLeft: 15,
      paddingRight: 84,
      [theme.breakpoints.down(475)]: {
        paddingLeft: 0,
        paddingRight: 75,
      },
    },

    img: {
      cursor: 'pointer',
    },

    select: {},

    closeItem: {
      height: 82,
      paddingLeft: 30,
      borderBottom: '1px solid #C9C9C7',
      backgroundColor: '#FFFFFF !important',
    },

    itemContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },

    closeContainer: {
      minHeight: 26,
      display: 'flex',
      alignItems: 'flex-end',
      justifyContent: 'space-between',
    },

    unansweredQuestion: {
      fontWeight: 700,
      fontSize: 14,
      lineHeight: '24px',
      color: '#424242',
    },
    closeLabel: {
      fontSize: 16,
      color: '#00B2DB',
    },

    menuItem: {
      height: 63,
      borderBottom: '0.5px solid rgba(201, 201, 199, 0.5) ',
      backgroundColor: '#FFFFFF',
      whiteSpace: 'pre-wrap',
      padding: '0px 40px',
      [theme.breakpoints.down(340)]: {
        padding: '0px 20px',
      },
    },

    lastChildBorder: {
      borderBottom: 'none !important',
    },

    selectedItem: {
      backgroundColor: 'rgba(122, 230, 255, 0.2) !important',
    },
  }),
);
