import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles<Theme, { backdropColor: string; size?: number,height?:number }>((theme) => ({
  modalContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  },
  backdrop: {
    backgroundColor: (props) => `${props.backdropColor} !important`,
    opacity: 0.5,
  },
  modal: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#fff',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: 15,
    width: (props) => `${props.size ? props.size : 100}%`,
    height: (props) => `${props.height ? props.height : 100}%`,
    maxHeight: '100%',

    '@media not all and (min-resolution:.001dpcm)': {
      overflow: 'auto',
      height: '100vh',
      flex: 1, 
    }

    
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    margin: '20px 14px 0px 14px',
    position: 'relative',
    height: 33,
    alignItems: 'center',
    fontSize: 24,
    fontWeight: 'bold',
    color: theme.palette.secondary.main,
  },
  reset: {
    position: 'absolute',
    right: 0,
  },
  modalContainerBody: {
    overflow: 'auto',
    height: '100vh',
    flex: 1,
  },
  closePop: {
    right: '13px',
    top: '165px',
    position: 'fixed',
  },
}));
