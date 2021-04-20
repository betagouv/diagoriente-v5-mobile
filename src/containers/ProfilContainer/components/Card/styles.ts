import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    cardContainer: {
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      background: '#fff',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: 10,
      position: 'relative',
    },

    root: {
      display: 'flex',
      flexDirection: 'column',
      padding: 30,
      flex: '1 0 auto',
    },

    titleContainer: {
      display: 'flex',
      color: '#424242',
      fontWeight: 'bold',
      fontSize: 18,
      maxHeight: 65,
      alignItems: 'center',
      paddingBottom: 9,
      paddingLeft: 25,
      [theme.breakpoints.down(500)]: {
        paddingLeft: 0,
      },
      '@media not all and (min-resolution:.001dpcm)': {
        display: 'flex',
        color: '#424242',
        fontWeight: 'bold',
        fontSize: 14,
        maxHeight: 65,
        alignItems: 'center',
        paddingBottom: 9,
        paddingLeft: 25,
        [theme.breakpoints.down(500)]: {
          paddingLeft: 0,
        },
      },
    },

    childrenCardContainer: {
      display: 'flex',
      width: '100%',
      paddingTop: 20,
      [theme.breakpoints.down(500)]: {
        flexDirection: 'column',
      },
    },

    childrenCard: {
      display: 'flex',
      flexDirection: 'column',
      width: '100%',
      flex: '1 1 0%',
      wordBreak: 'break-word',
      WebkitTextStroke: '#424242',
      WebkitTextStrokeWidth: '0.4px',
      justifyContent: 'center',
    },

    link: {
      cursor: 'pointer',
      textDecoration: 'none',
      color: '#fff',
    },

    echelonContainerClassName: {
      alignSelf: 'flex-start',
      marginLeft: 16,
      width: 200,
      [theme.breakpoints.down(500)]: {
        margin: '20px 0px',
      },
    },

    footerCardContainer: {
      display: 'flex',
      alignItems: 'flex-end',
      background: 'rgba(77, 110, 197, 0.2)',
      borderRadius: '0px 0px 10px 10px',
      padding: '5px 20px',
    },

    title: {
      marginLeft: 20,
      WebkitTextStroke: '#424242',
      WebkitTextStrokeWidth: '0.1px',
      flex: 1,
    },

    echelon: {
      backgroundColor: 'rgba(77, 110, 197, 0.2)',
    },

    echelonTitle: {
      color: '#4D6EC5',
      fontWeight: 'bold',
      WebkitTextStroke: '#4D6EC5',
      WebkitTextStrokeWidth: '0.1px',
    },

    tooltipPoint: {
      background: '#4D6EC5',
    },

    tooltip: {
      background: '#4D6EC5',
      opacity: '0.3px',
    },
    image: {
      maxHeight: '100%',
      maxWidth: '100%',
    },

    icon: {
      position: 'absolute',
      top: 12,
      right: 12,
      '@media not all and (min-resolution:.001dpcm)': {
        position: 'absolute',
        top: 1,
        right: 1,
        height: '6vh',
        width: '6vh',
      },
    },

    themeTitle: {
      textAlign: 'left',
      listStyle: 'inside',
      fontSize: 18,
      flex: 0,
      margin: 0,
    },
    iconWidth: {
      width: '56px',
    },
  }),
);
