import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    experienceContainer: {
      flex: '1 0 auto',
      position: 'relative',
      width: '100%',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      paddingBottom:56,
      [theme.breakpoints.down(380)]: {
        overflowX:'hidden'
      },
    },

    cardGridContainer: {
      padding: '30px 70px 30px 70px',
      display:'contents',
      alignItems:'center'
    },

    cardClassName: {
      paddingTop: 40,
    },

    title: {
      fontFamily: 'Ocean',
      fontWeight: 900,
      backgroundColor:'#4D6EC5',
      // fontSize: '2.2em',
      // lineHeight: 1,
      // paddingBottom: 15,
    },

    logo: {
      height: 70,
      width: 70,
    },

    txtCarte: {
      marginTop: 15,
    },

    userName: {
      fontSize: 18,
      fontWeight: 'bold',
    },

    location: {
      marginLeft: 10,
    },

    cardGrid: {
      display: 'flex',
      width: '100%',
    },

    experienceCard: {
      alignSelf: 'flex-start',
    },

    itemContainer: {
      display: 'flex',
      justifyContent: 'center',
    },

    themeSelection: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '100%',
    },

    locationContainer: {
      display: 'flex',
      alignItems: 'center',
    },

    themeTile: {
      paddingLeft: 2,
      fontSize: 14,
      flex: 1,
      color: '#424242',
      width: '100%',
      overflow: 'hidden',
      textAlign: 'center',
      whiteSpace: 'pre-wrap',
    },

    alignThemeTitle: {
      textAlign: 'left',
      listStyle: 'inside',
    },

    emptyDiv: {
      height: 45,
    },

    root: {
      width: '100% !important',
    },

    sliderContainer: {
      width: '100%',
    },

    content: {
      display: 'flex',
    },

    sliderWrapper: {
      width: '100%',
    },

    item: {
      width: '100%',
      height: '100%',
    },
    titleContainer: {
      marginBottom: 30,
      display: 'flex',
      justifyContent: 'center',
    },

    traitLogo: {
      position: 'absolute',
      top: -16,
      left: -22,
      zIndex: 3,
    },

    topTitle: {
      fontWeight: 900,
      fontSize: 24,
      color: theme.palette.secondary.main,
    },
    imageContainer: {
      position: 'relative',
      width: 60,
    },
    testImg: {
      position: 'absolute',
      top: 0,
      width: '100%',
      left: 0,
    },

    bottomTitle: {
      fontWeight: 900,
      fontSize: 24,
      color: theme.palette.primary.main,
      position: 'relative',
      zIndex: 5,
    },

    descLogo: {
      position: 'relative',
      height: 80,
    },

    avatarContainer: {
      display: 'flex',
      justifyContent: 'space-evenly',
      flexWrap: 'wrap',
      padding: '0px 150px',
    },

    circle: {
      width: '100%',
    },
    subitem: {
      minWidth: 170,
      padding: '10px 3px',
      width: '25%',
    },

    selected: {
      opacity: 0.5,
    },
    accordionContainer:{
        width:'100%',
        margin: '0px !important',
        boxShadow: 'none !important',
      },
      activeHeader: {
        backgroundColor: '#e1e7f7 !important',
      },
    persoContainer: {
      display: 'flex',
      flexDirection: 'column',
      marginTop: 15,
      marginLeft:15,
      justifyContent: 'center',
    },

    childrenCardClassName: {
      padding: 0,
    },

    wrapperBtn: {
      display: 'flex',
      position: 'absolute',
      width: '100%',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
        border: 'none',
      },
    },

    nextWrap: { right: 20 },
    prevWrap: { left: 5 },

    containerBtn: {
      width: 55,
      height: 55,
      backgroundColor: '#7533FF',
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      outline: 'none',
      borderStyle: 'hidden',
      '&:active': {
        borderStyle: 'hidden',
      },
    },

    rotatedArrow: {
      transform: 'rotate(180deg)',
    },

    titleContainerArrow: { margin: '0px 10px', width: 124 },

    topTitleArrow: { fontSize: 18, fontWeight: 900, color: '#3533E4' },

    bottomTitleArrow: { fontSize: 18, fontWeight: 900, color: "'#5203E4" },

    hide: {
      display: 'none',
    },

    circleContainer: {
      display: 'flex',
      justifyContent: 'center',
      '&:focus': {
        outline: 'none',
        border: 'none',
      },
    },

    carouselCircle: {
      height: 14,
      width: 14,
      borderRadius: '50%',
      background: '#A275FF',
      margin: '0px 2.5px',
      marginBottom: 20,
      transition: 'all 0.4s linear',
      cursor: 'pointer',
      '&:focus': {
        outline: 'none',
        border: 'none',
      },
    },

    currentCarouselCircle: {
      background: '#420FAB',
    },

    job: {
      flex: 1,

      marginLeft: 15,
      fontSize: 14,
      whiteSpace: 'nowrap',
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    favoriContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginTop: 8,
    },
    proItem: {
      padding: 40,
      '&:focus': {
        outline: 'none',
        border: 'none',
      },
    },
    themeImage: {
      maxHeight: '100%',
      maxWidth: '100%',
    },

    textButton: {
      color: '#fff',
      fontSize: 18,
      width: 262,
    },
    btn: {
      backgroundColor: '#011A5E',
      '&:hover': {
        backgroundColor: '#223A7A',
      },
      [theme.breakpoints.down(330)]: {
          margin:'0px 0px !important '  
      },
    },

    btnLink: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      marginTop: 40,
      maxWidth: '100%',
      background: 'transparent',
    },

    link: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'rgba(77, 110, 197, 0.1)',
      margin: 16,
      borderRadius: 10,
      flex: 1,
      maxWidth: 'calc(33.333333% - 32px)',
    },
    avis: { position: 'fixed', bottom: 0, right: 30 },
    
    headerAccordion: {
      margin: '0px !important',
      boxShadow: 'none !important',

   


    },
  
   
      
    persoAccordion : {
      
    height: '80px',
        borderRadius: '0px',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
      backgroundColor: '#E1E7F7',

    },
    persoText : {
      fontSize: '26px',
      lineHeight: '26px',
      color: '#4D6EC5',
      marginLeft: '70px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      [theme.breakpoints.down(380)]: {
        marginLeft:10
      },
    },
    iconPerso:{
      width:30,
      height:30,
      color:"#4D6EC5"
    },
    headerPro:{
      backgroundColor: 'rgba(162, 117, 255, 0.3)',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
      height: '80px',
      borderRadius: '0px',

    },
    TextPro:{
      fontSize: '26px',
      lineHeight: '26px',
      marginLeft: '70px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      color:'#420FAB',
    },
    iconPro:{
      width:30,
      height:30,
      color:"#420FAB"
    },
    headerCompetence:{
      backgroundColor: 'rgba(255, 110, 164, 0.3)',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
      height: '80px',
      borderRadius: '0px',

    },
    TextCompetence:{
      fontSize: '26px',
      lineHeight: '26px',
      marginLeft: '70px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      color:'#D60051',
    },
    iconCompetence:{
      width:30,
      height:30,
      color:"#D60051"
    },
    profil:{
      backgroundColor:'#D60051',
      width:'33.33%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',


    },
    profilLabel:{
      opacity:0.5 ,
      color:'#FFFFFF ',
      fontFamily: 'Ocean',
      fontWeight: 900,
      fontSize:24,
      textAlign:'center',
      [theme.breakpoints.down(400)]: {
        width:'min-content'
      },
    },
    experience:{
      backgroundColor:'#4D6EC5',
      width:'33.33%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    experienceLabel:{
      opacity:1 ,
      color:'#FFFFFF',
      fontFamily: 'Ocean',
      fontWeight: 900,
      fontSize:24,
      textAlign:'center',
      [theme.breakpoints.down(400)]: {
        width:'min-content'
      },

    },
    demarches:{
      backgroundColor:'#DB8F00 ',
      width:'33.33%',
      display:'flex',
      alignItems:'center',
      justifyContent:'center',
    },
    demarcheLabel:{
      opacity:0.5,
      color:'#FFFFFF',
      fontWeight: 900,
      fontSize:24,
      textAlign:'center',
      fontFamily: 'Ocean',
      [theme.breakpoints.down(400)]: {
        width:'min-content'
      },

    },
    label:{
    maxWidth:'100% !important'

    },
    navigation:{
      width:'100%',
      position:'fixed',
      bottom:0,
      height:65,
      display:'flex'
    },
    detail:{
      right: '65px',
    position: 'absolute',
    bottom: '30px',
    color:'#4D6EC5',
    fontWeight:700,
    size:14,
    [theme.breakpoints.down(380)]: {
      right: '35px',

    },

    },
    competenceContainer:{
    flexDirection: 'row',
    padding: '40px 40px 40px 50px',
    },

    btnCompetence: {
      backgroundColor: '#D60051' ,
      height: 50,
      width: 331,
      padding: '0px 7px',
    },
    labelCompetence: {
      color: '#fff',
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
    },
    cardCompetence : {
      marginLeft: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
    },
    competenceFlex:{
      display:'flex',
    },
    carte:{
      display: 'flex',
    padding: '50px 0px',
    justifyContent: 'center',
    },
    proContainer:{
      
    },
    proDetails:{
      display:'block',
    },
    gridPro:{
        padding:30,
        paddingBottom:75,
        [theme.breakpoints.down(380)]: {
          padding:5,
          paddingBottom:75,
        },
    },
    expEng:{
        paddingBottom:70,
        justifyContent:'center',
    }
   

  }),
);
