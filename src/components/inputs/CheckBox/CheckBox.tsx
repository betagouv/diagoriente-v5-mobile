import React, { forwardRef, Ref } from 'react';
import Icon from 'assets/form/checkbox1.svg';
import Check from 'assets/form/check';
import classNames from 'utils/classNames';
import useStyles from './styles';

interface Props {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  classNameLogo?: string;
  uncheckedStyle?: string;
  opened?: boolean;
  name?: string;
  color: string;
  border?: string;
  img?: string;
  background?: string;
  width?: number;
  heigth?: number;
}
const CheckBox = forwardRef(
  (
    {
      checked,
      onChange,
      name,
      color,
      border,
      img,
      className,
      classNameLogo,
      uncheckedStyle,
      opened,
      background,
    }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const classes = useStyles({ color, checked, border });
    return (
      <label className={classNames(classes.container, className)}>
        <input type="checkbox" checked={checked} onChange={onChange} name={name} ref={ref} />
        {checked ? (
          <Check color={color} background={background} border={border} />
        ) : (
          <div className={classNames(classes.checkmark, uncheckedStyle)} />
        )}
      </label>
    );
  },
);
export default CheckBox;
