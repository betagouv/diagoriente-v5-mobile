import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<
  Theme,
  { color: string; size?: number; font?: string; width?: number; backgroudColor?: string }
>((theme: Theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 60,
    backgroundColor: (props) => props.backgroudColor || '#223A7A',
  },
  containerPosition: {
    justifyContent: 'center',
  },
  containerPositionWithNumber: {
    paddingLeft: 27,
    paddingRigth: 10,
    justifyContent: 'space-between',
    [theme.breakpoints.down(380)]: {
      paddingLeft: 20,
    },
  },

  logo: {
    paddingRight: 16,
  },

  imageContainer: {
    height: 'auto',
    paddingRight: 5,
    [theme.breakpoints.up(560)]: {
      paddingRight: 15,
    },
  },
  image: {
    width: (props) => props.width || '11vh',
    height: 'auto',
  },
  btnImage: {
    marginRight: 27,
  },
  number: {
    position: 'absolute',
    top: 20,
    right: 35,
    fontSize: (props) => props.size || 32,
    fontFamily: (props) => props.font || 'Ocean',
    color: (props) => props.color || '#223A7A',
    [theme.breakpoints.down(380)]: {
      fontSize: 25,
      top: 25,
    },
  },
  position: {
    position: 'absolute',
  },
  positionWithNumber: {
    position: 'relative',
    paddingleft: 27,
    textTransform: 'capitalize',
  },
}));
