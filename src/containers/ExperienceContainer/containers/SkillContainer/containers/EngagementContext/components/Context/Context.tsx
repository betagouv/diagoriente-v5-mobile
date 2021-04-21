import React from 'react';
import Circle from 'components/common/Avatar/Avatar';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import classNames from 'utils/classNames';
import useStyles from './styles';

interface Props {
  title?: string;
  className?: string;
  icon?: string;
  id: string;
  context: string;
  setContext: (e: string) => void;
}
const Context = ({ className, title, icon, id, context, setContext }: Props) => {
  const classes = useStyles();

  const onContextClick = () => {
    if (context === id) setContext('');
    else setContext(id);
  };

  return (
    <div
      className={classNames(classes.root, id === context && classes.rootChecked, className)}
      onClick={onContextClick}
    >
      <div className={classes.checkboxContainer}>
        <CheckBox
          color="#00B2DB"
          border="#00B2DB"
          background="#FFFFFF"
          className={classes.checkbox}
          checked={id === context}
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
