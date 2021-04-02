import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  container: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    flex: 1,
    backgroundColor:'#F3F2F4'
  },
  content: {
    maxWidth: 1080,
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    marginBottom: 10,
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      flexDirection: 'column',
      alignItems: 'flex-end',
    },
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'center !important',
    },
  },
  title: {
    fontSize: 42,
    color: theme.palette.primary.main,
    fontFamily: 'ocean',
    marginLeft: 24,
    [theme.breakpoints.down('xs')]: {
      alignSelf: 'center !important',
    },
  },

  wrapper: {
    width: '100%',
    height: '100%',
    position: 'relative',
    paddingBottom: 10,
    marginBottom: 0,
  },
  subTitle: {
    textAlign: 'center',
    backgroundColor:'#fff',
    width:'100%',
    height:'85px',
    display:'flex',
    padding:20,
    flexDirection:'column',
    justifyContent:'start'
  },
  listSelected: {
    display: 'flex',
    justifyContent: 'center',
    padding: 40,
    [theme.breakpoints.down(330)]: {
      padding: 15,
      marginBottom:12
    },
  },
  circle: {
    width: 77,
    height: 77,
    borderRadius: '50%',
    backgroundColor: 'red',
  },
  disable: {
    opacity: 0.5,
  },
  orderSelected: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    flexWrap: 'wrap',
  },
  btnContainer: {
    width: '100%',
    height:50,
    border:'none',
    position: 'fixed',
    zIndex:1,
    bottom: '0px',
    backgroundColor:'#7533FF',
    display:'flex',
    flexDirection:'row',
    justifyContent:'center',
    alignItems:'center'
  },
  btn: {
    backgroundColor: theme.palette.success.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
    width:'100%',
    height:'50px',
    color: '#fff',
    borderRadius:'inherit',
    zIndex:1,
  },
  contentBtn: {
    display: 'flex',
    alignItems: 'center',
  },
  wrapperBtn: {
    alignSelf: 'center',
  },
  btnLabel: {
    color: '#fff',
    fontSize:'16px',
    fontWeight:700,
    fontFamily:'Andika New Basic'
  },
  errorContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    marginTop: 20,
  },
  text: {
    fontSize: 12,
    color: '#FF0060',
  },
  rowItem: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    height: 'auto',
  },
  rowParent: {
    display: 'flex',
    alignItems: 'center',
    height: 100,
    marginBottom: 15,
  },
  indexItem: {
    width: 51,
    height: 51,
    borderRadius: '50%',
    backgroundColor: '#d0bafe',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 25,
  },
  index: {
    fontFamily: 'ocean',
    fontWeight: 900,
    fontSize: 42,
    lineHeight: '42px',
    color: '#420FAB',
  },
  itemList: {
    background: '#d0bafe',
    border: '4px solid #a087d5',
    borderRadius: 10,
    marginBottom: 10,
  },
  drag_on_drag: {
    background: '#A275FF',
    border: '4px solid #420FAB',
    borderRadius: 10,
    marginBottom: 10,
  },
  wrapperList: {
    position: 'relative',
    width: '80%',
  },
  wrapperListItem: { zIndex: 1, position: 'absolute', top: 0, left: 0, right: 0, bottom: 0 },
  hiddenList: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 0,
  },
  holderItem: {
    background: '#A275FF',
    border: '4px solid #420FAB',
    borderRadius: 10,
    marginBottom: 10,
    opacity: 0.1,
    height: 106,
  },
}));
