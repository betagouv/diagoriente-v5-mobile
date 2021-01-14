import { makeStyles, Theme } from '@material-ui/core/styles';
import { amber, green } from '@material-ui/core/colors';

export default makeStyles((theme: Theme) => ({
  success: {
    backgroundColor: green[600],
  },
  error: {
    backgroundColor: theme.palette.error.dark,
  },
  info: {
    backgroundColor: theme.palette.primary.main,
  },
  warning: {
    backgroundColor: amber[700],
  },
  icon: {
    fontSize: 20,
    color: '#fff',
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing(1),
  },
  message: {
    display: 'flex',
    alignItems: 'center',
    color: '#fff',
  },
  snackContainer: {
    marginTop: 30,
    zIndex: 999,
  },
}));
