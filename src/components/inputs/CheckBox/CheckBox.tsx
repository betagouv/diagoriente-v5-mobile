import React, { forwardRef, Ref } from 'react';
import Check from 'assets/form/check';
import classNames from 'utils/classNames';
import useStyles from './styles';

interface Props {
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  uncheckedStyle?: string;
  name?: string;
  color: string;
  border?: string;
  background?: string;
}
const CheckBox = forwardRef(
  (
    { checked, onChange, name, color, border, className, uncheckedStyle, background }: Props,
    ref: Ref<HTMLInputElement>,
  ) => {
    const classes = useStyles({ color, checked, border });
    return (
      // eslint-disable-next-line jsx-a11y/label-has-associated-control
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
