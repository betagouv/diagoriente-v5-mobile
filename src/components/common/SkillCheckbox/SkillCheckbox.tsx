import React, { useState, useEffect } from 'react';
import { Competence } from 'requests/types';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import itemArrow from 'assets/svg/darkArrow.svg';
import classNames from 'utils/classNames';

import useStyles from './styles';

interface Props {
  label: string;
  description?: string;
  competence: Omit<Competence, 'rank'>;
  competences: Competence[];
  setCompetences: (c: Competence[]) => void;
  index: number;
  openedIndex?: number;
  setOpenedIndex: (n: number) => void;
  open: boolean;
  setOpen: (b: boolean) => void;
  setErrorMsg: (s: string) => void;
  setOpenModal: (b: boolean) => void;
}

const SkillCheckbox = ({
  label,
  description,
  competence,
  competences,
  setCompetences,
  index,
  openedIndex,
  setOpenedIndex,
  open,
  setOpen,
  setErrorMsg,
  setOpenModal,
}: Props) => {
  const classes = useStyles();
  const [selected, setSelected] = useState(!!competences?.find((e) => e.id === competence.id));
  const [opened, setOpened] = useState(false);

  const onClickHeader = (e: Event) => {
    if (document.getElementsByClassName('ignore-onclickHeader')[index].contains(e.target as any)) return;
    else {
      if (!open) {
        setOpen(true);
        setOpenedIndex(index);
      } else if (open && index !== openedIndex) setOpenedIndex(index);
      else if (open && index === openedIndex) setOpen(false);
    }
  };
  const addCompetence = (competence: Competence) => {
    if (competences.length < 4) {
      setCompetences([...competences, competence]);
    } else if (competences.length === 4) {
      setErrorMsg('Tu as déjà choisi 4 compétences');
      setOpenModal(true);
    }
  };

  const deleteCompetence = (id: string) => {
    setCompetences(competences.filter((comp) => comp.id !== id));
  };
  const onClickCheckbox = (competence: any, id: string, e: Event) => {
    e.preventDefault();
    if (!selected) addCompetence(competence);
    else deleteCompetence(id);
  };
  useEffect(() => {
    if (open && openedIndex === index) setOpened(true);
    else setOpened(false);
  }, [open, openedIndex]);

  useEffect(() => {
    if (!!competences?.find((e) => e.id === competence.id)) setSelected(true);
    else setSelected(false);
  }, [competences]);
  return (
    <div className={classes.skillContainer}>
      <div
        className={classNames(
          classes.header,
          opened && !selected && description && classes.openedBG,
          selected && classes.selectedBG,
        )}
        style={{ justifyContent: opened ? 'space-between' : '' }}
        onClick={(e) => onClickHeader(e as any)}
      >
        <div className={classes.checkboxContainer}>
          <div
            className={classNames('ignore-onclickHeader', classes.checkbox)}
            onClick={(e) => onClickCheckbox(competence, competence.id, e as any)}
          >
            <CheckBox
              checked={selected}
              uncheckedStyle={
                (!opened && !selected) || (opened && !description) ? classes.checkboxBG : opened ? classes.openedBG : ''
              }
              color="#00B2DB"
              border="#00B2DB"
              background="#FFFFFF"
            />
          </div>
          <span
            className={classNames(
              classes.label,
              opened && !selected && description && classes.openedLabel,
              selected && classes.selectedLabel,
              opened && description && classes.openedWidth,
            )}
          >
            {label}
          </span>
        </div>
        {opened && description && <img src={itemArrow} alt="" className={classes.itemArrow} />}
      </div>
      {opened && description && (
        <div className={classes.descriptionContainer}>
          <p className={classes.description}>{description}</p>
        </div>
      )}
    </div>
  );
};

export default SkillCheckbox;
