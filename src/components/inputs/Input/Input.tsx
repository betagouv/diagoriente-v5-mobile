import React from 'react';
import InputAdornment from '@material-ui/core/InputAdornment';
import TextField, { OutlinedTextFieldProps } from '@material-ui/core/TextField/TextField';
import classNames from 'utils/classNames';
import LogoRose from 'assets/form/Vector.png';
import LogoCheked from 'assets/form/check.png';
import LogoLocation from 'assets/form/location.png';
import PasswordEye from 'assets/form/password.svg';

import useStyles from './styles';

interface IProps extends Omit<OutlinedTextFieldProps, 'variant'> {
  label?: string;
  errorText?: string | boolean;
  subTitle?: string;
  errorForm?: string;
  showPassword?: () => void;
  className?: string;
  inputClassName?: string;
  inputBaseClassName?: string;
  withOutIcons?: boolean;
  icon?: any;
  isfull?: boolean;
}

const Input = ({
  label,
  errorText,
  subTitle,
  inputProps,
  name,
  showPassword,
  value,
  errorForm,
  required,
  className,
  withOutIcons,
  icon,
  inputClassName,
  inputBaseClassName,
  isfull,
  ...rest
}: IProps) => {
  const classes = useStyles({ error: !!(errorText || errorForm), isfull });

  return (
    <div className={label ? classNames(classes.rootGrid, className) : classNames(classes.root, className)}>
      {label && (
        <div className={classes.labelContainer}>
          <div className={classes.label}>
            {label}
            {required ? (
              <>
                <span className={classes.requiredInput}>*</span>
                <span> :</span>
              </>
            ) : null}
          </div>
          <div className={classes.subTitle}>{subTitle}</div>
        </div>
      )}

      <div className={label ? classes.wrapperInputGrid : classes.wrapperInput}>
        <TextField
          value={value}
          className={classes.inputRoot}
          name={name}
          error={!!(errorText || errorForm)}
          InputProps={{
            classes: {
              inputAdornedStart: classes.adornedPositionStart,
              adornedStart: classes.adornedStart,
              input: classNames(classes.input, inputClassName),
              root: classNames(classes.inputBase, inputBaseClassName),
            },
            startAdornment: (
              <InputAdornment position="start">
                <div>{(name === 'location' || icon) && <img src={icon || LogoLocation} alt="location" />}</div>
              </InputAdornment>
            ),
            endAdornment: (
              <InputAdornment position="start">
                {(name === 'password' || name === 'oldPassword') && (
                  <img src={PasswordEye} alt="view" onClick={showPassword} className={classes.showPasswordImage} />
                )}
              </InputAdornment>
            ),
          }}
          {...rest}
          variant="outlined"
        />
        {(errorText || errorForm) && <img src={LogoRose} className={classes.logo} alt="check" />}
        {value && !errorText && !errorForm && !withOutIcons && (
          <img src={LogoCheked} className={classes.logo} alt="check" />
        )}
      </div>
    </div>
  );
};

export default Input;
