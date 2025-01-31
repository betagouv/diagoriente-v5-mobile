import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  root: {
    width: '100%',
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 auto',
  },
  content: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  filtersContainer: {
    backgroundColor: 'rgba(255,211,130, 0.5)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: 286,
    padding: '35px 45px',
  },
  subTitle: {
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 700,
    lineHeight: '20px',
    marginBottom: 24,
  },
  filterTitleContainer: {
    height: 35,
    display: 'flex',
    alignItems: 'center',
    paddingTop: 7,
  },
  titleFilter: {
    fontFamily: 'ocean',
    fontWeight: 900,
    fontSize: 26,
    color: theme.palette.success.main,
  },
  containerAutoComp: {
    width: 320,
    height: 46,
    marginBottom: 6,
    '& .MuiAutocomplete-inputRoot-228': {
      padding: 0,
    },
    [theme.breakpoints.down(380)]: {
      width: 290,
    },
  },
  wrapperInput: {
    display: 'flex',
    alignItems: 'center',
    position: 'relative',
  },
  boxsContainer: {
    display: 'flex',
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 24,
    flex: '1 1 auto',
  },
  spinnerContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginTop: 30,
    width: '100%',
    flex: '1 1 auto',
  },

  messages: {
    backgroundColor: '#fff1f6',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  contentMessage: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: 16,
  },
  clearMessage: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 15,
  },
  text: {
    fontSize: 14,
    width: '100%',
    textAlign: 'justify',
  },
  clearText: {
    fontWeight: 'bold',
    fontSize: 14,
    textDecorationLine: 'underline',
    color: '#D60051',
    paddingRight: 18,
    cursor: 'pointer',
  },
  clearTextBold: {
    fontWeight: 'bold',
    fontSize: 14,
    color: '#D60051',
    textDecorationLine: 'underline',
  },
  moreButton: {
    backgroundColor: theme.palette.primary.main,
    alignSelf: 'center',
    margin: '50px 0',
    '&:hover': {
      backgroundColor: '#DB8F00',
    },
  },
  textSelect: {
    padding: '0px 10px',
  },
  footerContainer: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  footerContent: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemFooter: { width: '100%' },
  centerItem: { display: 'flex', justifyContent: 'center' },
  rightItem: { display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: 20 },
}));
