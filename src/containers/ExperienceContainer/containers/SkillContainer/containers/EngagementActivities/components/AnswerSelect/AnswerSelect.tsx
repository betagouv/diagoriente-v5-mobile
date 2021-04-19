import React, { useState, useRef, useEffect } from 'react';
import SelectBase, { SelectProps } from '@material-ui/core/Select/Select';
import { Question } from 'requests/types';
import MenuItem from '@material-ui/core/MenuItem/MenuItem';
import { useListener } from 'hooks/useListener';
import classNames from 'utils/classNames';
import darkarrow from 'assets/svg/darkarrowblue.svg';
import pictoClose from 'assets/svg/pictoClose.svg';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

interface Props extends Omit<SelectProps, 'variant'> {
  question: Question;
  index?: number;
  label?: string;
  value?: string | number;
  options: { label: string | number; value: string | number }[];
  openActivity?: () => void;
  open: boolean;
  setOpen?: any;
  handleClose?: () => void;
  onChangeValue?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  rootClassName?: string;
  styleSelectClassName?: string;
  renderOption: (option: { label: string | number; value: string | number }, openSelect: boolean) => JSX.Element;
}

const AnswerSelect = ({
  question,
  label,
  options,
  openActivity,
  open,
  value,
  setOpen,
  handleClose,
  onChangeValue,
  styleSelectClassName,
  tabIndex,
  index,
  renderOption,
  ...rest
}: Props) => {
  const classes = useStyles();
  const [openSelect, setOpenSelect] = useState(false);
  const [dimension, setDimension] = useState([] as number[]);
  const selectRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState('auto' as number | string);

  const selectClose = () => {
    if (setOpenSelect) setOpenSelect(false);
  };

  useEffect(() => {
    if (!openSelect && setOpen) setOpen(false);
    // eslint-disable-next-line
  }, [openSelect]);

  const getValue = () => {
    return value || '__label__';
  };

  return (
    <div className={classes.root}>
      <SelectBase
        value={getValue()}
        MenuProps={{
          classes: { paper: classes.menu, list: classes.itemsList },
          style: { zIndex: 2000 },
        }}
        classes={{
          root: classes.rootBackground,
        }}
        className={classNames(classes.selectContainer, classes.padding, value && styleSelectClassName)}
        IconComponent={() => (
          <div
            onClick={() => {
              setOpenSelect(true);
            }}
          >
            <img src={darkarrow} alt="" className={classes.img} />
          </div>
        )}
        inputProps={{
          classes: {
            root: classes.select,
          },
        }}
        {...rest}
        variant="outlined"
        onClose={() => {}}
        onOpen={() => {
          setOpenSelect(true);
        }}
        open={openSelect}
      >
        <MenuItem value="__label__" className={classes.closeItem} onClick={selectClose}>
          <div className={classes.itemContainer}>
            <div className={classes.closeContainer}>
              <span className={classNames(classes.unansweredQuestion, openSelect && classes.closeLabel)}>{label}</span>
              {openSelect && <img src={pictoClose} alt="close" />}
            </div>
          </div>
        </MenuItem>
        {options.map((option, index) => (
          <MenuItem
            key={option.value}
            value={option.value}
            className={classNames(
              classes.menuItem,
              index === options.length - 1 && open && classes.lastChildBorder,
              option.value === value ? classes.selectedItem : '',
            )}
          >
            {option.label}
          </MenuItem>
        ))}
        {value && openSelect && (
          <MenuItem>
            <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => setOpenSelect(false)} />
          </MenuItem>
        )}
      </SelectBase>
    </div>
  );
};

AnswerSelect.defaultProps = {
  renderOption: (option: { label: string | number; value: string | number; user: string }) => option.label,
};

export default AnswerSelect;
