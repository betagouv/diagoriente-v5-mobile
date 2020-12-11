import React, { useContext, useState, useEffect, useRef } from 'react';
import parcourContext from 'contexts/ParcourContext';
import Title from 'components/common/TitleImage/TitleImage';
import Avatar from 'components/common/Avatar/Avatar';
import ModalContainer from 'components/common/Modal/ModalContainer';
import GameContainer from 'containers/HomeContainer/components/Modals/KItchenGame/Game';
import IlluExpPerso from 'assets/images/illu_xp_perso.png';
import IlluExpPro from 'assets/images/illu_xp_pro.png';
import illExpEng from 'assets/images/illu_xp_engagement.png';
import Picto from 'assets/svg/picto_ampoule_blue.svg';
import { Link, useHistory } from 'react-router-dom';
import Game from '../Game/gameModal/GameModal';
import classNames from 'utils/classNames';
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

  return (
    <div className={classes.container}>
      <Title title="mes expériences" size={32} color="#223A7A" />
      <p className={classes.title}>
        Nous apprenons de toutes nos expériences.
        <br />
        Ajoute à ton profil tes expériences,
        <br />
        quel que soit le domaine.
      </p>
      <div className={classes.root}>
        <div className={classes.circleContainer}>
          <Avatar
            title="Ajouter une"
            link={
              <Link to="/experience/theme">
                <div className={classes.linkLabel}>expérience personnelle </div>
              </Link>
            }
            size={200}
            className={classes.avatarContainer}
            titleClassName={classNames(classes.marginTitle, classes.titleAlignLeft)}
            avatarCircleBackground="transparent"
            circleClassName={classes.circleStyle}
          >
            <img src={IlluExpPerso} alt="" className={classes.illus} />
          </Avatar>
        </div>
        <div className={classes.avatarWrapper}>
          <div className={classes.circleContainer}>
            <Avatar
              title="Ajouter une"
              link={
                <div className={classes.linkContainer}>
                  <Link to="/experience/theme-pro" className={classes.hideLine}>
                    <div className={classes.linkLabel}>
                      expérience
                      <br />
                      professionnelle
                    </div>
                  </Link>
                </div>
              }
              size={200}
              className={classes.reverseAvatarContainer}
              titleClassName={classNames(classes.marginTitle, classes.titleAlignRight)}
              avatarCircleBackground="transparent"
              circleClassName={classes.circleStyle}
            >
              <img src={IlluExpPro} alt="" className={classes.illus} />
            </Avatar>
          </div>
        </div>
        <div className={classes.circleContainer}>
          <Avatar
            title="Ajouter une"
            link={
              <div onClick={onClickEng} className={classes.hideLine}>
                <div className={classes.linkLabel}>expérience d’engagement</div>
              </div>
            }
            avatarCircleBackground="transparent"
            size={200}
            className={classes.avatarContainer}
            titleClassName={classNames(classes.marginTitle, classes.titleAlignLeft)}
            circleClassName={classes.circleStyleEng}
          >
            <img src={illExpEng} alt="ill" className={classes.illus} />
          </Avatar>
        </div>

        <div className={classes.boxInfo}>
          <div className={classes.boxInfoImgSubBox}>
            <div className={classes.boxInfoImg}>
              <img src={Picto} alt="" />
            </div>
            <div>
              <p className={classes.descriptionBoxInfo}>
                Familiarise toi avec les <br />
                compétences grâce aux modules :
              </p>
            </div>
          </div>
          <div className={classes.gameLinksContainer}>
            <div>
              <Link to="/experience/gameCard">
                <p className={classes.linkBoxInfo}>Rectec</p>
              </Link>
            </div>
            <div>
              <Link to="/experience/game">
                <p className={classes.linkBoxInfo}>Rectec Engagement</p>
              </Link>
            </div>
            <div>
              <Link to="/game">
                <p className={classes.linkBoxInfo}>Burger speed</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <ModalContainer open={open} handleClose={handleClose} backdropColor="#011A5E" colorIcon="#4D6EC5" size={70}>
        <GameContainer onHandelClose={handleClose} />
      </ModalContainer>
      <ModalContainer open={openEng} handleClose={handleEngClose} backdropColor="#011A5E" colorIcon="#4D6EC5" size={70}>
        <Game />
      </ModalContainer>
    </div>
  );
};

export default Experience;
