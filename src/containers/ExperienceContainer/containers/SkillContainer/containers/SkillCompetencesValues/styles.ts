import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import bluearrow from 'assets/svg/bluearrow.svg';
import darkbluearrow from 'assets/svg/darkbluearrow.svg';
import { SKILL_CONTAINER_PADDING } from 'utils/generic';

export default makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
    },

    container: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
    },

    themeContainer: {
      position: 'relative',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      padding: '20px 40px 40px 40px',
    },

    title: {
      fontWeight: 'bold',
      fontSize: 16,
      lineHeight: '24px',
      color: '#223A7A',
      width: '100%',
    },

    echelonWrapper: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },

    echelonContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'stretch',
      marginTop: 55,
    },

    empty: {
      width: 275,
    },

    echelon: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      paddingRight: 65,
      paddingBottom: 15,
    },

    echelonTitle: {
      fontSize: 14,
      flex: '1 1 0%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontWeight: 900,
    },

    competenceTitle: {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      flex: 1,
      margin: 0,
      paddingRight: 30,
      width: 245,
      color: '#424242',
      fontSize: 18,
    },

    competencesContainer: {
      display: 'flex',
      flexDirection: 'column',
    },

    competencesValues: {
      display: 'flex',
      justifyContent: 'space-between',
      width: '100%',
      paddingBottom: 10,
      '&:last-child': {
        paddingBottom: 36,
      },
    },

    arrowEchelon: {
      position: 'relative',
      display: 'flex',
      backgroundImage: `url(${bluearrow})`,
      alignItems: 'center',
      paddingRight: 65,
      width: 549,
      height: 67,
      cursor: 'pointer',
    },

    darkArrowEchelon: {
      position: 'absolute',
      backgroundImage: `url(${darkbluearrow})`,
      top: 0,
      left: 0,
      bottom: 0,
    },

    arrow: {
      paddingTop: 6,

      '@media not all and (min-resolution:.001dpcm)': {
        position: 'relative',
        bottom: '0.7vh',
      },
    },

    pointContainer: {
      display: 'flex',
      flex: '1 1 0%',
      alignItems: 'center',
      justifyContent: 'center',
    },

    point: {
      position: 'relative',
      borderRadius: '50%',
      width: 10,
      height: 10,
      background: '#00CFFF',
      cursor: 'pointer',
      '&:hover': {
        background: '#7AE6FF',
        width: 14,
        height: 14,
        border: '4px solid #00B2DB',
      },
    },

    tooltipContainer: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
    },

    tooltipPointContainer: {
      display: 'flex',
      width: '100%',
      marginTop: 15,
      marginBottom: 27,
      alignItems: 'center',
      justifyContent: 'center',
    },

    tooltipPoint: {
      display: 'flex',
      background: '#00CFFF',
      borderRadius: '50%',
      width: 10,
      height: 10,
      marginRight: 12,
    },
    tooltip: {
      display: 'flex',
      background: '#7AE6FF',
      borderRadius: '50%',
      width: 10,
      height: 10,
      marginRight: 12,
    },
    pointSelected: {
      background: '#FFFFFF',
      border: '4px solid #00B2DB',
      width: 18,
      height: 18,
      pointerEvents: 'none',
    },

    smallPointSelected: {
      position: 'relative',
      borderRadius: '50%',
      background: '#7AE6FF',
    },

    btnpreced: {
      color: '#6B6B6A',
      height: 50,
      marginTop: 33,
      fontSize: 14,
      textAlign: 'center',
      textDecoration: 'none',
      fontWeight: 'bold',
    },

    arrowpreced: {
      marginRight: 13,
    },

    hideLine: {
      textDecoration: 'none',
    },

    avatarContainer: {
      position: 'absolute',
      display: 'flex',
      justifyContent: 'center',
      width: '100%',
      left: 0,
      top: 118,
    },

    echelonBackground: {
      background: '#ffff',
      border: '1px dashed #C9C9C7',
      borderRadius: 5,
      padding: '12vh 20px 20px 30px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      [theme.breakpoints.down(340)]: {
        padding: '15vh 20px 20px 20px',
      },
      '@media not all and (min-resolution:.001dpcm)': {
        padding: '25vh 2vh 20vh 4vh',
        background: '#ffff',
        border: '1px dashed #C9C9C7',
        borderRadius: 5,
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
      },
    },
    avatarStyle: {
      position: 'relative',
      maxHeight: '100%',
      maxWidth: '100%',
    },

    circleClassName: {
      padding: 0,
    },
    themeAvatar: {
      alignItems: 'center',
      width: '100% !important',
      padding: '0px 50px 10px 50px',
    },
    squareContainerClassName: {
      alignSelf: 'center',
      height: 54,
      width: 56,
    },
    dataOptions: {
      display: 'flex',
      flexDirection: 'column',
      color: '#00B2DB',
      fontSize: 14,
      fontWeight: 'bold',
      flex: '1 1 0',
      [theme.breakpoints.up(560)]: {
        paddingTop: 30,
      },

      '@media not all and (min-resolution:.001dpcm)': {
        flex: '1 1 0',
        color: '#00B2DB',
        display: 'flex',
        fontSize: 10,
        fontWeight: 'bold',
        flexDirection: 'column',
        position: 'relative',
        bottom: '12vh',
      },
    },
    titleClassName: {
      margin: 0,
    },
    previousNext: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '8px 8px ',
      position: 'fixed',
      bottom: 0,
      width: '100%',
      backgroundColor: 'white',
      boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
      zIndex: 1,
      '@media not all and (min-resolution:.001dpcm)': {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '8px 13px ',
        position: 'fixed',
        bottom: 0,
        width: '100%',
        backgroundColor: 'white',
        boxShadow: '0px -4px 4px rgba(0, 0, 0, 0.1)',
        zIndex: 1,
      },
    },
    classNameTitle: {
      color: '#4D6EC5',
      fontSize: 18,
      lineHeight: '26px',
      '@media not all and (min-resolution:.001dpcm)': {
        color: '#4D6EC5',
        fontSize: 14,
        lineHeight: '26px',
      },
    },

    text: {
      '@media not all and (min-resolution:.001dpcm)': {},
    },
  }),
);
