import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { Families } from 'requests/types';
import Arrow from 'assets/svg/arrow';
import classNames from 'utils/classNames';
import checked from 'assets/form/checkboxchecked.svg';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import TitleImage from 'components/common/TitleImage/TitleImage';
import Divider from '@material-ui/core/Divider';
import teLink from 'assets/svg/teLink.svg';
import teteLink from 'assets/svg/tLink.svg';
import { Link , RouteComponentProps } from 'react-router-dom';
import Button from 'components/button/Button';

import personnesLink from 'assets/svg/personnesLink.svg';
import perLink from 'assets/svg/perLink.svg';

import mainLink from 'assets/svg/mLink.svg';
import mLink from 'assets/svg/mainLink.svg';

import useStyles from './styles';

interface IProps {
  data: { title: string; data: Families[] }[];
  handleClick: (e: any) => void;
  isChecked: any;
  defaultIndex: number;
}
const Slider = ({ data, handleClick, isChecked, defaultIndex }: IProps , { location }: RouteComponentProps) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (defaultIndex) setCurrentIndex(defaultIndex);
  
  }, [defaultIndex]);
  let title1: string;
  title1 = window.location.toString();
console.log(currentIndex,'def')
  return (
    <>
   
      {/* <TitleImage title={data[currentIndex].title} color="#FFFFFF" backgroudColor="#A275FF" size={32} /> */}
      <div className={classes.slideTitle}>
        <div className={classes.imgSlide}>
          {currentIndex == 0 ? (
            <img
              src={teteLink}
              alt=""
              width="40px"
              height="40px"
              className={classes.imgHeader}
              onClick={() => setCurrentIndex(0)}
            />
          ) : (
            <img
              src={teLink}
              alt=""
              width="40px"
              height="40px"
              className={classes.imgHeader}
              onClick={() => setCurrentIndex(0)}
            />
          )}

          {currentIndex == 1 ? (
            <img
              src={mLink}
              alt=""
              width="40px"
              height="40px"
              className={classes.imgHeader}
              onClick={() => setCurrentIndex(1)}
            />
          ) : (
            <img
              src={mainLink}
              alt=""
              width="40px"
              height="40px"
              className={classes.imgHeader}
              onClick={() => setCurrentIndex(1)}
            />
          )}

          {currentIndex == 2 ? (
            <img
              src={perLink}
              alt=""
              width="40px"
              height="40px"
              className={classes.imgHeader}
              onClick={() => setCurrentIndex(2)}
            />
          ) : (
            <img
              src={personnesLink}
              alt=""
              width="40px"
              height="40px"
              className={classes.imgHeaderPersonnes}
              onClick={() => setCurrentIndex(2)}
            />
          )}
        </div>
        <div className={classes.btnTitle}>{data[currentIndex].title}</div>
      </div>
      <Carousel
        dragging={false}
        slideIndex={currentIndex}
        afterSlide={(index) => setCurrentIndex(index)}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className={classNames(currentIndex === 0 && classes.hide, classes.wrapperBtn, classes.prevWrap)}>
            {/* <div
              onClick={() => {
                if (currentIndex !== 0) {
                  previousSlide();
                  setCurrentIndex(currentIndex - 1);
                }
              }}
              className={classNames(classes.containerBtnLeft, classes.rotatedArrow)}
            >
              <Arrow width="12" height="24" color="#fff" className={classes.arrowCon} />
            </div> */}
            <div className={classes.titleContainerArrow} />
          </div>
        )}
        renderCenterRightControls={({ nextSlide }) => (
          <div
            className={classNames(
              currentIndex === data.length - 1 && classes.hide,
              classes.wrapperBtn,
              classes.nextWrap,
            )}
          >
            {/* <div
              onClick={() => {
                if (currentIndex !== data.length - 1) {
                  nextSlide();
                  setCurrentIndex(currentIndex + 1);
                }
              }}
              className={classes.containerBtnRight}
            >
              <Arrow width="12" height="24" color="#fff" className={classes.arrowCon} />
            </div> */}
            <div className={classes.titleContainerArrow} />
          </div>
        )}
        renderBottomCenterControls={null}
        className={classes.root}
      >
        {data.map((el, i) => (
          <div key={el.title} className={classes.item}>
            <div className={classes.avatarContainer}>
              {el.data.map((e) => {
                const selected = isChecked(e.id);
                const { nom } = e;
                const res = nom.replace(/\//g, '');
                return (
                  <div
                    key={e.id}
                    onClick={() => handleClick(e)}
                    className={e.resources.length === 1 ? classes.subitem1 : classes.subitem}
                  >
                    <div className={classNames(selected ? classes.selected : classes.imageContainer)}>
                      <div className={classes.CheckBoxStyle}>
                        {/* <CheckBox
                          checked={selected}
                          img={selected && checked}
                          className={classes.checkBox}
                          classNameLogo={classes.checkBoxImg}
                          color="#420FAB"
                          border="#420FAB"
                        /> */}
                      </div>
                      <img src={e.resources[0]} alt="" className={classes.deselected} />
                      <div className={classNames(selected ? classes.titleSelected1 : classes.titleContainer1)}>
                        {res}
                      </div>
                    </div>
                    <Divider style={{ backgroundColor: '#C9C9C7' }} />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Carousel>
      <div className={classes.validerButton}>
            {currentIndex===2? (
              <div className={classes.btnNext}>
                <Link to={`/interet/ordre/${location}`} className={classes.wrapperBtn}>
                  <Button className={classes.btn}>
                    <div className={classes.contentBtn}>
                      <div className={classes.btnLabel}>Valider</div>
                    </div>
                  </Button>
                </Link>
              </div>
            ) : ''}
          </div>
    </>
  );
};

export default Slider;
