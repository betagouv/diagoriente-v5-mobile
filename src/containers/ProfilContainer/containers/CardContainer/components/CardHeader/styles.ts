import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme)=>
createStyles({
  cardHeader: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 35,
    [theme.breakpoints.down(330)]: {
      padding:'35px 15px 0px 15px',

    },
  },
  userInfo: {
    display: 'flex',
    flexDirection: 'column',
    whiteSpace: 'pre-wrap',
    [theme.breakpoints.down(330)]: {
marginRight:10
    },
  },
  userName: {
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 14,
  },
  appInfo: {
    display: 'flex',
    alignItems: 'center',
  },
  appLogo: {
    marginRight: 30,
  },
})
);
