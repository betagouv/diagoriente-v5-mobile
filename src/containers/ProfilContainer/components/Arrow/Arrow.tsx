import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'utils/classNames';

import redarrow from 'assets/svg/redarrow.svg';

import useStyles from './styles';

interface Props {
  className?: string;
}
const Arrow = ({
  className,

}: Props)  => {
  const classes = useStyles();
  return (
    <div className= {classNames( classes.linkContainer ,  className)}>
     <Link className={classes.arrowContainer} to="/profile">
      <img src={redarrow} alt="" height={15} />
      <span className={classes.txt}>Retour </span>
    </Link>
    </div>

  );
};

export default Arrow;
