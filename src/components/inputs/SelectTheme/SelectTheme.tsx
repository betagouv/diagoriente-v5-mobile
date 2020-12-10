import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import arrow from 'assets/images/Arrow.png';
import classNames from 'utils/classNames';
import useStyles from './styles';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import arrowClose from 'assets/svg/arrowClose.svg';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';
import { useDidMount } from 'hooks/useLifeCycle';

interface Props {
  avatarsTab: any[];
  selectedTheme: any;
  showAvatar: (data: any) => void;
}

const SelectTheme = ({ avatarsTab, selectedTheme, showAvatar }: Props) => {
  const classes = useStyles();
  const closeTitle = 'Thèmes :';
  const [defaultTheme, setDefaultTheme] = useState('');
  const [theme, setTheme] = React.useState(defaultTheme);
  const [open, setOpen] = React.useState(false);

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
    showAvatar(option);
    setTheme(option.title);
    setOpen(false);
  };
  const handleDialogClose = () => {
    setOpen(false);
  };

  const Transition = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="right" ref={ref} {...props} />;
  });
  /*  const TransitionClose = React.forwardRef(function Transition(
    props: TransitionProps & { children?: React.ReactElement },
    ref: React.Ref<unknown>,
  ) {
    return <Slide direction="left" ref={ref} {...props} />;
  }); */

  return (
    <>
      <TextField
        label=""
        value={theme ? theme : defaultTheme}
        variant="outlined"
        className={
          !theme || theme === '' || theme === 'Thèmes :' ? classes.selectContainer : classes.selectedThemeContainer
        }
        InputProps={{
          endAdornment: (
            <div className={classes.arrowContainer}>
              <img src={arrow} alt="arrow" className={classes.arrow} />
            </div>
          ),

          startAdornment: {
            ...(theme !== 'Thèmes :' && theme && theme !== '' ? (
              <Avatar
                size={29}
                className={classes.avatarCircleSelected}
                squareContainerClassName={classes.squareContainerClassName}
                theme
              >
                <img
                  src={selectedTheme?.resources?.icon}
                  alt=""
                  className={classNames(classes.avatarStyle, classes.selectedImg)}
                />
              </Avatar>
            ) : (
              <Avatar size={0} className={classes.avatarCircleThemes} />
            )),
          },
        }}
        onClick={onOpenSelect}
      ></TextField>
      <Dialog
        fullScreen
        /* onExiting={() => TransitionClose} */
        open={open}
        /* TransitionComponent={Transition} */
        style={{ zIndex: 99999 }}
      >
        <MenuItem
          key={closeTitle}
          value={closeTitle}
          className={classes.closeThemeModal}
          onClick={() => handleDialogClose()}
        >
          <div className={classes.itemContainer}>
            <div className={classes.closeModelContainer}>
              <img src={arrowClose} alt="arrowClose" className={classes.arrowClose} />
              <span className={classes.closeModelLabel}> {closeTitle} </span>
            </div>
          </div>
        </MenuItem>
        <Divider />
        {avatarsTab.map((option) => (
          <MenuItem key={option.title} value={selectedTheme} className={classes.item}>
            <div className={classes.itemContainer}>
              <Avatar
                title={option.title}
                size={62}
                titleClassName={selectedTheme?.id === option.id ? classes.textSelected : classes.themeTitle}
                className={classes.avatarCircle}
                onClick={() => onAvatarSelect(option)}
                avatarCircleBackground={selectedTheme?.id === option.id ? 'rgba(122, 230, 255, 0.2)' : ''}
                squareContainerClassName={classes.squareContainerClassName}
                theme
              >
                <img
                  src={option.resources?.icon}
                  alt=""
                  className={classNames(classes.avatarStyle, selectedTheme?.id === option.id && classes.selectedImg)}
                />
              </Avatar>
              <Divider />
            </div>
          </MenuItem>
        ))}
      </Dialog>
    </>
  );
};
export default SelectTheme;
