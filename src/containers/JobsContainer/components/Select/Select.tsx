import React, { ChangeEvent } from 'react';
import Arrow from 'assets/svg/arrow';
import Menu from 'assets/svg/Group.svg';
import classNames from 'utils/classNames';
import { useTheme } from '@material-ui/core';
import Divider from '@material-ui/core/Divider';
import closeIcon from 'assets/svg/picto close.svg';
import Slide from '@material-ui/core/Slide';
import ValidationButton from 'components/valideButton/valideButton';

import CheckBox from 'components/inputs/CheckBox/CheckBox';
import OptionList from '../optionsList/OptionsList';
import useStyles from './styles';

interface IProps {
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
  onSelectText: (e: string | undefined) => void;
  value?: string[] | undefined;
  name?: string;
  placeholder?: string | undefined;
  placeholderSelect?: string;

  options: any[] | undefined;
  open?: boolean;
  onClose?: () => void;
  onCloseSelect?: () => void;

  onClick: () => void;
  fullSelect?: boolean;
  reference?: any;
  fullScreenModal?: boolean;
  modal?: boolean;
  arrowColor?: string;
  border?: string;
  background?: string;
  from: string;
  borderColor?: string;
  check?: boolean;
  bkColor?: string;
  placeHolderColor?: string;
}
const SelectJobs = ({
  onChange,
  value,
  name,
  placeholder,
  options,
  open,
  check,
  onClose,
  onCloseSelect,

  onSelectText,
  bkColor,
  onClick,
  fullSelect,
  reference,
  from,
  fullScreenModal,
  modal,
  border,
  background,
  arrowColor,
  borderColor,
  placeholderSelect,
  placeHolderColor,
}: IProps) => {
  const classes = useStyles({ fullSelect, fullScreenModal, open, arrowColor, borderColor, placeHolderColor });
  const isInclude = (id: string) => value && value.includes(id);
  const theme = useTheme();

  return (
    <div className={classes.content} ref={reference}>
      <div className={classes.inputWrapper} onClick={onClick}>
        {(fullSelect || fullScreenModal) && (
          <div className={classes.menu}>
            <img src={Menu} alt="menu" />
          </div>
        )}
        <input
          onChange={onChange}
          name={name}
          placeholder={placeholder}
          disabled
          className={classNames(
            from && classes.inputContainer1,
            classes.inputBorder,
            // isInclude && classes.selectedInput,
          )}
        />
        <div className={classes.logoContainer}>
          <Arrow
            color={theme.palette.success.main}
            width="9"
            height="14"
            className={open ? classes.rotatedBase : classes.rotated}
          />
        </div>
      </div>
      {open && (
        <div className={classes.optionsContainer}>
          {/* eslint-disable-next-line no-nested-ternary */}
          {fullScreenModal ? (
            <Slide direction="right" in={open} mountOnEnter unmountOnExit>
              <div className={classes.secteurContainerFullScreen}>
                <div className={classes.closeFullModelContainer}>
                  <span className={classes.closeModelLabel}> Domaine d’activité </span>
                  <img src={closeIcon} alt="close" className={classes.close} onClick={onCloseSelect} />
                </div>
                {options?.map((el) => (
                  <div key={el.title} className={classes.fullScreenItem}>
                    <div
                      className={classNames(classes.itemSecteurWrapper, isInclude(el.id) && classes.selected)}
                      onClick={() => onSelectText(el.id)}
                    >
                      <div className={classes.CheckBoxStyle}>
                        <CheckBox
                          checked={isInclude(el.id)}
                          className={classes.checkBox}
                          border="#DB8F00 "
                          background="#fff"
                          color="#DB8F00 "
                        />
                      </div>
                      <div key={el.title}>
                        <span className={classNames(classes.item)}>{el.title}</span>
                      </div>
                    </div>
                    <Divider />
                    {isInclude(el.id) && (
                      <ValidationButton
                        onClick={onClose}
                        label="Valider"
                        bgColor="#FFA600"
                        color="#424242"
                        btnClassName={classes.btn}
                      />
                    )}
                  </div>
                ))}
              </div>
            </Slide>
          ) : // eslint-disable-next-line no-nested-ternary
          modal ? (
            <div className={classes.modalWrapper}>
              <div className={classes.backdrop} onClick={onClose} />
              <div className={classes.modalItemsContainer}>
                <div className={classes.closeModelContainer} onClick={onClose}>
                  <span className={classes.closeModelLabel}> {placeholderSelect}</span>
                  <Arrow
                    color={arrowColor || '#420FAB'}
                    width="12"
                    height="19"
                    className={modal ? classes.modalArrowClose : classes.arrowClose}
                  />
                </div>
                <OptionList
                  options={options}
                  onSelectText={onSelectText}
                  selected={value}
                  className={classes.optionList}
                  border={from === 'job' ? '#FFA600' : '#00B2DB'}
                  background={from === 'job' ? '#ffff' : '#7AE6FF'}
                  check={check}
                  bkColor={bkColor}
                  checkColor="#DB8F00 "
                />
              </div>
            </div>
          ) : fullSelect ? (
            <div className={classes.secteurContainer}>
              {options?.map((el) => (
                <div
                  key={el.title}
                  className={classNames(classes.itemSecteur, isInclude(el.id) && classes.itemSecteurSelected)}
                  onClick={() => onSelectText(el.id)}
                >
                  <span className={classNames(classes.item, isInclude(el.id) && classes.selected)}>{el.title}</span>
                </div>
              ))}
            </div>
          ) : (
            <OptionList
              options={options}
              onSelectText={onSelectText}
              selected={value}
              border={border}
              background={background}
            />
          )}
        </div>
      )}
    </div>
  );
};

export default SelectJobs;
