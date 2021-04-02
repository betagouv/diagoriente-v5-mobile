import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { CheckBoxbackgroudColor?: string , bkColor?:string }>(() => ({
  root: {
    width: 235,
    background: '#FFFFFF',
    border: '1px solid #C9C9C7',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
    borderRadius: 5,
    position: 'absolute',
    top: 47,
    zIndex: 5,
  },
  item: {
    height: 52,
    borderBottom: '0.5px solid #C9C9C7',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 25,
    position: 'relative',
  },
  itemText: {
    fontSize: 14,
    paddingLeft: 10,
  },
  selectedItemText: {
    fontSize: 14,
    paddingLeft: 10,
    fontWeight: 'bold',
  },
  bkText:{
    height: 52,
    borderBottom: '0.5px solid #C9C9C7',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 25,
    position: 'relative',
    backgroundColor: (props) => props.bkColor || '#7AE6FF'

  },
  mask: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1200,
  },
  hello: {
    'background-color': (props) => props.CheckBoxbackgroudColor || '#FFFFFF',
  },
}));
