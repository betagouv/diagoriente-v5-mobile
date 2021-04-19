import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: 'relative',
      /* marginRight: 20, */
      paddingBottom: 25,
      width: '100%',
    },

    selectContainer: {
      position: 'relative',
      fontFamily: 'Andika New Basic !important',
      /*   width: '305px !important', */
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
      /*    [theme.breakpoints.down(420)]: {
        width: '200px !important',
      },
      [theme.breakpoints.down(330)]: {
        width: '170px !important',
      }, */
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

    selected: {
      background: 'transparent',
    },
    img: {
      cursor: 'pointer',
    },

    menu: {
      top: '0 !important',
      left: '0 !important',
      overflow: 'auto',
      minWidth: '100% !important',
      minHeight: '100%',
      borderRadius: 0,
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

      /*   '&:hover': {
        color: '#00B2DB',
        background: 'transparent',
      }, */
    },
    itemContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    closeItem: {
      height: 82,
      paddingLeft: 30,
      borderBottom: '1px solid #C9C9C7',
      backgroundColor: '#FFFFFF !important',
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
    menuItemChild: {
      borderBottom: 'none',
      paddingTop: 0,
      paddingBottom: 0,
      margin: 0,
      position: 'relative',
    },
    lastChildBorder: {
      borderBottom: 'none !important',
    },

    menuItemBackground: {
      background: 'rgba(122, 230, 255,0.2)',
    },

    menuItemDisabled: {
      display: 'none',
    },

    addContainer: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      fontWeight: 'bold',
      background: 'transparent',
      padding: 15,
    },

    addContainerInput: {
      display: 'flex',
      alignItems: 'center',
      width: '100%',
      fontWeight: 'bold',
      padding: '15px',
    },

    add: {
      color: '#00B2DB',
      fontSize: 16,
      fontWeight: 'bold',
      paddingRight: 10,
      position: 'relative',
      bottom: 3,
    },

    select: {},

    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
    },

    input: {
      padding: 0,
      height: 35,
      paddingLeft: 10,
      backgroundColor: '#fff',
    },

    inputRoot: {
      flex: '1 1 0',
      marginRight: 10,
      overflow: 'hidden',
    },

    test: {
      position: 'absolute',
      top: 50,
      backgroundColor: 'red',
    },

    arrowDate: {
      position: 'absolute',
      backgroundColor: '#00CFFF',
      width: 35,
      top: 0,
      right: 0,
      bottom: 0,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      cursor: 'pointer',
    },

    circle: {
      background: 'transparent',
      position: 'absolute',
      right: 7.5,
      top: '50%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: 30,
      width: 30,
      borderRadius: '50%',
      transform: 'translateY(-50%)',
      cursor: 'pointer',
      pointerEvent: 'none',
    },

    darkcircle: {
      background: '#7AE6FF',
    },

    itemsList: {
      paddingBottom: 0,
      paddingTop: 0,
    },

    rootBackground: {
      backgroundColor: '#FFFFFF !important',
      border: 'none !important',
    },

    selectedItem: {
      backgroundColor: 'rgba(122, 230, 255, 0.2) !important',
    },
    emptyDiv: {
      width: '100%',
      height: 50,
    },
    disabledClassName: {
      fontWeight: 'bold',
      background: 'red !important',
    },
  }),
);
