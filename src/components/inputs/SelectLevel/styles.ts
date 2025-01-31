import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { makeStyles } from '@material-ui/core/styles';
import { calculateBorderBoxPath } from 'html2canvas/dist/types/render/bound-curves';

export default makeStyles(() => ({
  root: {
    '& .MuiTextField-root': {
      width: 500,
    },
  },
  paper: {
    margin: '0px !important',
    position: 'absolute!important' as 'absolute',
    borderRadius: '10px 10px 0px 0px',
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
    display: 'inline',
    whiteSpace:'normal',
    alignItems: 'center',
  },
  arrowClose: {
    width: 19,
    height: 12,
  },
  closeModelLabel: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '26px',
    color: '#00B2DB',
    marginLeft: 20,
  },
  arrowContainer: {
    background: '#00CFFF',
    border: '1px solid #D1D5DE',
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
    width: '100%',
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
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: '20px',
      paddingRight: '0px !important',
      bottom: 1,
    },
    '& fieldset': {
      border: 'none',
      color: '',
    },
    '& input': {
      width: 'calc(100% - 50px)',
      textOverflow:'ellipsis',
    },
  },

  selectLevelContainer: {
    width: '100%',
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
      fontWeight: 'bold',
      fontSize: 14,
      lineHeight: '20px',
      paddingRight: '0px !important',
      bottom: 1,
    },
    '& fieldset': {
      border: 'none',
      color: '',
    },
    '& input': {
      width: 'calc(100% - 115px)',
      textOverflow:'ellipsis'
    },
  },

  item: {
    padding: '0px !important',
    width: '100%',
    '&:hover': {
      background: 'rgba(122, 230, 255, 0.2)',
    },
  },

  selectedItem: {
    padding: '0px !important',
    width: '100%',
    background: 'rgba(122, 230, 255, 0.2)',
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
  },

  textSelected: {
    margin: '0 15px',
    fontWeight: 'bold',
    fontSize: 14,
    color: '#00B2DB',
  },
  /*  avatarCircle: {
    width: '100%',
    minWidth: '100%',
    height: '51px !important',
    flexDirection: 'row',
    borderRadius: '0px !important',
    paddingBottom: '0px !important',
    paddingLeft: 62,
    cursor: 'pointer',
    '&:hover': {
      background: 'rgba(122, 230, 255, 0.2)',
    },
  }, */
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

  echelon: {
    fontWeight: 'bold',
    fontSize: 14,
    lineHeight: '20px',
    color: '#424242',
  },

  ItemMenuContent: {
    padding: '15px 30px',
    whiteSpace:'normal'
  },

  pointsTitleContainer: {
    display: 'flex',
  },

  tooltipPointContainer: {
    display: 'flex',
    marginTop: 6,
    marginBottom: 13,
    alignItems: 'center',
    justifyContent: 'center',
  },

  selectedTooltipPointContainer: {
    display: 'flex',
    marginTop: 6,
    marginBottom: 13,
    alignItems: 'center',
    justifyContent: 'center',
    height: '10px !important',
  },

  selectedTooltipPoint: {
    display: 'flex',
    background: '#00CFFF',
    borderRadius: '50%',
    width: '10px !important',
    height: '10px !important',
    marginRight: 6,
    marginTop: 8,
  },

  tooltipPoint: {
    display: 'flex',
    background: '#00CFFF',
    borderRadius: '50%',
    width: '10px !important',
    height: '10px !important',
    marginRight: 6,
  },

  tooltip: {
    display: 'flex',
    background: '#7AE6FF',
    borderRadius: '50%',
    width: '10px !important',
    height: '10px !important',
    marginRight: 6,
  },

  selectedTooltip: {
    display: 'flex',
    background: '#7AE6FF',
    borderRadius: '50%',
    width: '10px !important',
    height: '10px !important',
    marginRight: 6,
    marginTop: 8,
  },

  levelTitle: {
    fontSize: 12,
    lineHeight: '15px',
    color: '#424242',
  },

  dialogPaper: {
    bottom: 0,
    width: '100% !important',
  },
}));
