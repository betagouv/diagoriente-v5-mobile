import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import mainInterest from 'assets/svg/mainInterest.svg';
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

  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <TitleImage title="MES CENTRES D’INTÉRÊT" color="#420FAB" size={width > 380 ? 32 : 25} />

        <div className={classes.TitlePosition}>
          <div className={classes.titleContainer}>COMMENT ÇA MARCHE ?</div>

          <div className={classes.textFooter}>Les centres d’intérêts sont classés en 3 catégories. </div>
          <div className={classes.textFooter}>Sélectionne en 3 minimum et 5 maximum parmi les 3 familles.</div>
        </div>

        <div className={classes.linksContainer}>
          <Link
            to={{
              pathname: `/interet/parcours/${2}`,
            }}
          >
            <div className={classes.btnContainer}>
              <TitleImage
                title="TRAVAILLER AVEC SA TÊTE"
                color="#FFFFFF"
                backgroudColor="#A275FF"
                size={width > 380 ? 32 : 25}
              />
            </div>
          </Link>

          <Link
            to={{
              pathname: `/interet/parcours/${1}`,
            }}
          >
            <div className={classes.btnContainer}>
              <TitleImage
                title="TRAVAILLER AVEC SES MAINS"
                color="#FFFFFF"
                backgroudColor="#A275FF"
                size={width > 380 ? 32 : 25}
              />
            </div>
          </Link>

          <Link
            to={{
              pathname: `/interet/parcours/${0}`,
            }}
          >
            <div className={classes.btnContainer}>
              <TitleImage
                title="TRAVAILLER AVEC D’AUTRES PERSONNES"
                color="#FFFFFF"
                backgroudColor="#A275FF"
                size={width > 380 ? 32 : 25}
              />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainInteret;
