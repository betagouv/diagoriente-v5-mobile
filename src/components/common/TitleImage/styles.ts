import { makeStyles, Theme } from '@material-ui/core/styles';
import { size } from 'lodash';

export default makeStyles<Theme, { color: string; size?: number; font?: string; width?: number }>(() => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    height: 80,
    backgroundColor: '#FFFFFF',
  },
  containerPosition: {
    justifyContent: 'center',
  },
  containerPositionWithNumber: {
    paddingLeft: 27,
    paddingRigth: 10,
    justifyContent: 'space-between',
  },
  imageContainer: {
    height: 'auto',
  },
  image: {
    width: (props) => props.width || 68,
    height: 'auto',
  },
  number: {
    position: 'absolute',
    top: 20,
    right: 35,
    fontSize: (props) => props.size || 32,
    fontFamily: (props) => props.font || 'Ocean',
    color: (props) => props.color || '#223A7A',
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
