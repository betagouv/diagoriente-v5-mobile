import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>
createStyles({
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
    [theme.breakpoints.down(330)]: {
      padding:'35px 15px 0px 10px',
      display :'flex'

    },
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.down(330)]: {
marginRight:10,
marginBottom:5,
width:'min-content'

    },
  },
  userName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14,
    [theme.breakpoints.down(330)]: {
      width:'min-content'
          },
  },
  appInfo: {
    display: 'flex',
    // flexDirection:'row',
    // justifyContent:'',
    alignItems: 'center',
  },
  appLogo: {
    marginRight: 30,
    [theme.breakpoints.down(440)]: {
      marginRight:5
          },
  },
})
);
