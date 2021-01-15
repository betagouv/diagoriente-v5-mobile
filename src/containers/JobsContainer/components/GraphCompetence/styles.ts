import { makeStyles, Theme } from '@material-ui/core/styles';
import Yellowarrow from 'assets/svg/fleche_jaune-claire.svg';
import darkYellowrrow from 'assets/svg/fleche_jaune.svg';
import bluearrow from 'assets/svg/bluearrow.svg';
import darkbluearrow from 'assets/svg/darkbluearrow.svg';

export default makeStyles<Theme, { select: string }>((theme: Theme) => ({
  root: {
    borderTop: '1px solid #C9C9C7',
    boxSizing: 'border-box',
    marginTop: 35,
  },
  header: {
    display: 'flex',
    width: '100%',
    height: 74,
  },
  empty: {
    width: 330,
  },
  titleJobCompetence: {
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '15px',
    color: '#DB8F00',
    width: '50%',
    padding: '0px 25px',
    backgroundColor: (props) => (props.select === 'jobCompetence' ? '#fff' : '#F3F2F4'),
    borderBottom: (props) => (props.select === 'jobCompetence' ? '#fff' : '1px solid #C9C9C7'),
    borderRight: (props) => (props.select === 'jobCompetence' ? '#fff' : '1px solid #C9C9C7'),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  titleParcoursCompetence: {
    width: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    fontSize: 12,
    lineHeight: '15px',
    color: '#00B2DB',
    backgroundColor: (props) => (props.select === 'parcoursCompetence' ? '#fff' : '#F3F2F4'),
    borderBottom: (props) => (props.select === 'parcoursCompetence' ? '#fff' : '1px solid #C9C9C7'),
    borderLeft: (props) => (props.select === 'parcoursCompetence' ? '#fff' : '1px solid #C9C9C7'),
    padding: '0px 25px',
    cursor: 'pointer',
  },
  echelonContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch',
    alignSelf: 'flex-start',
    padding: 30,
  },
  echelonTitle: {
    fontSize: 14,
    flex: '1 1 0%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 900,
  },

  echelon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    paddingRight: 65,
    paddingBottom: 15,
  },

  competenceTitle: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    direction: 'rtl',
    margin: 0,
    paddingRight: 30,
    width: '60%',
    color: '#424242',
    fontSize: 12,
  },

  competencesContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: 30,
    padding: '0px 15px',
    [theme.breakpoints.up(415)]: {
      padding: '0px 45px',
    },
  },

  competencesValues: {
    display: 'flex',
    width: '100%',
    padding: '10px 0px 10px 30px',
    borderBottom: '0.5px solid #C9C9C7',
    '&:last-child': {
      paddingBottom: 36,
    },
  },
  competencesValuesNotExist: {
    display: 'flex',
    width: '100%',
    paddingBottom: 10,
    paddingTop: 10,
    paddingLeft: 30,
    borderBottom: '0.5px solid #C9C9C7',
    '&:last-child': {
      paddingBottom: 36,
    },
    opacity: 0.5,
  },
  arrowEchelon: {
    position: 'relative',
    display: 'flex',
    backgroundImage: `url(${Yellowarrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    width: 685,
    height: 67,
    cursor: 'pointer',
  },

  darkArrowEchelon: {
    position: 'absolute',
    backgroundImage: `url(${darkYellowrrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    top: 1,
    left: 0,
    bottom: 0,
    height: 90,
  },

  arrow: {
    paddingTop: 6,
  },
  arrowEchelonBlue: {
    position: 'relative',
    display: 'flex',
    backgroundImage: `url(${bluearrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    alignItems: 'center',
    width: 685,
    height: 67,
    cursor: 'pointer',
  },

  darkArrowEchelonBlue: {
    position: 'absolute',
    backgroundImage: `url(${darkbluearrow})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    top: 2,
    left: 0,
    bottom: 0,
    height: 85,
  },

  pointsContainer: {
    display: 'flex',
    marginTop: 6,
    marginBottom: 13,
    alignItems: 'center',
    justifyContent: 'center',
    height: '10px !important',
  },

  point: {
    display: 'flex',
    borderRadius: '50%',
    width: '10px !important',
    height: '10px !important',
    marginRight: 6,
    marginTop: 8,
  },
}));
