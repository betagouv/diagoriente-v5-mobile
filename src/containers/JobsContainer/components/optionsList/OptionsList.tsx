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
}

const OptionsList = ({ options, onSelectText, selected, className }: Props) => {
  const classes = useStyles();
  const theme = useTheme();
  const formattedData = options?.map((el: any) => ({ label: el && (el.title || el.name), id: el.id })) || [];
  const isInclude = (id: string) => selected && selected.includes(id);
  return (
    <div className={className ? className : classes.root}>
      {formattedData.map((el) => (
        <div key={el.label} className={classes.item} onClick={() => onSelectText(el.id)}>
          <div className={classes.mask} />
          <CheckBox
            name={el.label}
            checked={isInclude(el.id)}
            onChange={() => {}}
            color={theme.palette.secondary.main}
            border="#DB8F00"
          />
          <div className={isInclude(el.id) ? classes.selectedItemText : classes.itemText}>{el.label}</div>
        </div>
      ))}
    </div>
  );
};

export default OptionsList;
