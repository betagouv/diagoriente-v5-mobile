import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import arrow from 'assets/images/Arrow.png';
import itemArrow from 'assets/svg/openArrow.svg';
import classNames from 'utils/classNames';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import pictoClose from 'assets/svg/pictoClose.svg';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { useDidMount } from 'hooks/useLifeCycle';
import ValidationButton from 'components/valideButton/valideButton';
import { encodeUri } from 'utils/url';
import useStyles from './styles';

interface Props {
  avatarsTab: any[];
  selectedTheme: any;
  showAvatar: (data: any) => void;
  history?: any;
  redirect?: any;
}

const SelectTheme = ({ avatarsTab, selectedTheme, showAvatar, history, redirect }: Props) => {
  const classes = useStyles();
  const closeTitle = 'Choisis un thème ';
  const [defaultTheme, setDefaultTheme] = useState('');
  const [theme, setTheme] = useState(defaultTheme);
  const [open, setOpen] = useState(false);
  const [openedItem, setOpenedItem] = useState(false);
  const [activities, setActivities] = useState([] as any[]);

  useDidMount(() => {
    if (selectedTheme?.id) {
      for (let i = 0; i < avatarsTab.length; i += 1) {
        if (selectedTheme?.id === avatarsTab[i].id) setDefaultTheme(avatarsTab[i].title);
      }
    } else setDefaultTheme(closeTitle);
  });

  const onOpenSelect = () => {
    setOpen(true);
  };

  const onAvatarSelect = (option: any) => {
    if (option.id === selectedTheme?.id) setOpenedItem(!openedItem);
    else setOpenedItem(true);
    showAvatar(option);
    setTheme(option.title);
  };

  const handleDialogClose = () => {
    setOpen(false);
    /*  showAvatar('');
    setOpenedItem(false); */
  };

  useEffect(() => {
    if (avatarsTab) {
      const acts = avatarsTab
        .filter((act) => act.id === selectedTheme?.id)
        .map((a) => a.activities)
        .map((e) => e.slice(0, 4));
      setActivities(acts[0]);
    }
  }, [selectedTheme]);

  const onValidate = () => {
    if (selectedTheme) history.push(`/experience/skill/${selectedTheme.id}${redirect ? encodeUri({ redirect }) : ''}`);
    setOpen(false);
  };

  return (
    <>
      <TextField
        label=""
        value="Thèmes"
        variant="outlined"
        className={classes.selectContainer}
        InputProps={{
          endAdornment: (
            <div className={classes.arrowContainer}>
              <img src={arrow} alt="arrow" className={classes.arrow} />
            </div>
          ),
        }}
        onClick={onOpenSelect}
      ></TextField>
      <Dialog fullScreen open={open} style={{ zIndex: 99999 }}>
        <MenuItem
          key={closeTitle}
          value={closeTitle}
          className={classes.closeThemeModal}
          onClick={() => handleDialogClose()}
        >
          <div className={classes.itemContainer}>
            <div className={classes.closeModelContainer}>
              <span className={classes.closeModelLabel}> {closeTitle} </span>
              <img src={pictoClose} alt="close" />
            </div>
          </div>
        </MenuItem>
        <Divider />
        {avatarsTab.map((option) => (
          <MenuItem key={option.title} value={selectedTheme} className={classes.item}>
            <div className={classes.itemContainer}>
              <div
                className={classes.itemAvatar}
                style={{
                  backgroundColor: selectedTheme?.id === option.id ? 'rgba(122, 230, 255, 0.2)' : '',
                  justifyContent: selectedTheme?.id === option.id && openedItem ? 'space-between' : '',
                  opacity: selectedTheme?.id !== option.id && openedItem ? 0.5 : 1,
                }}
                onClick={() => onAvatarSelect(option)}
              >
                <Avatar
                  title={option.title}
                  size={62}
                  titleClassName={selectedTheme?.id === option.id ? classes.textSelected : classes.themeTitle}
                  className={classNames(classes.avatarCircle, openedItem && classes.widthOpened)}
                  squareContainerClassName={classes.squareContainerClassName}
                  theme
                >
                  <img
                    src={option.resources?.icon}
                    alt=""
                    className={classNames(classes.avatarStyle, selectedTheme?.id === option.id && classes.selectedImg)}
                  />
                </Avatar>
                {selectedTheme?.id === option.id && openedItem && (
                  <img src={itemArrow} alt="" className={classes.itemArrow} />
                )}
              </div>
              {selectedTheme?.id === option.id && openedItem && (
                <>
                  <Divider />
                  <div className={classes.activitiesContainer}>
                    {activities?.map((a) => (
                      <span key={a.id} className={classes.activityTitle}>
                        • {a.title}
                      </span>
                    ))}
                    {avatarsTab.filter((act) => act.id === selectedTheme?.id).map((a) => a.activities)[0]?.length >
                      4 && <span className={classes.activityTitle}>...</span>}
                  </div>
                </>
              )}
              <Divider />
            </div>
          </MenuItem>
        ))}
        {selectedTheme && <div className={classes.emptyDiv} />}
        {selectedTheme && (
          <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onValidate()} />
        )}
      </Dialog>
    </>
  );
};
export default SelectTheme;
