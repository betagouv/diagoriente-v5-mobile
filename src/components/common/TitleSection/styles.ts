import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { width?: number }>(() => ({
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: 38,
    height: 'auto',
  },
  text: {
    fontSize: "1.45vh",
    textAlign: 'center',
    marginTop: 30,
    width: (props) => props.width || 619,
  },
}));
