import React from 'react';
import classNames from 'utils/classNames';
import { Link } from 'react-router-dom';

import useStyles from './styles';

interface Props {
  title: string;
  disabled?: boolean;
  classNameTitle?: string;
  className?: string;
  backgroudColor?: string | undefined;
  linkContainer: string | any ;
  width?: string;
  height?: string;
  color?:string;
}

const ValideButton = ({
  title,
  disabled,
  backgroudColor,
  linkContainer,
  classNameTitle,
  className,
  width,
  color,
  height,
}: Props) => {
  const classes = useStyles({
    height,
    width,
    backgroudColor,
    color,
  });
  return (
    <div className={classNames(classes.validContainer, className)}>
      <Link to={linkContainer} className={classes.linkParti}>
        <div className={classNames(disabled && classes.btnLabelDisabled, classes.btnLabel, classNameTitle)}>
          <div className={classes.btnTitle}>{title}</div>
        </div>
      </Link>
    </div>
  );
};

export default ValideButton;
