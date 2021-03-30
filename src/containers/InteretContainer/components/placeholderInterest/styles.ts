import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<
  Theme,
  {
    direction: 'vertical' | 'horizontal';
    size?: number;
    marginTop?: number;
    footer?: boolean;
    full?: boolean;
    fontSizeNumber? : number;
  }
>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: (props) => (props.direction === 'horizontal' ? 'row' : 'column'),
    alignItems: 'center',
    width: (props) => (props.direction === 'vertical' ? '100%' : 'auto'),
    margin: 21,
    marginLeft: 20,
  },
  circle: {
    width: (props) => props.size || 77,
    height: (props) => props.size || 77,
    borderRadius: '50%',
    border: `2px dashed ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#A275FF',
    opacity: (props) => (props.footer ? 0.3 : 0.5),
    marginBottom: (props) => (props.direction === 'horizontal' ? 0 : 10),
  },
  circleSelected:{
    width: (props) => props.size || 77,
    height: (props) => props.size || 77,
    borderRadius: '50%',
    border: `2px dashed ${theme.palette.primary.main}`,
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    opacity: (props) => (props.footer ? 0.3 : 0.5),
    marginBottom: (props) => (props.direction === 'horizontal' ? 0 : 10),
    backgroundColor: '#ffff',

  },
  number: {
    color: theme.palette.primary.main,
    fontSize: (props) => props.fontSizeNumber || 77,
    fontWeight: 900,
    fontFamily: 'ocean',
  },
  elements: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 30,
  },
  bigElement: {
    width: 54,
    height: 11,
    opacity: 0.2,
    backgroundColor: '#A275FF',
    margin: 2,
  },
  smallElement: {
    width: 41,
    height: 11,
    opacity: 0.2,
    margin: 2,
    backgroundColor: '#A275FF',
  },
  textFamille: {
    fontSize: 12,
    textAlign: 'center',
    color: theme.palette.primary.main,
  },
  imageContainer: {
    position: 'relative',
    width: 60,
  },
  testImg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
  },
}));
