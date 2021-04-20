import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) => ({
  root: {
    '& .MuiTextField-root': {
      width: 500,
    },
  },
  select: {
    padding: '0px',
    width: '100%',
  },
  closeThemeModal: {
    height: 82,
    paddingLeft: 30,
  },
  closeModelContainer: {
    minHeight: 26,
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
  },

  closeModelLabel: {
    fontWeight: 700,
    fontSize: 16,
    lineHeight: '24px',
    color: '#00B2DB',
  },
  arrowContainer: {
    background: '#FFFFFF',
    border: '1px solid #D1D5DE',
    borderLeft: 'none',
    boxSizing: 'border-box',
    borderRadius: '0px 5px 5px 0px',
    width: 42,
    height: 45,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  arrow: {
    width: 14,
    height: 9,
  },
  rotatedArrow: {
    transform: 'rotate(180deg)',
  },
  selectContainer: {
    minWidth: 290,
    height: 45,
    display: 'flex',
    background: '#FFFFFF',
    border: '1px solid #D1D5DE',
    boxSizing: 'border-box',
    borderRadius: '5px 0px 0px 5px',
    '& div': {
      display: 'flex',
      height: 45,
      alignItems: 'center',
      fontSize: 14,
      lineHeight: '20px',
      bottom: 1,
    },
    '& fieldset': {
      border: 'none',
      color: 'black',
    },
    [theme.breakpoints.down(420)]: {
      width: 230,
    },
    '& input': {
      width: '86%',
    },
  },

  selectedThemeContainer: {
    minWidth: 290,
    height: 45,
    display: 'flex',
    background: '#FFFFFF',
    border: '1px solid #D1D5DE',
    boxSizing: 'border-box',
    borderRadius: '5px 0px 0px 5px',
    textOverflow: 'ellipsis',
    '& div': {
      display: 'flex',
      height: 45,
      alignItems: 'center',
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: '20px',
      bottom: 1,
    },
    '& fieldset': {
      border: 'none',
      color: 'black',
    },
    [theme.breakpoints.down(420)]: {
      width: 230,
    },
    '& input': {
      color: '#00B2DB',
      width: '75% !important',
      textOverflow: 'ellipsis',
    },
  },

  item: {
    padding: '0px !important',
    width: '100%',
  },
  itemContainer: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },

  themeTitle: {
    margin: '0 15px',
    color: '#424242',
    fontSize: 14,
    wordBreak: 'break-word',
    width: 'calc(100% - 65px)',
  },

  textSelected: {
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#00B2DB',
    width: 'calc(100% - 60px)',
  },
  itemAvatar: {
    display: 'flex',
    padding: '7px 25px',
    alignItems: 'center',
    minHeight: 64,
    [theme.breakpoints.down(340)]: {
      padding: '7px 20px',
    },
  },
  avatarCircle: {
    width: ' 100%',
    flexDirection: 'row',
    borderRadius: '0px !important',
    paddingBottom: '0px !important',
    cursor: 'pointer',
  },
  widthOpened: { width: ' calc(100% - 30px)' },

  squareContainerClassName: {
    width: '50px !important',
    height: '50px !important',
  },
  avatarStyle: {
    position: 'relative',
    maxHeight: '100%',
    maxWidth: '100%',
  },
  selectedImg: {
    '&:not(.nohover):hover': {
      opacity: 1,
    },
  },
  itemArrow: {
    width: 19,
    height: 12,
  },
  activitiesContainer: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0px 25px 15px 55px',
  },
  activityTitle: {
    fontSize: 14,
    lineHeight: '21px',
    color: '#424242',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  line: {
    border: '1px solid #C9C9C7',
    width: '100%',
  },
  emptyDiv: {
    width: '100%',
    height: 50,
  },
}));
