import React, { useContext, useMemo } from 'react';
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

const DemarcheComponent = ({  history }: RouteComponentProps)  => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { parcours } = useContext(parcoursContext);
  const { data: secteurs } = useContext(SecteurContext);
  const [callJobs, stateJobs] = useJobs();


  const [expandedTop, setExpandedTop] = React.useState<boolean>(true);
  const [expandedFav, setExpandedFav] = React.useState<boolean>(true);
  const [expandedEnregistre, setExpandedEnregistre] = React.useState<boolean>(true);

  const handleChangeTop = () => {
    setExpandedTop(!expandedTop);
  };
  const handleChangeFav = () => {
    setExpandedFav(!expandedFav);
  };
  const handleChangeEnregistre = () => {
    setExpandedEnregistre(!expandedEnregistre);
  };

  const [value, setValue] = React.useState(0);


  useDidMount(() => {
    callJobs();
  });

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
  const onNavigate = () => {
    history.push('/profile/info');
  };
  const profileUrl = ()=>{
    history.push('/profile');


  }
  const expUrl = ()=>{
    history.push('/profile/experiencepro');


  }
  const demarcheUrl = ()=>{
    history.push('/profile/demarche');


  }
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

  
  
  return (
    <div className={classes.demarcheContainer}>
        <Title
          title="MES DÉMARCHES"
          color="#ffffff"
          size={32}
          className={classes.title} 
        />
      <div className={classes.accordionContainer}>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedTop}
        onChange={handleChangeTop}
        className={classes.headerAccordion}
        >
        <AccordionSummary
          expandIcon={
            <div >
              <ExpandMoreIcon className={classes.iconTop}/>
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.topAccordion}
        
          >
          <Typography className={classes.topText} > 
          <div className={classes.logoStar}> 
          <div>  <img src={star} alt="" height={30} className={classes.star} /> </div>
         <div>  MON TOP MÉTIERS  </div> 
         </div>
           </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.topJobs} >
              <div>
              {renderTopJobs}
              </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedFav}
        onChange={handleChangeFav}
        className={classes.accordionContainer}
        >
        <AccordionSummary
          expandIcon={
               <div>
              <ExpandMoreIcon className={classes.iconTop}/>
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.topAccordion}
      
          >
          <Typography className={classes.topText} >  
          
          <div className={classes.logoStar}> 
          <div>  <img src={littleheart} alt="" height={30} className={classes.star} /> </div>
         <div> MES MÉTIERS FAVORIS  </div> 
         </div>         
        </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.proDetails}>
        <div className={classes.proContainer}>
              
        {favoriteJobs.length? favoriteJobs.map((j) => (
            <div key={j.id} className={classes.favoriContainer}>
              <img src={littleheart} alt="" height={20} />
              <div className={classes.job}>{j.title}</div>
            </div>
          ))
        : null }
          </div>
        </AccordionDetails> 
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedEnregistre}
        onChange={handleChangeEnregistre}
        className={classes.accordionContainer}
        >
        <AccordionSummary
          expandIcon={
               <div>
              <ExpandMoreIcon className={classes.iconTop}/>
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.topAccordion}
      
          >
          <Typography className={classes.topText} > MES ENTREPRISES ENREGISTREES </Typography>
        </AccordionSummary>
        <AccordionDetails >
          <div className={classes.competenceContainer}> 
          <div>hello</div>
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
export default DemarcheComponent;
