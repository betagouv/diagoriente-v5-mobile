import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    menuItemContainer: {
      display: 'flex',
      width: '100%',
      justifyContent: 'space-between',
      alignItems: 'center',
      '&:hover $deleteIcon': {
        display: 'flex',
      },
      fontSize: 16,
      lineHeight: '24px',
      color: '#424242',
    },
    deleteIcon: {
      color: '#FF0060',
      fontSize: 23,
      cursor: 'pointer',
      display: 'none',
    },
    rootClassName: {
      marginTop: 15,
    },

    styleSelect: {
      border: '1px solid #00CFFF',
      color: '#00B2DB',
    },
  }),
);
