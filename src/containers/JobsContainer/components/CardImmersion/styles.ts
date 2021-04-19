import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  root: {
    border: '1px solid #C9C9C7',
    borderRadius: 5,
    minHeight: 165,
    margin: '15px 0px',
    transition: '1s ease-in-out',
  },
  infoImmersion: {
    display: 'flex',
    flexDirection: 'column',
    padding: 25,
    [theme.breakpoints.up(380)]: {
      width: 340,
    },
  },
  height2: {
    height: 'auto',
    transition: '1s ease-in-out',
  },
  titleFavorisContainer: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  titleCard: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '22px',
    color: theme.palette.success.main,
    width: '80%',
    paddingTop: 5,
  },
  description: {
    fontWeight: 'bold',
    marginTop: 6,
  },
  icons: {
    marginTop: 15,
    marginBottom: 10,
    display: 'flex',
    flexDirection: 'column',
  },
  logoItemDescription: {
    display: 'flex',
    paddingRight: 10,
    marginBottom: 15,
  },
  textLogo: {
    paddingLeft: 10,
  },
  leftInfo: {
    flex: 1,
  },
  rightInfo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 223,
  },
  favorisText: {
    color: theme.palette.success.main,
    fontWeight: 14,
    display: 'flex',
  },
  heartLogo: {
    paddingLeft: 4,
  },
  btnWrapper: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  btnContainer: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btnLabel: {
    color: '#011A5E',
    fontWeight: 'bold',
    fontSize: 14,
  },
  extends: {
    height: 'auto',
    /*  width: 340,
    [theme.breakpoints.down(380)]: {
      width: 'calc(100% - 40px)',
    }, */
  },
  headerInfo: {
    backgroundColor: '#ffe9c3',
    height: 'fit-content',
    padding: 23,
    position: 'relative',
  },
  arrow: {
    transform: 'rotate(-90deg)',
    position: 'absolute',
    top: 20,
    right: 20,
    cursor: 'pointer',
  },
  infoExtended: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  item: {
    width: '90%',
    marginBottom: 9,
  },
  itemTitle: {
    fontWeight: 'bold',
  },
  logoContainer: {
    display: 'flex',
    marginTop: 10,
    justifyContent: 'space-between',
  },
  logoItem: {
    display: 'flex',
    flexDirection: 'column',
    width: '35%',
    alignItems: 'center',
  },
  titleLogo: {
    fontWeight: 'bold',
    fontSize: 14,
    color: theme.palette.primary.main,
    textAlign: 'center',
  },
}));
