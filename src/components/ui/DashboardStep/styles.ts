import { makeStyles, Theme } from '@material-ui/core/styles';

const transition = 'all 225ms ease-out';
function getAvatarSize(props: { state?: 'closed' | 'initial' | 'open' }) {
  if (props.state === 'closed') {
    return '100px';
  }
  if (props.state === 'open') {
    return '100px';
  }

  return '165px';
}
function getAvatarHeight(props: { state?: 'closed' | 'initial' | 'open' }) {
  if (props.state === 'closed') {
    return '100px';
  }
  if (props.state === 'open') {
    // return '156px';
    return '100px';

  }

  // return '150px';
  return '165px';

}

export default makeStyles<
  Theme,
  { background?: string; secondBackground?: string; state?: 'closed' | 'initial' | 'open'; isOpen?: boolean }
>((theme) => ({
  container: {
    backgroundColor: (props) =>
      (props.state === 'initial' ? props.background : props.state === 'closed' ? props.background : props.background) ,
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    transition,
 
    height: (props) => (props.state === 'open' ? 'auto' : props.state === 'initial' ? 'auto' : '150px'),

  },
  wrapperTitleImage: {
    display: 'flex',
    height: (props) => (props.state === 'open' ? '179px' : '100%'),
    alignItems: 'center',
    width: '100%',
    justifyContent: 'flex-start',
    padding: '25px 0px 25px 5%',
    [theme.breakpoints.down(330)]: {
      padding: '25px 0px 25px 0px',
    },
  },
  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontFamily: 'Ocean',
    position: 'relative',
    transition,
    marginLeft:38,
    zIndex: 2,
    [theme.breakpoints.down(380)]: {
      marginLeft:0,

    },
    [theme.breakpoints.down(330)]: {
      fontSize: 36,

    },
  },
  avatarContainer: {
    width: (props) => getAvatarSize({ state: props.state }),
    height: (props) => getAvatarHeight({ state: props.state }),
    position: 'relative',
    transition,
  },
  avatar: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0,
  },

  openChildren: {
    display: 'flex',
    width: '100%',
    backgroundColor: (props) =>
    (props.state === 'initial' ? props.secondBackground : props.state === 'closed' ? props.secondBackground: props.secondBackground) ,    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.2ms linear',
    transitionDelay: (props) => (props.state !== 'open' ? '0ms' : '225ms'),
    transform: (props) => `scale(${props.state === 'open' ? 1 : 0})`,
    height: (props) => (props.state === 'open' ? '300px' : 0),
    [theme.breakpoints.down(420)]: {
      height: (props) => (props.state === 'open' ? '300px' : 0),
    },
    cursor: 'default',
    justifyContent: 'center',
    padding: '20px 0px',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleBackground: {
    position: 'absolute',
    top: '40%',
    left: '-9vw',
    width: '50vw',
    transform: ' rotate(180deg) translateY(50%)',
    zIndex: -1,
    transition,
    [theme.breakpoints.down(370)]: {
      width: '62vw',
    },
    [theme.breakpoints.down(330)]: {
      left: '-15vw',

    },
  },
  titleBk:{
    [theme.breakpoints.down(380)]: {
      marginLeft: '20px',

    },
    [theme.breakpoints.down(330)]: {
      marginLeft: '0px',

    },
  }
}));
