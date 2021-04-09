import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    selectContainer: {
      width: 'auto',
      background: '#fff',
      borderRadius: '5px',
      fontWeight: 'normal',
      color: '#5A6170',

      '& fieldset': {
        borderColor: '#D1D5DE',
        background: 'transparent',
        '&:focus-within': {
          borderColor: '#00CFFF !important',
          background: 'transparent',
        },
        '&:hover': {
          borderColor: '#00CFFF !important',
          background: 'transparent',
        },
      },
    },
    day: {
      width: '74px !important',
    },
    month: {
      width: '145px !important',
      height: 40,
      textTransform: 'capitalize',
      [theme.breakpoints.down(340)]: {
        width: '105px !important',
      },
    },
    year: {
      width: '93px !important',
    },

    disabledClassName: {
      display: 'none',
    },

    menuItemClassName: {
      margin: '0px 15px !important',
      paddingTop: '5px !important',
      paddingLeft: '0px !important',
      paddingBottom: '10px !important',
    },
  }),
);
