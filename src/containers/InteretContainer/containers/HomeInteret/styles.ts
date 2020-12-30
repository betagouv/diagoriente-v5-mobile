import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  container: {
    width: '100%',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 31,
    paddingBottom: 20,
    backgroundColor: '#f3f2f4',
  },
  content: {
    maxWidth: 1080,
    position: "absolute",
    top: "6.5%",
  },
  interestContainerLogo: {
    display: 'flex',
    justifyContent: 'center',
  },
  subTitleContainer: {
    textAlign: 'center',
  },
  subTitle: {
    fontSize: 18,
    "padding-left": "68px",
    "padding-right": "68px",
    "padding-top": "71px",
  },

  avatarContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: 30,
  },
  btnContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    marginTop: 40,
  },
  btn: {
    backgroundColor: theme.palette.success.main,
    height: 50,
    width: 168,
    '&:hover': {
      backgroundColor: theme.palette.success.main,
      borderRadius: 10,
    },
  },
  line1: {

    "font-family": "Andika New Basic",
"font-style": "normal",
"font-weight": "normal",
"font-size": "14px",
"line-height": "21px",
"text-align": "center",
  },

  btnLabel: {
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
}));
