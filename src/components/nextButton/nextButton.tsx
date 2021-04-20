import React from 'react';
import Button, { IProps } from 'components/button/Button';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';
import classNames from 'utils/classNames';

import Arrow from 'assets/svg/arrow';

import useStyles from './style';

interface Props {
  classNameTitle?: string;
  ArrowColor?: string;
  fetching?: boolean;
  children?: React.ReactChild;
  arrowWidth?: string;
  arrowHeight?: string;
  disabled?: boolean;
}

const NextButton = ({
  className,
  classNameTitle,
  ArrowColor,
  fetching,
  children,
  arrowWidth,
  arrowHeight,
  disabled,
  ...props
}: IProps & Props) => {
  const classes = useStyles();
  const condition = disabled ? '#4D6EC5' : '#223A7A';
  return (
    <Button
      type="submit"
      childrenClassName={classes.margin}
      className={classNames(disabled && classes.btnPersoDisabled, classes.btnperso, className)}
      {...props}
    >
      <div className={classes.contentBtn}>
        <div className={classNames(disabled && classes.btnLabelDisabled, classes.btnLabel, classNameTitle)}>
          {children || 'Suivant'}
        </div>
        <Arrow
          color={ArrowColor ? '#ffffff' && '#7533FF' : condition}
          width={arrowWidth || '12'}
          height={arrowHeight || '19'}
          className={classes.arrow}
        />
        {fetching && (
          <div className={classes.loaderContainer}>
            <CircularProgress classes={{ colorPrimary: classes.colorPrimaryLoader }} size={24} />
          </div>
        )}
      </div>
    </Button>
  );
};

export default NextButton;
