import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    borderRadius: 10,
  },
  labelContainer: {
    margin: '3px 20px 3px 19px',
    textTransform: 'none',
    fontFamily: 'Andika New Basic',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    [theme.breakpoints.down(330)]: {
      margin:'0px 0px'
    },
  
  },
  loaderContainer: {
    marginLeft: 7,
    display: 'flex',
    alignItems: 'center',
  },
  colorPrimaryLoader: {
    color: '#fff',
  },
}));
