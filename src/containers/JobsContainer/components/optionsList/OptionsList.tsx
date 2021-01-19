import React from 'react';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import useTheme from '@material-ui/core/styles/useTheme';
import classNames from 'utils/classNames';
import useStyles from './styles';

interface Props {
  name?: string;
  options: string[] | undefined;
  onSelectText: (id: string) => void;
  selected: string[] | undefined;
  className?: string;
  CheckBoxbackgroudColor?: string;
  color?: string;
  background?: string;
  border?: string;
}

const OptionsList = ({
  options,
  onSelectText,
  selected,
  className,
  CheckBoxbackgroudColor,
  background,
  border,
}: Props) => {
  const classes = useStyles({
    CheckBoxbackgroudColor,
  });
  const theme = useTheme();
  const formattedData = options?.map((el: any) => ({ label: el && (el.title || el.name), id: el.id })) || [];
  const isInclude = (id: string) => selected && selected.includes(id);
  return (
    <div className={className ? className : classes.root}>
      {formattedData.map((el) => (
        <div key={el.label} className={classes.item} onClick={() => onSelectText(el.id)}>
          <div className={classes.mask} />
          <CheckBox
            className={classes.hello}
            name={el.label}
            checked={isInclude(el.id)}
            onChange={() => {}}
            color="#fff"
            background={background}
            border={border}
          />
          <div className={isInclude(el.id) ? classes.selectedItemText : classes.itemText}>{el.label}</div>
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
