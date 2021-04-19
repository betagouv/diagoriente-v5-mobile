import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      height: '100vh',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      height: '100%',
    },

    greyContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      padding: '35px 40px 40px 40px',
      flexGrow: 1,
      [theme.breakpoints.down(340)]: {
        padding: '35px 20px 40px 20px',
      },
    },
    title: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
      marginBottom: 30,
    },

    ActivitiesContainer: {
      display: 'flex',
      width: '100%',
      flexDirection: 'column',
      justifyContent: 'space-between',
      flexGrow: 1,
    },
    selectGrid: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      position: 'relative',
    },
    addContainer: {
      display: 'flex',
      width: '100%',
      height: 20,
      marginTop: 40,
      marginBottom: 70,
    },
    addMargin: {
      marginTop: 15,
      marginBottom: 0,
    },
    extraActivityLabel: {
      color: '#00B2DB',
      fontSize: 14,
      fontWeight: 'bold',
      lineHeight: '20px',
      marginLeft: 10,
    },
  }),
);
