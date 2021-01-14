import { makeStyles, Theme } from '@material-ui/core/styles';

const transition = 'all 225ms ease-out';
function getAvatarSize(props: { state?: 'closed' | 'initial' | 'open' }) {
  if (props.state === 'closed') {
    return '83px';
  }
  if (props.state === 'open') {
    return '162px';
  }

  return '165px';
}
function getAvatarHeight(props: { state?: 'closed' | 'initial' | 'open' }) {
  if (props.state === 'closed') {
    return '75px';
  }
  if (props.state === 'open') {
    return '156px';
  }

  return '150px';
}

export default makeStyles<
  Theme,
  { background?: string; secondBackground?: string; state?: 'closed' | 'initial' | 'open'; isOpen?: boolean }
>((theme) => ({
  container: {
    backgroundColor: (props) =>
      props.state === 'initial' || props.state === 'closed' ? props.background : props.secondBackground,
    alignItems: 'center',
    flexDirection: 'column',
    cursor: 'pointer',
    transition,
    flex: (props) => (props.state === 'open' ? '3 3 0%' : '1 1 0%'),
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

    // height: '100%',
  },
  title: {
    color: '#FFFFFF',
    fontSize: 38,
    fontFamily: 'Ocean',
    position: 'relative',
    transition,
    zIndex: 2,
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
  /*   initialChildren: {
    display: 'flex',
    width: '100%',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.2ms linear',
    transitionDelay: (props) => (props.state === 'initial' ? '225ms' : '0ms'),
    transform: (props) => `scale(${props.state === 'initial' ? 1 : 0})`,
    height: (props) => (props.state === 'initial' ? 'auto' : 0),
  }, */
  openChildren: {
    display: 'flex',
    width: '100%',
    backgroundColor: (props) => props.background,
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'all 0.2ms linear',
    transitionDelay: (props) => (props.state !== 'open' ? '0ms' : '225ms'),
    transform: (props) => `scale(${props.state === 'open' ? 1 : 0})`,
    height: (props) => (props.state === 'open' ? '400px' : 0),
    cursor: 'default',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  titleBackground: {
    position: 'absolute',
    top: '40%',
    left: '-4vw',
    width: '54vw',
    transform: 'translateY(-50%)',
    zIndex: -1,
    transition,
    [theme.breakpoints.down(370)]: {
      width: '53vw',

          },
    [theme.breakpoints.down(330)]: {
      width: '52vw',

          },
    
  },
}));
