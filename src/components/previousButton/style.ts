import { makeStyles, Theme } from '@material-ui/core/styles';

export default makeStyles((theme:Theme) => ({
    btnperso: {
        // position: 'absolute',
        // backgroundColor: '#00CFFF',
        // bottom: -25,
        backgroundColor: '#F3F2F4',
        left: '50%',
        minWidth: 175,
        [theme.breakpoints.down(340)]: {
          minWidth: 150,
        },
        transform: 'translate(-50%,0)',
        height: 50,
        borderRadius: 10,
        // '&:hover': {
        //   backgroundColor: '#00B2DB ',
        // },
        // '&:disabled': {
        //   backgroundColor: '#7AE6FF',
        // },
      },
    
      contentBtn: {
        display: 'flex',
        alignItems: 'center',
        width: '100%',
      },
    
      btnLabel: {
   
        color: '#223A7A',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
        marginLeft: 10,
        lineHeight: '26px',
        paddingBottom: 4,
        flex: 1,
      },
    
      arrow: {
        position: 'absolute',
        left: 19,
        transform: 'rotate(180deg)',
        marginBottom: 4
    
      },
    
      margin: {
        margin: '0px 20px',
      },
      loaderContainer: {
        marginLeft: 7,
        display: 'flex',
        alignItems: 'center',
      },
      colorPrimaryLoader: {
        color: '#fff',
    
      },
}));