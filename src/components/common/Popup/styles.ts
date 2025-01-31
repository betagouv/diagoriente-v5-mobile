import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  modalContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },

  backdrop: {
    background: '#011A5E !important',
    opacity: 0.5,
  },

  modal: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    height: 340,
    width: 480,
    padding: 50,
    [theme.breakpoints.down(415)]: {
      width: 350,
    },
    [theme.breakpoints.down(370)]: {
      width: 270,
    },
    [theme.breakpoints.up(560)]: {
      height: 300,
    },
  },

  header: {
    display: 'flex',
    flexDirection: 'column',
    flex: '1 1 0%',
  },

  picto: {
    paddingBottom: 20,
  },
}));
