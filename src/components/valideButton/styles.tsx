import { makeStyles, Theme } from '@material-ui/core/styles';
import { size } from 'lodash';

export default makeStyles<
  Theme,
  {  backgroudColor?: string , height?:string , width?:string , color?:string}
>((theme: Theme) => ({
  validContainer: {
    backgroundColor: (props) => props.backgroudColor || '#7533FF',
    height: (props) => props.height || '50px',
    width: (props) => props.width || '100%',
    display: 'flex',
    position: 'absolute',
    bottom: '0px',
    justifyContent: 'center',

  },

  linkParti: {
    display: 'flex',
    alignItems: 'center',
  },
  btnTitle: {
    color: (props) => props.width || '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
}));
