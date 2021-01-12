import { createStyles, makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) =>
  createStyles({
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
    textTransform:'uppercase',
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
    opacity:0.5 ,
    color:'#FFFFFF',
    textTransform:'uppercase',
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
    textTransform:'uppercase',
    textAlign:'center',
    fontFamily: 'Ocean',
    [theme.breakpoints.down(400)]: {
      width:'min-content'
    },

  },
  label:{
  maxWidth:'100% '

  },
  navigation:{
    width:'100%',
    position:'fixed',
    bottom:0,
    height:65,
    display:'flex',

  },
  infoActive:{
      opacity:1,
    color:'#FFFFFF ',
    fontFamily: 'Ocean',
    fontWeight: 900,
    fontSize:24,
    textTransform:'uppercase',
    textAlign:'center',
    [theme.breakpoints.down(400)]: {
      width:'min-content'
    },
  },
  hi:{}
}),
)