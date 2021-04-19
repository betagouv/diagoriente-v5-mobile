import React, { useContext, useEffect, useState, useMemo, useRef } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Title from 'components/common/TitleImage/TitleImage';
import { useJobs } from 'common/requests/jobs';
import { useDidMount } from 'common/hooks/useLifeCycle';
import { Families, Jobs } from 'common/requests/types';
import Button from 'components/button/Button';
import arrow from 'assets/svg/arrw.svg';
import { Accordion, AccordionDetails, AccordionSummary } from '@material-ui/core';

import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Carousel from 'nuka-carousel';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import classNames from 'utils/classNames';
import FooterInfo from 'containers/ProfilContainer/components/FooterInfo/FooterInfo';
import UserContext from 'common/contexts/UserContext';
import parcoursContext from 'common/contexts/ParcourContext';

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
import littleheart2 from 'assets/svg/littleHeart2.svg';
import fullHeart from 'assets/svg/fullHeart.svg';

import { decodeUri, encodeUri } from 'utils/url';

import SecteurContext from 'common/contexts/SecteurContext';
import useStyles from './styles';

const ProfilComponent = ({ history }: RouteComponentProps) => {
  const SelectTitles = ['mon profil', 'mes expériences', 'mes démarches'];
  const rowRef = useRef([] as (HTMLDivElement | null)[]);

  const classes = useStyles();
  const { user } = useContext(UserContext);
  const { parcours } = useContext(parcoursContext);
  const { data: secteurs } = useContext(SecteurContext);
  const [callJobs, stateJobs] = useJobs({ fetchPolicy: 'network-only' });

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

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
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

  const onNavigate = () => {
    history.push('/profile/info');
  };
  const onNav = () => {
    history.push('/profile/card');
  };
  const renderTopJobs = useMemo(() => {
    if (topJobs.length) {
      return topJobs.map((j) => (
        <div key={j?.id} className={classes.favoriContainer}>
          <img src={littlestar} alt="" height={20} />
          <div className={classes.job}>{j?.title} </div>
        </div>
      ));
    }
    if (stateJobs.loading) return <Spinner />;
    return <div className={classes.metier}>Aucun metier à afficher</div>;
    // eslint-disable-next-line
  }, [stateJobs.loading, stateJobs.data]);

  const renderFavJobs = useMemo(() => {
    if (favoriteJobs.length) {
      return favoriteJobs.map((j) => (
        <div key={j?.id} className={classes.favoriContainer}>
          <img src={littleheart} alt="" height={20} />
          <div className={classes.job}>{j?.title} </div>
        </div>
      ));
    }
    if (stateJobs.loading) return <Spinner />;
    return <div className={classes.metier} />;
    // eslint-disable-next-line
  }, [stateJobs.loading, stateJobs.data]);

  return (
    <div>
      <div className={classes.profilContainer} ref={(ref) => (rowRef.current[0] = ref)}>
        <Title title="MON PROFIL" color="#ffffff" size={32} className={classes.titlePro} />
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
              // aria-controls="panel1bh-content"
              // id="panel1bh-header"
              className={classes.infoAccordion}
            >
              <Typography className={classes.headingText}>MES INFOS PERSONNELLES</Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.profilDetail}>
              <div className={classes.cardGridContainer}>
                <div>
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
                    <p onClick={onNavigate}> Modifier </p>
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
              <Typography className={classes.TextInteret}> MES CENTRES D’INTÉRÊT </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.carouselDetails}>
              <div className={classes.carouselContainer}>
                <Grid container className={classes.interestItem}>
                  {parcours?.families.map((family) => (
                    <Grid item key={family.id} xs={6} className={classes.themeSelection}>
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
              <Typography className={classes.TextCompetence}> MA CARTE DE COMPÉTENCES </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.cardDetail}>
              <div className={classes.competenceContainer}>
                <div className={classes.competenceFlex}>
                  <div className={classes.imgCard}>
                    <img src={carte} alt="" height={90} />
                  </div>
                  <div className={classes.cardCompetence}>
                    <div className={classes.txtCarte}>
                      Toutes tes expériences et compétences <br />
                      au même endroit pour partager à tes futurs employeurs
                    </div>
                  </div>
                </div>
                <div className={classes.carte}>
                  <Button className={classes.btnCompetence} onClick={onNav}>
                    <div className={classes.labelCompetence}> Voir ma carte de compétences </div>
                  </Button>
                </div>
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={classes.experienceContainer} ref={(ref) => (rowRef.current[1] = ref)}>
        <Title title="MES EXPÉRIENCES" color="#ffffff" size={32} className={classes.titleExp} />
        <div className={classes.accordionContainer}>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            expanded={expandedPerso}
            onChange={handleChangePerso}
            className={classes.headerAccordion}
          >
            <AccordionSummary
              expandIcon={
                <div>
                  <ExpandMoreIcon className={classes.iconPerso} />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.persoAccordion}
            >
              <Typography className={classes.persoText}>MES EXPÉRIENCES PERSONNELLES</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.cardGridContainer}>
                {persoSkills.length ? (
                  <Grid container spacing={1}>
                    {persoSkills.map((theme) => (
                      <Grid item xs={4} key={theme.id} className={classes.itemContainer}>
                        <div className={classes.themeSelection}>
                          <Circle avatarCircleBackground="transparent" size={100}>
                            {theme.theme.resources && theme.theme.resources.icon && (
                              <img className={classes.themeImage} src={theme.theme.resources.icon} alt="theme" />
                            )}
                          </Circle>
                          <div className={classes.themeTile}>
                            {theme.theme.title.replace(new RegExp('[//,]', 'g'), '\n')}
                          </div>
                        </div>
                      </Grid>
                    ))}
                    <div className={classes.detail}>
                      <Link to="/profile/experience">
                        <span className={classes.detailColor}> Voir le détail </span>
                      </Link>
                    </div>
                  </Grid>
                ) : (
                  <Link to="/experience/theme" className={classes.linkEng}>
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
                  <ExpandMoreIcon className={classes.iconPerso} />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.persoAccordion}
            >
              <Typography className={classes.persoText}>MES EXPÉRIENCES PROFESSIONNELLES </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.proDetails}>
              <div className={classes.cardGridContainer}>
                {proSkills.length ? (
                  <Grid container spacing={1}>
                    {proSkills.map((theme) => {
                      const icon = secteurs?.themes.data.find((secteur) => theme.theme.parentId === secteur.id)
                        ?.resources?.icon;
                      return (
                        <Grid item xs={4} key={theme.id} className={classes.itemContainer}>
                          <div className={classes.themeSelection}>
                            <Circle avatarCircleBackground="transparent" size={100}>
                              {icon && <img className={classes.themeImage} src={icon} alt="theme" />}
                            </Circle>
                            <div className={classes.themeTile}>
                              {theme.theme.title.replace(new RegExp('[//,]', 'g'), '\n')}
                            </div>
                          </div>
                        </Grid>
                      );
                    })}
                    <div className={classes.detailPro}>
                      <Link to="/profile/experience?type=professional">
                        <span className={classes.detailColor}> Voir le détail </span>
                      </Link>
                    </div>
                  </Grid>
                ) : (
                  <Link to="/experience/theme-pro" className={classes.linkEng}>
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
                  <ExpandMoreIcon className={classes.iconPerso} />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.persoAccordion}
            >
              <Typography className={classes.persoText}> MES EXPÉRIENCES D’ENGAGEMENT </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.cardGridContainer}>
                {engagementSkills.length ? (
                  <Grid container spacing={1}>
                    {engagementSkills.map((theme) => (
                      <Grid item xs={4} key={theme.id} className={classes.itemContainer}>
                        <div className={classes.themeSelection}>
                          <Circle avatarCircleBackground="transparent" size={100}>
                            {theme.theme.resources && theme.theme.resources.icon && (
                              <img className={classes.themeImage} src={theme.theme.resources.icon} alt="theme" />
                            )}
                          </Circle>
                          <div className={classes.themeTile}>
                            {theme.theme.title.replace(new RegExp('[//,]', 'g'), '\n')}
                          </div>
                        </div>
                      </Grid>
                    ))}
                    <div className={classes.detailEng}>
                      <Link to="/profile/experience?type=engagement">
                        <span className={classes.detailColor}> Voir le détail </span>
                      </Link>
                    </div>
                  </Grid>
                ) : (
                  <Link to="/experience/theme?type=engagement" className={classes.linkEng}>
                    <Button className={classes.btn}>
                      <span className={classes.textButton}>J’ajoute une expérience d&apos;engagement</span>
                    </Button>
                  </Link>
                )}
              </div>
            </AccordionDetails>
          </Accordion>
        </div>
      </div>
      <div className={classes.demarcheContainer} ref={(ref) => (rowRef.current[2] = ref)}>
        <Title title="MES DÉMARCHES" color="#ffffff" size={32} className={classes.titleDemarche} />
        <div className={classes.accordionContainer}>
          <Accordion
            TransitionProps={{ unmountOnExit: true }}
            expanded={expandedTop}
            onChange={handleChangeTop}
            className={classes.headerAccordion}
          >
            <AccordionSummary
              expandIcon={
                <div>
                  <ExpandMoreIcon className={classes.iconTop} />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.topAccordion}
            >
              <Typography className={classes.topText}>
                <div className={classes.logoStar}>
                  <div>
                    <img src={star} alt="" height={30} className={classes.star} />{' '}
                  </div>
                  <div> MON TOP MÉTIERS </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.topJobs}>
              <div className={classes.topMetier}>{renderTopJobs}</div>
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
                  <ExpandMoreIcon className={classes.iconTop} />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.topAccordion}
            >
              <Typography className={classes.topText}>
                <div className={classes.logoStar}>
                  <div className={classes.containerHeart}>
                    <img src={fullHeart} alt="" height={20} className={classes.starHeart} />{' '}
                  </div>
                  <div> MES MÉTIERS FAVORIS </div>
                </div>
              </Typography>
            </AccordionSummary>
            <AccordionDetails className={classes.proDetails}>
              <div>{renderFavJobs}</div>
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
                  <ExpandMoreIcon className={classes.iconTop} />
                </div>
              }
              aria-controls="panel1bh-content"
              id="panel1bh-header"
              className={classes.topAccordion}
            >
              <Typography className={classes.topText}> MES ENTREPRISES ENREGISTREES </Typography>
            </AccordionSummary>
            <AccordionDetails>
              <div className={classes.competenceContainer} />
            </AccordionDetails>
          </Accordion>
          <FooterInfo options={SelectTitles} refs={rowRef} />
        </div>
      </div>
    </div>
  );
};
export default ProfilComponent;
