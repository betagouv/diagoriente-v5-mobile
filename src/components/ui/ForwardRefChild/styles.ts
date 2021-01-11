import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    child: {
      display: 'flex',
      // justifyContent: 'center',
      bottom: 0,
      width: '100%',
      zIndex: 2,
      left: 0,
      padding: '30px',
      overflowY: 'scroll',
      lineHeight: '18px',
      fontWeight: 700,
      height: '165px',
      flexWrap:'wrap',
      textAlign: 'center',
      /* max-height: 180px; */
      position: 'fixed',
      backgroundColor: 'white',
    },
  }),
);
