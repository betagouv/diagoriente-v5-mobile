import { display } from 'html2canvas/dist/types/css/property-descriptors/display';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme: Theme) =>
  createStyles({
    breadCrumb: {
      width: '100%',
      height: 50,
      backgroundColor: '#FFFFFF',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0px 40px',
    },
    routesContainer: {},
    route: {
      fontSize: 11,
      lineHeight: '14px',
      color: '#6B6B6A',
    },
    currentRoute: {
      fontSize: 11,
      lineHeight: '14px',
      color: '#00B2DB',
    },
    mySelection: {},
  }),
);
