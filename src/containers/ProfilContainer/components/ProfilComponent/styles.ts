import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
    profilContainer: {
      flex: '1 0 auto',
      position: 'relative',
      width: '100%',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      // [theme.breakpoints.down(350)]: {
      //   overflowX:'hidden'
  
      // },
    },
    topMetier:{
      [theme.breakpoints.down(400)]: {
width:'fit-content',
wordBreak:'break-all'

      },
    },
    topJobs:{
      padding:'20px 0px',
      paddingLeft:60,
      [theme.breakpoints.down(420)]: {
        paddingLeft:10,

      },

  },
    logoStar:{
      display:'flex',
      alignItems:'center'
  },
  star:{
      paddingRight:20
  },
    topText : {
      fontSize: '26px',
      lineHeight: '26px',
      color: '#424242',
      marginLeft: '70px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      [theme.breakpoints.down(380)]: {
        marginLeft: 30,

      },

      '@media not all and (min-resolution:.001dpcm)': {
        fontSize: '22px',
        lineHeight: '26px',
        color: '#424242',
        marginLeft: '70px',
        fontFamily: 'Ocean',
        fontWeight: 900,
        [theme.breakpoints.down(380)]: {
          marginLeft: 10,
  
        },
      }

    },
    topAccordion : {
      height: '80px',
          borderRadius: '0px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
        backgroundColor: '#FFD382',
    
  
  
      },
    iconTop:{
      width:30,
      height:30,
      color:"#424242"
    },
    titleDemarche: {
      fontFamily: 'Ocean',
      fontWeight: 900,
      backgroundColor:'#DB8F00',
      // fontSize: '2.2em',
      // lineHeight: 1,
      // paddingBottom: 15,
    },
    demarcheContainer: {
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
    rootContainer:{
      width: '100%',
      margin: '0px !important',
      boxShadow: 'none !important',
    },
    cardGridContainer: {
      padding: '30px 70px 30px 70px',
      display:'contents',
      alignItems:'center',
      [theme.breakpoints.down(450)]: {
        padding: '10px 10px 30px 10px',
  
      },
      
    },
    profilDetail:{
      padding:'5px 30px 5px '
    },

    cardClassName: {
      paddingTop: 40,
    },
    titleExp: {
      fontFamily: 'Ocean',
      fontWeight: 900,
      backgroundColor:'#4D6EC5',
      // fontSize: '2.2em',
      // lineHeight: 1,
      // paddingBottom: 15,
    },
    titlePro: {
      fontFamily: 'Ocean',
      fontWeight: 900,
      backgroundColor:'#FF0060',
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
      whiteSpace: 'normal',
    },

    alignThemeTitle: {
      textAlign: 'left',
      listStyle: 'inside',
    },

    emptyDiv: {
      // height: 100,
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

    infoContainer: {
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
      [theme.breakpoints.down(400)]: {
        whiteSpace: 'normal',
        wordBreak:'break-word',

      },
    },
    favoriContainer: {
      display: 'flex',
      width: '100%',
      alignItems: 'center',
      marginTop: 8,
    },
    interestItem: {
      padding: 40,
      '&:focus': {
        outline: 'none',
        border: 'none',
      },
      [theme.breakpoints.down(450)]: {
        padding: '15px 0px',
  
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
    accordionContainer:{
      width:'100%',
      margin: '0px !important',
      boxShadow: 'none !important',
    },
    activeHeader: {
      backgroundColor: '#e1e7f7 !important',
    },
   
      
    infoAccordion : {
        height: '80px',
        borderRadius: '0px',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
      backgroundColor: 'rgba(243, 242, 244, 0.3)',

    },
    headingText : {
      fontSize: '26px',
      lineHeight: '26px',
      color: '#424242',
      marginLeft: '70px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      [theme.breakpoints.down(330)]: {
marginLeft:30 
      },
    },
    iconInfo:{
      width:30,
      height:30,
      color:"#424242",
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      marginRight:'0px !important'
    },
    MuiExpansionPanelDetailsRoot:{
      padding: '0px',
    },
    MuiIconButtonEdgeEnd255:{
marginRight:0
    },
    headerInteret:{
      backgroundColor: 'rgba(162, 117, 255, 0.3)',
      boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
      height: '80px',
      borderRadius: '0px',

    },
    TextInteret:{
      fontSize: '26px',
      lineHeight: '26px',
      marginLeft: '70px',
      fontFamily: 'Ocean',
      fontWeight: 900,
      color:'#420FAB',
      [theme.breakpoints.down(330)]: {
        marginLeft:30 
              },
      
    },
    iconInteret:{
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
      [theme.breakpoints.down(330)]: {
        marginLeft:30 
              },
    },
    iconCompetence:{
      width:30,
      height:30,
      color:"#D60051"
    },

    modifierProfile:{

    fontWeight:'bold',
    fontSize:14,
    color:'#6B6B6A',
    paddingLeft:' 314px',

    [theme.breakpoints.down(420)]: {
      paddingLeft:' 225px',

    },
    [theme.breakpoints.down(380)]: {
      paddingLeft:' 180px',

    },
    [theme.breakpoints.down(330)]: {
      paddingLeft:'22vh',

    },
    },
    competenceContainer:{
    flexDirection: 'row',
    padding: '20px 20px 20px 20px',
    [theme.breakpoints.down(450)]: {
      padding: '15px 5px 5px 5px',

    },
    },

    btnCompetence: {
      backgroundColor: '#D60051' ,
      height: 50,
      width: 331,
      padding: '0px 7px',
      [theme.breakpoints.down(330)]: {
        width:290,
     

      },
    },
    labelCompetence: {
      color: '#fff',
      textTransform: 'none',
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      '@media not all and (min-resolution:.001dpcm)': {
        color: '#fff',
        textTransform: 'none',
        fontWeight: 'bold',
        fontSize: 14,
        textAlign: 'center',
      }
    },
    cardCompetence : {
      marginLeft: '15px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down(450)]: {
        width:300,
        marginLeft: 50,

      },
      [theme.breakpoints.down(330)]: {
        marginLeft: 10,

      },
    },
    competenceFlex:{
      display:'flex',
      [theme.breakpoints.down(450)]: {
        flexDirection:'column'
      },
    },
    carte:{
      display: 'flex',
    padding: '50px 0px',
    justifyContent: 'center',
    },
    carouselContainer:{
      
    },
    carouselDetails:{
      display:'block',
    },
    imgCard:{
      [theme.breakpoints.down(450)]: {
        justifyContent:'center',
        display: 'flex',
      },
    },
    cardDetail:{
      [theme.breakpoints.down(380)]: {
        padding:'0px 0px '
      },
    },
    accordionCarte:{
      width:'100%',
      margin: '0px !important',
      boxShadow: 'none !important',
    },
  
    experienceContainer: {
      flex: '1 0 auto',
      position: 'relative',
      width: '100%',
      backgroundColor: '#F3F2F4',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      [theme.breakpoints.down(380)]: {
        overflowX:'hidden'
      },
    },
    iconPerso:{
      width:30,
      height:30,
      color:"#4D6EC5"
    },
    persoAccordion : {
      
      height: '80px',
        boxShadow: '2px 2px 4px rgba(0, 0, 0, 0.15)',
          borderRadius: '0px',
        backgroundColor: '#E1E7F7',
          [theme.breakpoints.down(330)]: {
            padding:'0 !important'
          },
        
  
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
        '@media not all and (min-resolution:.001dpcm)': {
          fontSize: '22px',
          lineHeight: '26px',
          color: '#4D6EC5',
          marginLeft: '70px',
          fontFamily: 'Ocean',
          fontWeight: 900,
          [theme.breakpoints.down(380)]: {
            marginLeft:10
          },
        }
      },
 
    detailEng:{ 
      color:'#4D6EC5',
    fontWeight:700,
    size:14,
    display:'flex',
    paddingTop:20,
    justifyContent:'flex-end',
    flex:'auto',
    alignItems:'flex-end',
    flexDirection:'column'
    

    },
    detailPro:{
    color:'#4D6EC5',
    fontWeight:700,
    size:14,
    display:'flex',
    paddingTop:35,
    justifyContent:'flex-end',
    flex:'auto',
    alignItems:'flex-end',
    flexDirection:'column'
 

    },
    detail:{
      color:'#4D6EC5',
      fontWeight:700,
      size:14,
      display:'flex',
      paddingTop:50,
      justifyContent:'flex-end',
      flex:'auto',
      alignItems:'flex-end',
      flexDirection:'column'
  
  
      },
      linkEng:{
  marginLeft:90,
  [theme.breakpoints.down(420)]: {
    marginLeft:30,
  },
  [theme.breakpoints.down(380)]: {
    marginLeft:12,
  },
  [theme.breakpoints.down(370)]: {
    marginLeft:6,
  },



      },
    detailColor:{
      color:'#4D6EC5'
    },
  
    proDetails:{
      display:'block',
    },
    metier:{
      paddingLeft:130,
      [theme.breakpoints.down(400)]: {
        paddingLeft:106
      },
      [theme.breakpoints.down(380)]: {
        paddingLeft:90
      },
      [theme.breakpoints.down(330)]: {
        paddingLeft:70
      },

AccordionSummary:{
  '& .MuiAccordionSummary-root-676':{
    [theme.breakpoints.down(330)]: {
      padding:'0 important'
    },
  },
}
    },

  }),
);
