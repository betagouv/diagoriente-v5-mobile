import { makeStyles, Theme } from '@material-ui/core/styles';
import { FullscreenExit } from '@material-ui/icons';

export default makeStyles((theme: Theme) => ({
  root: {
    backgroundColor: '#E5E5E5',
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    paddingBottom: 80,
    paddingTop: 60,
  },
  registerContainer: {
    maxWidth: 757,
    width: '100%',
  },
  title: {
    fontFamily: 'ocean',
    fontWeight: 900,
    fontSize: 42,
    textAlign: 'center',
    color: theme.palette.info.main,
    marginBottom: 40,
  },
  descriptionContainer: {
    width: '95%',
    [theme.breakpoints.down('sm')]: {
      paddingLeft: 20,
    },
  },
  description: {
    fontSize: 14,
    lineHeight: 1.8,
  },
  formContainer: {
    width: 'min-content',
  },
  form: {
    marginTop: 30,
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
    [theme.breakpoints.down(500)]: {
      alignItems: 'center',
    },
    [theme.breakpoints.down(420)]: {
      paddingLeft: 60,
    },
    [theme.breakpoints.down(350)]: {
      paddingLeft: 20,
    },
  },
  avatarsWrapper: {
    margin: '9px 0px',
    [theme.breakpoints.down(500)]: {
      margin: '20px 0px',
    },
  },
  avatarContainer: {
    display: 'flex',
    [theme.breakpoints.down(450)]: {
      display: 'inline',
    },
  },
  subAvatar: {
    width: '70%',
    marginLeft: 10,
    [theme.breakpoints.down(450)]: {
      width: '80%',
      marginLeft: 0,
    },
  },
  avatarsContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexWrap: 'wrap',
  },
  labelContainer: {
    marginRight: 14,
    [theme.breakpoints.down(470)]: {
      marginRight: 0,
      marginBottom: 5,
      //  [theme.breakpoints.down(470)]: {
      //   paddingTop:20,
      // }
      // [theme.breakpoints.down('xs')]: {
      //   textAlign: 'left',
      //   marginRight: 0,
      //   marginBottom: 5,
      // },
    },
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    // [theme.breakpoints.down(470)]: {
    //   paddingTop:20,
    // }
  },
  subLabel: {
    fontSize: 12,
    paddingRight: 8,
  },
  avatarCircle: {
    padding: '0px !important',
  },
  avatar: {
    width: 70,
    height: 70,
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.8,
    },
  },
  selectedAvatar: {
    border: `2px solid ${theme.palette.primary.main}`,
    borderRadius: '50%',
  },
  btnContainer: {
    marginTop: 15,
  },
  paddingBtn: {
    paddingLeft: 120,
    [theme.breakpoints.down(470)]: {
      paddingLeft: 0,
    },
  },
  btn: {
    backgroundColor: theme.palette.secondary.main,
    height: 50,
    '&:hover': {
      backgroundColor: theme.palette.info.main,
      borderRadius: 10,
    },
  },
  btnLabel: {
    color: '#fff',
    textTransform: 'none',
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'center',
  },
  groupTextContainer: {
    display: 'flex',
  },
  emptyDiv: {
    width: 260,
  },
  groupText: {
    fontSize: 12,
    paddingLeft: '155px',
    [theme.breakpoints.down(470)]: {
      paddingLeft: 5,
    },
  },
  conditionText: {
    fontSize: 14,
    marginLeft: 8,
    marginRight: 15,
    width: 'max-content',
    cursor: 'pointer',
    [theme.breakpoints.down(500)]: {
      width: 255,
      marginTop: 30,
    },
  },
  containerCheckbox: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 14,
    paddingTop: 10,
  },
  conditionColorText: {
    color: theme.palette.success.main,
    cursor: 'pointer',
  },
  optionWrapper: {
    width: 115,
  },
  option: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  optionItem: {
    fontSize: 12,
  },
  checkOption: {
    color: theme.palette.success.main,
    textDecoration: 'line-through',
  },
  errorCondition: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: theme.palette.error.main,
    fontSize: 12,
  },
  errorTextForm: {
    color: theme.palette.error.main,
    fontSize: 12,
    paddingLeft: 10,
  },
  start: {
    color: theme.palette.success.main,
  },
  required: {
    fontSize: 14,
    textAlign: 'center',
    [theme.breakpoints.down(470)]: {
      textAlign: 'left',
    },
  },

  registerLabel: {
    color: theme.palette.success.main,
    fontWeight: 'bold',
    fontSize: 14,
    textDecoration: 'underline',
    marginTop: 30,
    textAlign: 'center',
    '&:hover': {
      color: '#00CFFF',
    },
  },
  requiredInput: {
    color: theme.palette.success.main,
  },
  inputContainer: {
    display: 'grid',
    gridTemplateAreas: '"label input"',
    gridTemplateColumns: '140px 229px',
    gridGap: '25px',
    gridTemplateRows: '45px',
    alignItems: 'center',
    justifyContent: 'center',
    margin: '0px 0px 0px 0px',
    width: '100%',
    [theme.breakpoints.down(470)]: {
      display: 'flex',
      flexDirection: 'column',
      gridGap: 0,
      alignItems: 'flex-start',
      marginTop: 20,
    },
  },

  passeItem: {
    paddingLeft: 154,

    [theme.breakpoints.down(500)]: {
      paddingLeft: 5,
    },
  },
}));
