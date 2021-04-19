import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { selected: boolean }>((theme) => ({
  root: {
    backgroundColor: (props) => (props.selected ? theme.palette.secondary.main : '#F3F2F4'),
    borderRadius: 10,
    width: 320,
    height: 237,
    margin: 9,
    padding: 20,
    cursor: 'pointer',
    [theme.breakpoints.down(380)]: {
      width: 290,
    },
  },
  selectedBox: {
    backgroundColor: theme.palette.secondary.main,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18,
    textAlign: 'left',
    height: 90,
    color: '#424242',
  },
  description: {
    fontSize: 14,
    height: 70,
    overflow: 'hidden',
    width: '100%',
    marginBottom: (props) => (props.selected ? 0 : 15),
    textAlign: 'left',
    color: '#424242',
  },
  accessibility: {
    maxWidth: '170px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    height: 24,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 12,
    color: '#6B6B6A',
    padding: '0 12px',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  btn: {
    backgroundColor: '#fff',
    '&:hover': {
      backgroundColor: '#fff',
    },
  },
  btnLabel: {
    color: '#011A5E',
    fontWeight: 'bold',
    fontSize: 18,
  },
  footerCard: {
    display: 'flex',
    justifyContent: 'space-between',
    position: 'relative',
    height: 25,
  },
  heartLogo: {
    position: 'absolute',
    bottom: 5,
    right: 10,
  },
  styleLink: {
    textDecoration: 'none',
  },
}));
