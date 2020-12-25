import React, { useContext, useEffect,useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import Title from 'components/common/TitleImage/TitleImage';
import { useJobs } from 'requests/jobs';
import { useDidMount } from 'hooks/useLifeCycle';
import { Families, Jobs } from 'requests/types';
import Button from 'components/button/Button';
import arrow from 'assets/svg/arrw.svg';
import { Accordion } from '@material-ui/core';
import { AccordionDetails } from '@material-ui/core';
import { AccordionSummary } from '@material-ui/core';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'nuka-carousel';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import classNames from 'utils/classNames';

import UserContext from 'contexts/UserContext';
import parcoursContext from 'contexts/ParcourContext';

import Spinner from 'components/Spinner/Spinner';
// import Title from 'components/common/Title/Title';
import Card from 'components/common/Card/Card';
import Avatar from '@material-ui/core/Avatar';
import Circle from 'components/common/Avatar/Avatar';
import Arrow from 'assets/svg/arrow';

import defaultAvatar from 'assets/svg/defaultAvatar.svg';
import star from 'assets/svg/star.svg';
import littlestar from 'assets/svg/littlestar.svg';

import carte from 'assets/svg/carte.svg';
import location from 'assets/svg/localisation.svg';
import heart from 'assets/svg/heart.svg';
import littleheart from 'assets/svg/littleheart.svg';
import { RouteComponentProps } from 'react-router-dom';
import { decodeUri, encodeUri } from 'utils/url';

import SecteurContext from 'contexts/SecteurContext';
import useStyles from './styles';

const ProfilComponent = ({  history }: RouteComponentProps)  => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { parcours } = useContext(parcoursContext);
  const { data: secteurs } = useContext(SecteurContext);
  const [callJobs, stateJobs] = useJobs();

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);

  const [expandedInfo, setExpandedInfo] = React.useState<boolean>(true);
  const [expandedInteret, setExpandedInteret] = React.useState<boolean>(true);
  const [expandedCompetence, setExpandedCompetence] = React.useState<boolean>(true);

  const handleChangeInfo = () => {
    setExpandedInfo(!expandedInfo);
  };
  const handleChangeInteret = () => {
    setExpandedInteret(!expandedInteret);
  };
  const handleChangeCompetence = () => {
    setExpandedCompetence(!expandedCompetence);
  };

  const [value, setValue] = React.useState(0);



  useDidMount(() => {
    callJobs();
  });

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  })

  const persoSkills = parcours?.skills.filter((p) => p.theme?.type === 'personal') || [];
  const engagementSkills = parcours?.skills.filter((p) => p.theme?.type === 'engagement') || [];

  const proSkills = parcours?.skills.filter((p) => p.theme?.type === 'professional') || [];

  const topJobs: Jobs[] = [];
  if (stateJobs.data && stateJobs.data.myJobs.length) {
    const showNumber = stateJobs.data.myJobs.length > 5 ? 5 : stateJobs.data.myJobs.length;
    for (let i = 0; i <= showNumber; i += 1) {
      topJobs.push(stateJobs.data.myJobs[i]);
    }
  }
  // const { type, redirect } = decodeUri(location.search);

  const favoriteJobs = stateJobs.data?.myJobs.filter((job) => job.favorite && job.favorite.interested) || [];
  const cardUrl=()=>{ 
  history.push('/profile/card');

  }
  const profileUrl = ()=>{
    history.push('/profile');

  }
  const expUrl = ()=>{

    history.push('/profile/experiencepro');

  }
  const demarcheUrl = ()=>{
    history.push('/profile/demarche');

  }
  const onNavigate = () => {
    history.push('/profile/info');
  };
  const renderTopJobs = useMemo(() => {
    if (topJobs.length) {
      return topJobs.map((j) => (
        <div key={j?.id} className={classes.favoriContainer}>
          <img src={littlestar} alt="" height={20} />
          <div className={classes.job}>{j?.title}</div>
        </div>
      ));
    }
    if (stateJobs.loading) return <Spinner />;
    return <div>Aucun metier à afficher</div>;
    // eslint-disable-next-line
  }, [stateJobs.loading, stateJobs.data]);


  //     title: 'MES CENTRES D’INTÉRÊT',
  //     background: '#420FAB',
  //     color: '#fff',
  //     path: '/profile/interest',
  
  return (
    <div className={classes.profilContainer}>
        <Title
          title="MON PROFILE"
          color="#ffffff"
          size={32}
          className={classes.title} 
        />
      <div className={classes.rootContainer}>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedInfo}
        onChange={handleChangeInfo}
        className={classes.headerAccordion}
        >
        <AccordionSummary
          expandIcon={
            <div className={classes.iconInfo}>
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.infoAccordion}
     
          >
          <Typography   className={classes.headingText} >MES INFOS PERSONNELLES</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <div className={classes.cardGridContainer}>

            <div >
            
       <Avatar className={classes.logo} src={user?.logo ? user?.logo : defaultAvatar} />
       </div>

     <div className={classes.infoContainer}>
        <span className={classes.userName}>{`${user?.profile.firstName} ${user?.profile.lastName}`}</span>
       <div className={classes.locationContainer}>
         <img src={location} alt="" height={19} />
         <span className={classes.location}>{user?.location}</span>
               </div>
  <span>{user?.email}</span>
  <div className={classes.modifierProfile}>
  <span onClick={onNavigate} > Modifier </span>
      </div>
  </div>
 
              </div>
        </AccordionDetails>
        
      
      </Accordion>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedInteret}
        onChange={handleChangeInteret}
        className={classes.accordionContainer}
        >
        <AccordionSummary
          expandIcon={
               <div className={classes.iconInteret}>
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.headerInteret}
     
          >
          <Typography className={classes.TextInteret} > MES CENTRES D’INTÉRÊT </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.carouselDetails}>
        <div className={classes.carouselContainer}>
              

              <Grid   container className={classes.interestItem} >
                 {parcours?.families.map((family) => (
                   <Grid item key={family.id} xs={6}  className={classes.themeSelection}>
                     <div className={classes.imageContainer}>
                       <img src={family.resources[2]} alt="" />
                    </div>

                    <p className={classes.themeTile}>{family.nom.replace(new RegExp('[//,]', 'g'), '\n')}</p>
                  </Grid>
               ))}
              </Grid>
            
  
        
          </div>
        </AccordionDetails> 
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedCompetence}
        onChange={handleChangeCompetence}
        className={classes.accordionCarte}
        >
        <AccordionSummary
          expandIcon={
               <div className={classes.iconCompetence}>
              <ExpandMoreIcon />
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.headerCompetence}
       
          >
          <Typography className={classes.TextCompetence} > MA CARTE DE COMPÉTENCES </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.cardDetail} >
          <div className={classes.competenceContainer}> 
          <div className={classes.competenceFlex}>
          <div className={classes.imgCard}>
          
       <img src={carte} alt="" height={90} />
       </div>
       <div className={classes.cardCompetence}>
        <div className={classes.txtCarte}>
         Toutes tes expériences et compétences <br/>
          au même endroit pour partager à tes futurs employeurs
       </div> 
     
     
      </div>
      </div>
      <div className={classes.carte}> 
       <Button className={classes.btnCompetence}>
       <div className={classes.labelCompetence} onClick={cardUrl}> Voir ma carte de compétences </div>
        </Button>
       </div>
          </div>
        
        </AccordionDetails>
        
      
      </Accordion>
      <div className={classes.navigation}> 
      <div className={classes.profil} > <span className={classes.profilLabel} onClick={profileUrl} > Mon Profil </span></div>
      <div className={classes.experience}> <span className={classes.experienceLabel} onClick={expUrl}  > Mes expériences </span></div>
      <div className={classes.demarches}> <span className={classes.demarcheLabel} onClick={demarcheUrl}  > Mes démarches </span></div>

    </div>
      </div>
        
    </div>
  );
};
export default ProfilComponent;
