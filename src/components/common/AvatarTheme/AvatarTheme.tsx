import React, { forwardRef, Ref } from 'react';
import classNames from 'utils/classNames';
import check from 'assets/svg/check.svg';

import useStyles from './styles';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  title?: string;
  size: number;
  className?: string;
  titleClassName?: string;
  children?: React.ReactChild | boolean | null;
  avatarCircleBackground?: string;
  checked?: boolean;
  squareContainerClassName?: string;
  theme?: boolean;
}

const AvatarTheme = forwardRef(
  (
    {
      title,
      size,
      className,
      titleClassName,
      children,
      avatarCircleBackground,
      checked,
      squareContainerClassName,
      theme,
      ...rest
    }: Props,
    ref: Ref<HTMLDivElement>,
  ) => {
    const classes = useStyles({
      size,
      avatarCircleBackground,
    });
    return (
      <div
        className={classNames(classes.circle, className)}
        style={{ flexDirection: theme ? 'row' : 'column' }}
        {...rest}
        ref={ref}
      >
        <div className={classNames(classes.squareContainer, squareContainerClassName)}>{children}</div>
        {title && (
          <span className={classNames(classes.title, titleClassName)}>
            {title}
            {checked && <img src={check} alt="check" className={classes.checked} />}
          </span>
        )}
      </div>
    );
  },
);

export default AvatarTheme;
