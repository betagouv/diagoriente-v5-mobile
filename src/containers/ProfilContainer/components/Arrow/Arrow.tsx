import React, { RefObject } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'utils/classNames';

import redarrow from 'assets/svg/redarrow.svg';

import useStyles from './styles';

interface Props {
  className?: string;
  arrowIcon?: string;
  url: string;
  color?: string;
  onClick?: () => void;
}
const Arrow = ({ className, arrowIcon, url, color, onClick }: Props) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.linkContainer, className)} onClick={onClick}>
      {/* <Link className={classes.arrowContainer} to="/profile"> */}
      <Link className={classes.arrowContainer} to={url}>
        {/* <img src={redarrow} alt="" height={15} /> */}
        <img src={arrowIcon} color={color} alt="" height={15} />
        <span className={classes.txt}>Retour </span>
      </Link>
    </div>
  );
};

export default Arrow;
