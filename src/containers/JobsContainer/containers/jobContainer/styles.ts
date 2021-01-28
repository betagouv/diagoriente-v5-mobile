import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { makeStyles, Theme } from '@material-ui/core/styles';
import Bandeau from 'assets/svg/bandeau.svg';

export default makeStyles<Theme>((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  bandeau: {
    width: '100%',
    height: 80,
    backgroundImage: `url(${Bandeau})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'bottom',
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  jobTitle: {
    maxWidth: 'calc(100% - 40px)',
    textAlign: 'center',
    maxHeight: '100%',
    overflow: 'auto',
  },
  contentInfo: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  headerInfo: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: 25,
    width: '100%',
  },
  back: {
    display: 'flex',
    alignItems: 'center',
    cursor: 'pointer',
    marginBottom: 25,
  },
  arrow: {
    transform: 'rotate(180deg)',
  },
  textBack: {
    color: '#6B6B6A',
    fontWeight: 'bold',
    marginLeft: 13,
  },
  autocompleteContainer: {
    margin: '10px 0px',
  },
  immersionFormContainer: {
    width: '100%',
  },
  containerAutoComp: {
    backgroundColor: 'red',
  },
  favorisContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  favoris: {
    display: 'flex',
    alignItems: 'flex-end',
    cursor: 'pointer',
    marginBottom: 35,
  },
  textFavoris: {
    textDecorationLine: 'underline',
    color: '#011A5E',
    fontWeight: 'bold',
    marginLeft: 13,
  },
  JobInfo: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
  },
  jobDescription: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    padding: '25px 20px 13px 20px',
  },
  titleDescription: {
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 20,
  },
  footerDescription: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginTop: 19,
  },
  testContainer: {
    display: 'flex',
    height: 87,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  testLogo: {
    paddingRight: 17,
  },
  textTest: {
    color: '#011A5E',
    textDecorationLine: 'underline',
    fontWeight: 'bold',
    fontSize: 14,
    cursor: 'pointer',
    marginRight: 40,
  },
  immersion: {
    width: 285,
    height: 243,
    background: '#ffe9c3',
    borderRadius: 15,
    position: 'relative',
    padding: 30,
    textAlign: 'center',
    marginTop: 45,
  },
  logoContainer: {
    position: 'absolute',
    top: -18,
    left: 120,
  },
  titleImersion: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  btnImersionContainer: { position: 'absolute', bottom: -19, left: 86 },
  btnImersion: {
    backgroundColor: theme.palette.primary.main,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  btnLabel: { color: '#011A5E', fontWeight: 'bold' },
  interestInfo: {
    backgroundColor: '#F3F2F4',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    padding: '28px 17px',
  },
  wrapInterest: {
    maxWidth: '1080px',
    width: '100%',
    padding: '0px 4px',
  },
  interestTitleContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  interestTitle: {
    fontWeight: 'bold',
    fontSize: 24,
    lineHeight: '26px',
    marginBottom: 10,
  },
  interestContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  interests: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    marginTop: 30,
  },
  infoInterstDescription: {
    display: 'flex',
    width: 230,
    margin: 10,
  },
  gifInterest: {
    width: 80,
    height: 77,
    position: 'relative',
    borderRadius: '50%',
  },
  testImg: {
    position: 'absolute',
    top: 0,
    width: '100%',
    left: 0,
  },
  titleInterest: {
    width: 'min-content',
    overflow: 'hidden',
    whiteSpace: 'pre-wrap',
    paddingLeft: 30,
  },
  infoInterst: {
    position: 'relative',
    marginTop: 60,
    display: 'flex',
  },
  communInfoText: {},
  infoTextContainer: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: 'calc(100% - 95px)',
  },
  infoInterestPurpleText: {
    fontWeight: 400,
    fontSize: 14,
    color: '#420FAB',
  },
  logo: {
    width: 'auto',
    marginRight: 30,
  },
  competenceInfo: {
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
  },
  competenceContainer: {
    width: '100%',
    paddingTop: 40,
  },

  infoModalWrapper: {
    width: '100%',
    height: '100%',
    marginTop: 45,
    backgroundColor: '#ffff',
    display: 'flex',
    flexDirection: 'column',
  },
}));
