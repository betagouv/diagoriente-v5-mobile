import React, { useState, useEffect } from 'react';
import Carousel from 'nuka-carousel';
import { Families } from 'requests/types';
import Arrow from 'assets/svg/arrow';
import classNames from 'utils/classNames';
import checked from 'assets/form/checkboxchecked.svg';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import TitleImage from 'components/common/TitleImage/TitleImage';
import Divider from '@material-ui/core/Divider';

import useStyles from './styles';

interface IProps {
  data: { title: string; data: Families[] }[];
  handleClick: (e: any) => void;
  isChecked: any;
  defaultIndex: number;
}
const Slider = ({ data, handleClick, isChecked, defaultIndex }: IProps) => {
  const classes = useStyles();
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {
    if (defaultIndex) setCurrentIndex(defaultIndex);
  }, [defaultIndex]);
  let title1: string;
  title1 = window.location.toString();

  return (
    <>
      <TitleImage title={data[currentIndex].title} color="#FFFFFF" backgroudColor="#A275FF" size={32} />

      <Carousel
        dragging={false}
        slideIndex={currentIndex}
        afterSlide={(index) => setCurrentIndex(index)}
        renderCenterLeftControls={({ previousSlide }) => (
          <div className={classNames(currentIndex === 0 && classes.hide, classes.wrapperBtn, classes.prevWrap)}>
            <div
              onClick={() => {
                if (currentIndex !== 0) {
                  previousSlide();
                  setCurrentIndex(currentIndex - 1);
                }
              }}
              className={classNames(classes.containerBtnLeft, classes.rotatedArrow)}
            >
              <Arrow width="12" height="24" color="#fff" className={classes.arrowCon} />
            </div>
            <div className={classes.titleContainerArrow}></div>
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
            <div
              onClick={() => {
                if (currentIndex !== data.length - 1) {
                  nextSlide();
                  setCurrentIndex(currentIndex + 1);
                }
              }}
              className={classes.containerBtnRight}
            >
              <Arrow width="12" height="24" color="#fff" className={classes.arrowCon} />
            </div>
            <div className={classes.titleContainerArrow}></div>
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
                        <CheckBox
                          checked={selected}
                          img={checked}
                          className={classes.checkBox}
                          classNameLogo={classes.checkBoxImg}
                        />
                        <div className={classes.titleContainer1}>{res}</div>
                      </div>
                      <img src={e.resources[0]} alt="" className={classes.deselected} />
                    </div>
                    <Divider style={{ backgroundColor: '#C9C9C7' }}  />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
};

export default Slider;




