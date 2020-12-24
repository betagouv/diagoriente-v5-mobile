import React, { useContext, useState ,useMemo } from 'react';
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

const ExperienceProComponent = ({  history }: RouteComponentProps)  => {
  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { parcours } = useContext(parcoursContext);
  const { data: secteurs } = useContext(SecteurContext);
  const [callJobs, stateJobs] = useJobs();

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  const [expandedPerso, setExpandedPerso] = React.useState<boolean>(true);
  const [expandedPro, setExpandedPro] = React.useState<boolean>(true);
  const [expandedEngagement, setExpandedEngagement] = React.useState<boolean>(true);

  const handleChangePerso = () => {
    setExpandedPerso(!expandedPerso);
  };
  const handleChangePro = () => {
    setExpandedPro(!expandedPro);
  };
  const handleChangeEngagement = () => {
    setExpandedEngagement(!expandedEngagement);
  };

  const [value, setValue] = React.useState(2);


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
  const profileUrl = ()=>{
    history.push('/profile');
  }
  const expUrl = ()=>{
    history.push('/profile/experiencepro');

  }
  const demarcheUrl = ()=>{
    history.push('/profile/demarche');

  }
  // const { type, redirect } = decodeUri(location.search);

  const favoriteJobs = stateJobs.data?.myJobs.filter((job) => job.favorite && job.favorite.interested) || [];
  const cardUrl=()=>{
  history.push('/profile/card');

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

 
  return (
    <div className={classes.experienceContainer}>
        <Title
          title="MES EXPÉRIENCES"
          color="#ffffff"
          size={32}
          className={classes.title} 
        />
      <div className={classes.accordionContainer}>
      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedPerso}
        onChange={handleChangePerso}
        className={classes.headerAccordion}
        >
        <AccordionSummary
          expandIcon={
            <div >
              <ExpandMoreIcon className={classes.iconPerso}/>
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.persoAccordion}
          // className={classNames( classes.headerAccordion,
          //   expandedInfo && activeHeader,
          // )}
          >
          <Typography className={classes.persoText} >MES EXPÉRIENCES PERSONNELLES</Typography>
        </AccordionSummary>
        <AccordionDetails >
        <div className={classes.cardGridContainer}>
       { persoSkills.length ? (
         <Grid container className={classes.gridPro} spacing={1}>
          {persoSkills.map((theme) => (
            <Grid item xs={4} key={theme.id} className={classes.itemContainer}>
              <div className={classes.themeSelection}>
                <Circle avatarCircleBackground="transparent" size={100}>
                  {theme.theme.resources && theme.theme.resources.icon && (
                    <img className={classes.themeImage} src={theme.theme.resources.icon} alt="theme" />
                  )}
                </Circle>
                <div className={classes.themeTile}>{theme.theme.title.replace(new RegExp('[//,]', 'g'), '\n')}</div>
              </div>
            </Grid>
          ))}
                  <div className={classes.detail}>
                  <Link to="/profile/experience">
                  <span > Voir le détail </span>
                  </Link>
                  </div>
        </Grid>

      ) : (
        <Link to="/experience/theme">
          <Button className={classes.btn}>
            <span className={classes.textButton}>J’ajoute une expérience personnelle</span>
          </Button>
        </Link>
      )}

              </div>
        </AccordionDetails>
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedPro}
        onChange={handleChangePro}
        className={classes.accordionContainer}
        >
        <AccordionSummary
          expandIcon={
               <div>
              <ExpandMoreIcon className={classes.iconPerso}/>
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.persoAccordion}
          // className={classNames( classes.headerAccordion,
          //   expandedInfo && activeHeader,
          // )}
          >
          <Typography className={classes.persoText} >MES EXPÉRIENCES PROFESSIONNELLES </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.proDetails}>
        <div className={classes.proContainer}>
              
       { proSkills.length ? (
       <Grid container className={classes.gridPro} spacing={1}>
        {proSkills.map((theme) => {
            const icon = secteurs?.themes.data.find((secteur) => theme.theme.parentId === secteur.id)?.resources?.icon;
            return (
              <Grid item xs={4} key={theme.id} className={classes.itemContainer}>
                <div className={classes.themeSelection}>
                  <Circle avatarCircleBackground="transparent" size={100}>
                    {icon && <img className={classes.themeImage} src={icon} alt="theme" />}
                  </Circle>
                  <div className={classes.themeTile}>{theme.theme.title.replace(new RegExp('[//,]', 'g'), '\n')}</div>
                </div>
              </Grid>
            );
          })}
                  <div className={classes.detail}>
                  <Link to="/profile/experience?type=professional">
                  <span  > Voir le détail </span>
                  </Link>
                  </div>
        </Grid>)  : (
        <Link to="/experience/theme-pro">
          <Button className={classes.btn}>
            <span className={classes.textButton}>J’ajoute une expérience professionnelle</span>
          </Button>
        </Link>
      )}
          </div>
        </AccordionDetails> 
      </Accordion>

      <Accordion
        TransitionProps={{ unmountOnExit: true }}
        expanded={expandedEngagement}
        onChange={handleChangeEngagement}
        className={classes.accordionContainer}
        >
        <AccordionSummary
          expandIcon={
               <div>
              <ExpandMoreIcon className={classes.iconPerso}/>
            </div>
          }
          aria-controls="panel1bh-content"
          id="panel1bh-header"
          className={classes.persoAccordion}
          // className={classNames( classes.headerAccordion,
          //   expandedInfo && activeHeader,
          // )}
          >
          <Typography className={classes.persoText} > MES EXPÉRIENCES D’ENGAGEMENT </Typography>
        </AccordionSummary>
        <AccordionDetails className={classes.expEng}>
          <div className={classes.competenceContainer}> 
          {engagementSkills.length ? (
       <Grid container spacing={1} className={classes.gridPro} >
          {engagementSkills.map((theme) => (
            <Grid item xs={4} sm={4} key={theme.id} className={classes.itemContainer}>
              <div className={classes.themeSelection}>
                <Circle avatarCircleBackground="transparent" size={100}>
                  {theme.theme.resources && theme.theme.resources.icon && (
                    <img className={classes.themeImage} src={theme.theme.resources.icon} alt="theme" />
                  )}
                </Circle>
                <div className={classes.themeTile}>{theme.theme.title.replace(new RegExp('[//,]', 'g'), '\n')}</div>
              </div>
            </Grid>
            
          ))}
     <div className={classes.detail}>
     <Link to="/profile/experience?type=engagement">
     <span > Voir le détail </span>
     </Link>
      </div>
        </Grid>
      ) : (
        <Link to="/experience/theme?type=engagement">
          <Button className={classes.btn}>
            <span className={classes.textButton}>J’ajoute une expérience d&apos;engagement</span>
          </Button>
        </Link>
      )}

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
export default ExperienceProComponent;
