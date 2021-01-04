import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  titleContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  title: {
    fontWeight: 900,
    fontSize: 42,
    fontFamily: 'ocean',
    textTransform: 'uppercase',
  },
  contentModal: {
    padding: '12px 0px 45px 0px',
  },
  infoContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    borderBottom: '1px solid #C9C9C7',
    paddingTop: 25,
    paddingBottom: 32,
  },
  TextTitle: {
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '26px',
    paddingLeft: 15,
    marginBottom: 6,
  },
  textAccessibility: {
    color: theme.palette.success.main,
    fontWeight: 'bold',
    fontSize: 18,
    lineHeight: '26px',
    paddingLeft: 45,
  },
  offreContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    paddingLeft: 45,
    marginTop: 15,
  },
  offreConatinerItems: {
    background: '#F3F2F4',
    borderRadius: 10,
    width: '90%',
    maxWidth: 322,
    padding: '11px 19px',
    marginBottom: 15,
  },
  offresTitle: {
    color: theme.palette.success.main,
    fontSize: 14,
    padding: 9,
  },
  description: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  similaireJob: {
    width: '45%',
  },
  graph: {
    width: '45%',
  },
  metiersContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingLeft: 45,
  },
  metierItem: {
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 12,
    padding: '3px 16px',
    width: 'fit-content',
    margin: '3px 0px',
    color: '#424242',
    cursor: 'pointer',
  },
  btnCLose: {
    marginTop: 15,
    backgroundColor: theme.palette.primary.main,
    width: 100,
    '&:hover': {
      backgroundColor: theme.palette.primary.main,
    },
  },
  containerBtn: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
}));
