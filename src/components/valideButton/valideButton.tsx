import React from 'react';
import classNames from 'utils/classNames';
import { Link } from 'react-router-dom';

import useStyles from './styles';

interface Props {
  label: string;
  show?: boolean;
  btnClassName?: string;
  labelClassName?: string;
  bgColor?: string | undefined;
  link?: string | any;
  onClick?: () => void;
  width?: string;
  height?: string;
  color?: string;
}

const ValideButton = ({
  label,
  show,
  bgColor,
  link,
  onClick,
  btnClassName,
  labelClassName,
  width,
  color,
  height,
}: Props) => {
  const classes = useStyles({
    height,
    width,
    bgColor,
    color,
  });
  return (
    <Link to={link}>
      {(show === undefined || show) && (
        <div className={classNames(classes.btnContainer, btnClassName)} onClick={onClick}>
          <div className={classNames(classes.btnLabel, labelClassName)}>{label}</div>
        </div>
      )}
    </Link>
  );
};

export default ValideButton;
