import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainIcon from 'assets/svg/mainIcon.svg';
import teteIcon from 'assets/svg/teteIcon.svg';
import personneIcon from 'assets/svg/personneIcon.svg';
import ValideButton from 'components/valideButton/valideButton';

import TitleImage from 'components/common/TitleImage/TitleImage';
import Button from 'components/button/Button';
import useStyle from './styles';

const MainInteret = () => {
  const classes = useStyle();

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);
  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
  });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TitleImage
          title="COMMENT ÇA MARCHE ?"
          color="#420FAB"
          size={width > 380 ? 32 : 25}
          backgroudColor="#fff"
          className={classes.tContainer}
        />

        <div className={classes.TitlePosition}>
          <div className={classes.textFooter}>Les centres d’intérêts sont classés en 3 catégories.</div>
          <div className={classes.textFooter}>
            {' '}
            <b> Choisis-en 3 minimum et 5 maximum : </b>
          </div>
        </div>

        <div className={classes.linksContainer}>
          <div className={classes.saTete}>
            <div className={classes.avatarContainer}>
              <img src={teteIcon} alt="" width="90px" height="90px" />
            </div>{' '}
            <div> Travailler avec sa tête </div>
          </div>
          <div className={classes.saTete}>
            <div className={classes.avatarContainer}>
              <img src={mainIcon} alt="" width="90px" height="90px" />
            </div>{' '}
            <div> Travailler avec ses mains</div>
          </div>
          <div className={classes.saTete}>
            <div className={classes.avatarContainer}>
              <img src={personneIcon} alt="" width="90px" height="90px" />
            </div>

            {width < 370 ? (
              <div>Travailler avec <br/> d’autres personnes</div>
            ) : (
              <div>Travailler avec d’autres personnes</div>
            )}
          </div>
        </div>
        <ValideButton
          title="J’ai compris !"
          linkContainer={{
            pathname: `/interet/parcours/${0}`,
          }}
          className={classes.validContainer}        />
      </div>
    </div>
  );
};

export default MainInteret;
