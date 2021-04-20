import React from 'react';
import Circle from 'components/common/Avatar/Avatar';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import classNames from 'utils/classNames';
import useStyles from './styles';

interface Props {
  title?: string;
  className?: string;
  checked?: boolean;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon?: string;
}
const Context = ({ className, checked, handleChange, title, icon }: Props) => {
  const classes = useStyles();
  return (
    <div className={classNames(classes.root, checked && classes.rootChecked, className)}>
      <div className={classes.checkboxContainer}>
        <CheckBox
          color="#00B2DB"
          border="#00B2DB"
          background="#FFFFFF"
          className={classes.checkbox}
          checked={checked}
          onChange={handleChange}
        />
        <span className={classes.title}>{title}</span>
      </div>
      {icon ? (
        <Avatar size={80} className={classes.circle} squareContainerClassName={classes.squareContainer}>
          <img src={icon} alt="" height={60} width={60} />
        </Avatar>
      ) : (
        <Circle size={60} />
      )}
    </div>
  );
};

export default Context;
