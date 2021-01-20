import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  content: {
    width: '100%',
  },
  titleContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  titleImmersion: {
    textAlign: 'center',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    left: 0,
    top: 66,
    width: 286,
  },
  empty: {
    width: '286px',
  },
  arrow: {
    transform: 'rotate(180deg)',
  },
  textBack: {
    color: '#6B6B6A',
    fontWeight: 'bold',
    marginLeft: 19,
    width: '100%',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  immersionFormContainer: {
    marginBottom: 20,
  },
  filtersContainer: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  filters: {
    padding: '27px 30px',
  },
  switchMask: {
    display: 'flex',
    paddingBottom: 25,
    borderBottom: '0.5px solid #C9C9C7',
  },
  maskTitle: {
    marginLeft: 13,
  },
  bar: {
    color: '#C9C9C7',
  },
  filterMainTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    color: '#DB8F00',
    marginTop: 25,
  },
  filterTitle: {
    fontWeight: 'bold',
    fontSize: 14,
  },
  TrierContainer: {
    marginTop: 25,
    paddingBottom: 25,
    borderBottom: '0.5px solid #C9C9C7',
  },
  distanceContainer: {
    marginTop: 30,
  },
  tailleContainer: {
    marginTop: 25,
    paddingBottom: 25,
    borderBottom: '0.5px solid #C9C9C7',
  },
  boxSearch: {
    width: '100%',
    minHeight: 121,
    backgroundColor: '#ffe9c3',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px 40px',
    textAlign: 'center',
  },
  textTitleContainer: {
    display: 'flex',
    marginBottom: 20,
    alignItems: 'center',
  },
  edit: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 15,
  },
  textTitle: {
    fontWeight: 'bold',
    paddingLeft: 5,
  },
  textEdit: {
    fontWeight: 'bold',
    textDecorationLine: 'underline',
    paddingLeft: 5,
    cursor: 'pointer',
    color: '#DB8F00',
  },
  results: {
    flex: 1,
    padding: '10px 20px',
  },
  loadingContainer: {
    paddingBottom: 300,
  },
  noResults: {
    fontSize: 14,
    padding: '20px 0px',
    textAlign: 'center',
  },
  resultTitle: {
    color: theme.palette.success.main,
    fontSize: 28,
  },
  paginationContainer: {
    display: 'flex',
    justifyContent: 'center',
    marginBottom: 30,
    marginTop: 30,
  },
  itemPage: {
    fontSize: 18,
    padding: '0px 10px',
    cursor: 'pointer',
    fontWeight: 100,
  },
  boldItem: {
    fontSize: 18,
    fontWeight: 'bolder',
  },

  titleContainerContact: {
    fontSize: 42,
    fontFamily: 'ocean',
    marginTop: 25,
    textAlign: 'center',
  },

  modalContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  iconBackground: {
    background: '#ffff',
    marginTop: 30,
  },

  iconAttention: {
    marginRight: 22,
  },

  descriptionModalContainer: {
    fontSize: 18,
    textAlign: 'center',
    color: '#424242',
    marginTop: 20,
    marginBottom: 20,
  },

  btn: {
    position: 'relative',
    left: 'auto',
    bottom: 'auto',
    right: 'auto',
    top: 'auto',
    backgroundColor: '#FFA600',
    alignSelf: 'center',
    transform: 'none',
    '&:hover': {
      backgroundColor: '#FFA600',
    },
    marginBottom: 15,
    width: 145,
  },

  btnLabel: {
    color: '#011A5E',
    fontWeight: 'bold',
    fontSize: 16,
  },

  message: {
    color: '#FF0060',
    fontSize: 14,
    fontWeight: 'bold',
    marginTop: 15,
    width: 555,
    display: 'flex',
    alignItems: 'center',
    marginBottom: 40,
  },

  okButton: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  okText: {
    marginRight: 10,
  },

  secteurContainerFullScreen: {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    zIndex: 99999,
  },
  closeFullModelContainer: {
    width: '100%',
    height: 80,
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 30,
    borderBottom: '0.5px solid #C9C9C7',
  },
  closeModelLabel: {
    fontFamily: 'Andika New Basic',
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '26px',
    color: '#DB8F00',
    marginLeft: 20,
  },

  fullScreenItem: {
    height: 'auto',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  itemSecteurWrapper: {
    height: 56,
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: 20,
    '&:hover': {
      backgroundColor: 'rgba(255,211,130,0.2)',
    },
  },

  itemSecteur: {
    margin: 2,
    width: 284,
    cursor: 'pointer',
    '&:hover': {
      color: theme.palette.primary.main,
    },
    padding: '3px 0px',
  },
  conseilContainer: {
    background: '#FFFFFF',
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    overflow: 'auto',
    zIndex: 99999,
  },
}));
