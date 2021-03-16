import React, { useContext, useState, useEffect, useRef } from 'react';
import parcourContext from 'contexts/ParcourContext';
import Title from 'components/common/TitleImage/TitleImage';
import Avatar from 'components/common/Avatar/Avatar';
import IlluExpPerso from 'assets/images/illu_xp_perso.png';
import IlluExpPro from 'assets/images/illu_xp_pro.png';
import illExpEng from 'assets/images/illu_xp_engagement.png';
import { Link, useHistory } from 'react-router-dom';
import useStyles from './styles';

const Experience = () => {
  const classes = useStyles();
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const [openEng, setOpenEng] = useState(false);
  const openModal = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const openModalEng = () => setOpenEng(true);
  const handleEngClose = () => setOpenEng(false);
  const { parcours } = useContext(parcourContext);

  // eslint-disable-next-line react-hooks/exhaustive-deps

  useEffect(() => {
    if (!parcours?.played) openModal();
  }, [parcours]);

  const onClickEng = () => {
    const p = '/experience/theme?type=engagement';
    if (!parcours?.playedEng) {
      openModalEng();
    } else {
      history.push(p);
    }
  };

  const onClickLink = (link: string) => {
    history.push(link);
  };

  return (
    <div className={classes.container}>
      <Title title="mes expériences" size={32} color="#FFFFFF" />
      <div className={classes.root}>
        <Link to="/experience/theme" className={classes.circleContainer}>
          <Avatar
            title="Ajouter une expérience"
            boldTitle=" perso"
            size={200}
            className={classes.avatarContainer}
            titleClassName={classes.avatarTitle}
            avatarCircleBackground="transparent"
            circleClassName={classes.circleStyle}
          >
            <img src={IlluExpPerso} alt="" className={classes.illus} onClick={() => onClickLink('/experience/theme')} />
          </Avatar>
        </Link>
        <Link to="/experience/theme-pro" className={classes.circleContainer}>
          <Avatar
            title="Ajouter une experience"
            boldTitle=" professionnelle"
            size={200}
            className={classes.avatarContainer}
            titleClassName={classes.avatarTitle}
            avatarCircleBackground="transparent"
            circleClassName={classes.circleStyle}
          >
            <img
              src={IlluExpPro}
              alt=""
              className={classes.illus}
              onClick={() => onClickLink('/experience/theme-pro')}
            />
          </Avatar>
        </Link>
        <Link to="/experience/theme?type=engagement" className={classes.circleContainer}>
          <Avatar
            title="Ajouter une experience"
            boldTitle=" d’engagement"
            avatarCircleBackground="transparent"
            size={200}
            className={classes.avatarContainer}
            titleClassName={classes.avatarTitle}
            circleClassName={classes.circleStyleEng}
          >
            <img src={illExpEng} alt="ill" className={classes.illus} onClick={onClickEng} />
          </Avatar>
        </Link>
        <Link to="/experience/theme?type=engagement" className={classes.circleContainer}>
          <Avatar
            title="Ajouter une experience"
            boldTitle=" sportive"
            avatarCircleBackground="transparent"
            size={200}
            className={classes.avatarContainer}
            titleClassName={classes.avatarTitle}
            circleClassName={classes.circleStyleEng}
          >
            <img src={illExpEng} alt="ill" className={classes.illus} onClick={onClickEng} />
          </Avatar>
        </Link>
      </div>
    </div>
  );
};

export default Experience;
