import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    arrowContainer: {
      display: 'flex',
      alignItems: 'center',
      width: 160,
      marginBottom: 20,
    },
    txt: {
      color: '#6B6B6A',
      fontSize: 14,
      fontWeight: 'bold',
      marginLeft: 20,
      position: 'relative',
      bottom: 1,
    },
    linkContainer: {
      width: '100%',
      [theme.breakpoints.down(330)]: {
        marginTop: 30,
        marginLeft: 20,
      },
    },
  }),
);
