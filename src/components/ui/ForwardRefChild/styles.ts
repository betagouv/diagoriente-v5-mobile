
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
child:{

    bottom: 0,
    width: '100%',
    zIndex: 2,
    left: 0,
    padding: '20px 30px',
    overflowY: 'scroll',
    lineHeight: '30px',
    height: '165px',
    textAlign: 'justify',
    /* max-height: 180px; */
    position: 'fixed',
    backgroundColor: 'white',
}

  }));