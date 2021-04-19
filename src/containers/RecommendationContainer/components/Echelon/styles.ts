import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { mobile?: boolean }>(() => ({
  echelonContainer: {
    display: 'flex',
    flexDirection: (props) => (props.mobile ? 'column' : 'row'),
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '12px 0px',
  },
  echelonRoot: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1,
    marginRight: 10,
    maxWidth: 248,
    marginBottom: (props) => (props.mobile ? '20px' : '0px'),
  },
  title: {
    color: '#00B2DB',
    fontSize: 14,
    fontWeight: 'bold',
  },
  niveau: {
    fontSize: 10,
  },
}));
