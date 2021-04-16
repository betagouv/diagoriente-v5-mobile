import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    rowActivity: {
      display: 'flex',
      position: 'relative',
      alignItems: 'center',
    },

    selectContainer: {
      display: 'flex',
      alignItems: 'center',
      width: 'calc(100% - 50px)',
    },

    deleteContainer: {
      height: 50,
      width: 50,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginBottom: 25,
    },
    divider: {
      width: '100%',
      height: 1,
      borderBottom: '1px solid #C9C9C7',
      marginBottom: 25,
    },
  }),
);
