import React, { useState, useEffect } from 'react';
import Trait from 'assets/images/trait_violet.png';
import TitleImage from 'components/common/TitleImage/TitleImage';
import InterestLogo from 'assets/svg/interetHome.svg';
import GifIntro from 'assets/gif/intro_interets.gif';
import Button from 'components/button/Button';
import { Link } from 'react-router-dom';

import useStyles from './styles';

const HomeInteret = () => {
  const classes = useStyles();
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TitleImage title="MES CENTRES D’INTÉRÊT" color="#420FAB" size={width > 380 ? 32 : 25} />

        <div className={classes.subTitleContainer}>
          <div className={classes.subTitle}>
            <div className={classes.line1}>Nous allons te présenter différents centres d&lsquo;intérêts.</div>
            <br />
            <div className={classes.line1}>
              <b>À toi de choisir ceux qui te plairaient le plus</b>
              {'  '}
              en contexte professionnel
            </div>
          </div>
        </div>
        <div className={classes.avatarContainer}>
          <img src={GifIntro} alt="" width="223px" height="223px" />
          <div className={classes.btnContainer}>
            <Link to="/interet/main">
              <Button className={classes.btn} type="submit">
                <div className={classes.btnLabel}>C’est parti !</div>
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeInteret;
