import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    container: {},
    title: {
      fontWeight: 'bold',
      fontSize: 11,
      lineHeight: '14px',
      textDecoration: 'underline',
      color: '#00B2DB',
    },
    modalContainer: {
      width: '100%',
      height: '100%',
      zIndex: 999,
      backgroundColor: 'rgba(34, 58, 122, 0.5)',
      position: 'absolute',
      top: 0,
      left: 0,
      padding: '85px 25px',
      display: 'flex',
      justifyContent: 'center',
    },
    modal: {
      position: 'relative',
      backgroundColor: '#FFFFFF',
      width: 'fit-content',
      height: 'fit-content',
      padding: 25,
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 5,
      minWidth: 330,
      [theme.breakpoints.down(380)]: {
        minWidth: '100%',
      },
    },
    closeImg: {
      position: 'absolute',
      top: -19,
      right: -6,
    },
    modalTitle: {
      fontSize: 16,
      lineHeight: '24px',
      color: '#00B2DB',
      marginBottom: 30,
      textAlign: 'center',
    },
    selectionContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    label: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
      paddingBottom: 3,
      borderBottom: '1px solid #C9C9C7',
    },
    selection: {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 0px 20px 0px',
    },
    text: {
      fontSize: 14,
      lineHeight: '21px',
      color: '#6B6B6A',
      maxWidth: '100%',
    },
    themeAvatar: {
      paddingBottom: 2,
      alignItems: 'flex-start',
    },
    circleClassName: {
      padding: 0,
      background: 'transparent',
    },
    avatarStyle: {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
    },
    dot: {
      textAlign: 'left',
      listStyle: 'inside',
      fontSize: 16,
      margin: 0,
      width: 'fit-content',
      wordBreak: 'break-word',
    },
  }),
);
