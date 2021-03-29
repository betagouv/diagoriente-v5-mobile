import React, { ReactElement } from 'react';
import Arrow from 'assets/svg/arrow';
import Menu from 'assets/svg/Group.svg';
import classNames from 'utils/classNames';
import { useTheme } from '@material-ui/core';
import OptionList from '../optionsList/OptionsList';
import Divider from '@material-ui/core/Divider';
import closeIcon from 'assets/svg/picto close.svg'
import Slide from '@material-ui/core/Slide';
import arrowClose from 'assets/svg/orangeArrow.svg';
import checked from 'assets/form/checkboxchecked.svg';
import ValidationButton from 'components/valideButton/valideButton';

import CheckBox from 'components/inputs/CheckBox/CheckBox';

import useStyles from './styles';

interface IProps {
  label?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onSelectText: (e: string | undefined) => void;
  value?: string[] | undefined;
  name?: string;
  placeholder?: string | undefined;
  error?: boolean;
  errorText?: string;
  options: any[] | undefined;
  icon?: ReactElement;
  className?: string;
  errorForm?: string;
  open?: boolean;
  onClose?: () => void;
  onClick: () => void;
  fullSelect?: boolean;
  loading?: boolean;
  reference?: any;
  color?: any;
  referenceFullScreen?: any;
  small?: boolean;
  parcourAcc?: { id: string };
  fullScreenModal?: boolean;
  modal?: boolean;
  arrowColor?: string;
  img?: string;
  border?: string;
  background?: string;
  from: string;
}

const SelectJobs = ({
  onChange,
  value,
  name,
  placeholder,
  options,
  open,
  onClose,
  onSelectText,
  onClick,
  fullSelect,
  reference,
  from,
  parcourAcc,
  fullScreenModal,
  modal,
  border,
  background,
  arrowColor,
}: IProps) => {
  const classes = useStyles({ fullSelect, fullScreenModal, open, arrowColor });
  const isInclude = (id: string) => value && value.includes(id);
  const theme = useTheme();
  const [openModal, setOpenModal] = React.useState(open);

  const handleDialogClose = () => {
    setOpenModal(false);
  };

  const handleClose = () => {
    setOpenModal(false);
  };



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
          className={classNames(from ? classes.inputContainer1 : classes.inputContainer , isInclude && classes.selectedInput )}
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
          {fullScreenModal ? (
            <Slide direction="right" in={open} mountOnEnter unmountOnExit>
              <div className={classes.secteurContainerFullScreen}>
                <div className={classes.closeFullModelContainer} onClick={onClose}>

            
                  <span className={classes.closeModelLabel}> {placeholder} </span>
                  <img src={closeIcon} alt="close" className={classes.close} />

                </div>
                {options?.map((el) => (
                  <div key={el.title} className={classes.fullScreenItem}>
                    <div className={classNames(classes.itemSecteurWrapper , isInclude(el.id) && classes.selected) } onClick={() => onSelectText(el.id)} >
                    <div className={classes.CheckBoxStyle}>
                          <CheckBox
                            checked={isInclude(el.id)}
                            img={ checked}
                            className={classes.checkBox}
                            classNameLogo={classes.checkBoxImg}
                            color="#DB8F00 "
                            border="#DB8F00 "
                            background="#fff"

                          />
                        </div>
                      <div
                        key={el.title}
                      >
                        <span className={classNames(classes.item)}>
                          {el.title}
                        </span>
                      </div>
                    </div>
                    <Divider />
                    {  isInclude(el.id) && <ValidationButton label="Valider" bgColor="#FFA600" color="#ffff" btnClassName={classes.btn} />
                }
                     
                  </div>
                
                             
                              
                ))}
 

              </div>
            </Slide>
          ) : modal ? (
            <div className={classes.modalWrapper}>
              <div className={classes.backdrop} onClick={onClose} />
              <div className={classes.modalItemsContainer}>
                <div className={classes.closeModelContainer} onClick={onClose}>
             
                  <span className={classes.closeModelLabel}> {placeholder}</span>
                  <Arrow
                    color={arrowColor ? arrowColor : '#420FAB'}
                    width="12"
                    height="19"
                    className={modal ? classes.modalArrowClose : classes.arrowClose}
                  />
                </div>
                <OptionList
                  options={options}
                  onSelectText={onSelectText}
                  selected={value}
                  name={name}
                  className={classes.optionList}
                  border={from === 'job' ? '##FFA600' : '#00B2DB'}
                  background={from === 'job' ? '#FFD382' : '#7AE6FF'}
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
              name={name}
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
