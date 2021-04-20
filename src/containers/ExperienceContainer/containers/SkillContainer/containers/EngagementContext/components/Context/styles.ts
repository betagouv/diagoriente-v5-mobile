import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '20px 40px',
      [theme.breakpoints.down(340)]: {
        padding: '20p',
      },
    },
    rootChecked: {
      backgroundColor: 'rgba(122, 230, 255, 0.2)',
    },
    checkboxContainer: {
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 80px)',
    },
    checkbox: {},

    title: {
      fontSize: 16,
      lineHeight: '24px',
      fontWeight: 700,
      marginLeft: 20,
      color: '#424242',
      width: 'fit-content',
      maxWidth: 'calc(100% - 40px)',
    },

    circle: {
      width: 'auto',
      paddingBottom: 0,
    },
    squareContainer: {
      height: 'auto',
      width: 'auto',
    },
  }),
);
