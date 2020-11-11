import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme>(() => ({
  groupTextContainer: {
    display: 'flex',
    width: '100%',
  },
  conditionTextVerif: {
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
    width: '70%',
  },
  containerCheckboxVerif: {
    display: 'flex',
    alignItems: 'center',
    marginTop: 14,
    border: '1px solid gray',
    padding: '24px 10px',
    marginBottom: '30px',
    backgroundColor: 'white',
  },
  emptyDiv: {
    width: 260,
  },
}));
