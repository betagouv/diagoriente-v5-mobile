import { makeStyles, Theme } from '@material-ui/core/styles';
import { calculateBorderBoxPath } from 'html2canvas/dist/types/render/bound-curves';

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
    height: 8,
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
      width: '85%',
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

  /*   selectedTheme: {
    '& input': {
      color: '#00B2DB',
      width: '75%',
    },
  },
 */
  item: {
    /* paddingRight: '12px !important', */
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
    width: 'fit-content',
    wordBreak: 'break-word',
    [theme.breakpoints.down(380)]: {
      width: '80%',
    },
  },

  textSelected: {
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#00B2DB',
  },
  avatarCircle: {
    width: '100%',
    minWidth: '100%',
    height: '51px !important',
    flexDirection: 'row',
    borderRadius: '0px !important',
    paddingBottom: '0px !important',
    paddingLeft: 25,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(122, 230, 255, 0.2)',
    },
  },
  avatarCircleSelected: {
    width: '45px !important',
  },

  avatarCircleThemes: {
    width: '15px !important',
  },

  squareContainerClassName: {
    width: '30px !important',
    height: '30px !important',
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
  line: {
    border: '1px solid #C9C9C7',
    width: '100%',
  },
}));
