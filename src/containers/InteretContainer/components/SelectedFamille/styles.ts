import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { direction: 'vertical' | 'horizontal'; hover: boolean }>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: (props) => (props.direction === 'horizontal' ? 'row' : 'column'),
    alignItems: 'center',
    justifyContent: 'left',
    margin: '5px 8px 5px 0px',
    [theme.breakpoints.down('sm')]: {
      margin: '13px 20px',
    },
    cursor: 'pointer',
  },
  circle: {
    width: 67,
    height: 67,
    borderRadius: '50%',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    fontWeight: 900,
    fontSize: 42,
    lineHeight: '42px',
    fontFamily: 'ocean',
    color: theme.palette.primary.main,
    paddingTop: 8,
  },
  text: {
    fontWeight: 'bold',
    lineHeight: '15px',
  },

  elements: {
    display: 'flex',
    flexDirection: 'column',
    width: 150,
    marginLeft: 30,
    fontSize: 14,
    color: '#424242',
    textAlign: (props) => (props.direction === 'horizontal' ? 'left' : 'center'),
  },
  imgWrapper: { position: 'relative' },

  closeContainer: {
    width: 20,
    height: 20,
    borderRadius: '50%',
    marginLeft: 50,
  },

  imageContainer: {
    position: 'relative',
    width: 70,
  },
}));
