import React from 'react';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import useStyles from './styles';

interface Props {
  options: string[] | undefined;
  onSelectText: (id: string) => void;
  selected: string[] | undefined;
  className?: string;
  CheckBoxbackgroudColor?: string;
  background?: string;
  border?: string;
  check?: boolean;
  bkColor?: string;
  checkColor?: string;
}

const OptionsList = ({
  options,
  onSelectText,
  selected,
  className,
  CheckBoxbackgroudColor,
  background,
  border,
  check,
  bkColor,
  checkColor,
}: Props) => {
  const classes = useStyles({
    CheckBoxbackgroudColor,
    bkColor,
  });
  const formattedData = options?.map((el: any) => ({ label: el && (el.title || el.name), id: el.id })) || [];
  const isInclude = (id: string) => selected && selected.includes(id);
  return (
    <div className={className || classes.root}>
      {formattedData.map((el) => (
        <div
          key={el.label}
          className={isInclude(el.id) ? classes.bkText : classes.item}
          onClick={() => onSelectText(el.id)}
        >
          <div className={classes.mask} />
          {check && (
            <CheckBox
              className={classes.hello}
              name={el.label}
              checked={isInclude(el.id)}
              onChange={() => {}}
              // color="#fff"
              // background="#fff"
              color={checkColor || '#fff'}
              background={background}
              border={border}
            />
          )}
          <div className={isInclude(el.id) ? classes.selectedItemText : classes.itemText}>{el.label}</div>
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
