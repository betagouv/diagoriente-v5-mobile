import React, { useEffect, useRef } from 'react';

interface IProps {
  setCurrentIndex: (i: number) => void;
  currentSlide: any;
}

const TopControl = ({ currentSlide, setCurrentIndex }: IProps) => {
  const refIndex = useRef(currentSlide);
  useEffect(() => {
    if (currentSlide !== refIndex) setCurrentIndex(currentSlide);
    // eslint-disable-next-line
  }, [currentSlide]);
  return <div />;
};

export default TopControl;
