import React, { useEffect, useState } from 'react';
import TextField from '@material-ui/core/TextField';
import MenuItem from '@material-ui/core/MenuItem';
import arrow from 'assets/images/Arrow.png';
import useStyles from './styles';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import arrowClose from 'assets/svg/arrowDown.svg';
import Dialog from '@material-ui/core/Dialog';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import { TransitionProps } from '@material-ui/core/transitions';

import { echelon, echelonValue } from 'utils/generic';

interface Props {
  skill: any;
  handleLevelSelection: (id: string, value: number) => void;
  selectedLevels: any[];
}

const SelectLevel = ({ skill, handleLevelSelection, selectedLevels }: Props) => {
  const levelsTab = skill.niveau;
  const competenceTitle = skill.title;
  const classes = useStyles();
  const [theme, setTheme] = React.useState(competenceTitle);
  const [open, setOpen] = React.useState(false);
  const [indexSelectedLevel, setIndexSelectedLevel] = useState(-1);

  const onOpenSelect = () => {
    setOpen(true);
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

  useEffect(() => {
    for (let i = 0; i < selectedLevels.length; i += 1) {
      if (skill.id === selectedLevels[i].id) setIndexSelectedLevel(selectedLevels[i].value - 1);
    }
  }, [selectedLevels]);

  const handleClose = (event: any, e: string) => {
    setTheme(e);
    setOpen(false);
  };

  return (
    <>
      <TextField
        label=""
        value={theme}
        variant="outlined"
        className={indexSelectedLevel < 0 ? classes.selectContainer : classes.selectLevelContainer}
        InputProps={{
          endAdornment: (
            <>
              {indexSelectedLevel >= 0 && (
                <div className={classes.selectedTooltipPointContainer}>
                  {[...Array(echelonValue[indexSelectedLevel])].map((p, point) => (
                    // eslint-disable-next-line
                    <div key={point} className={classes.selectedTooltipPoint} />
                  ))}
                  {[...Array(4 - echelonValue[indexSelectedLevel])].map((p, point) => (
                    // eslint-disable-next-line
                    <div key={point} className={classes.selectedTooltip} />
                  ))}
                </div>
              )}

              <div className={classes.arrowContainer}>
                <img src={arrow} alt="arrow" className={classes.arrow} />
              </div>
            </>
          ),
        }}
        onClick={onOpenSelect}
      ></TextField>
      <Dialog
        fullWidth
        classes={{
          /*  root: classes.dialogPaper, */
          paper: classes.paper,
        }}
        open={open}
        onClose={handleDialogClose}
        /*   TransitionComponent={Transition} */
        style={{ zIndex: 99999 }}
        PaperProps={{ classes: { root: classes.dialogPaper } }}
      >
        <MenuItem
          key="close"
          value={competenceTitle}
          className={classes.closeThemeModal}
          onClick={(event) => handleClose(event, competenceTitle)}
        >
          <div className={classes.itemContainer}>
            <div className={classes.closeModelContainer}>
              <img src={arrowClose} alt="arrowClose" className={classes.arrowClose} />
              <span className={classes.closeModelLabel}> {competenceTitle} </span>
            </div>
          </div>
        </MenuItem>
        <Divider />

        {echelon.map((e, index) => (
          <MenuItem
            key={index}
            value={e}
            className={classes.item}
            onClick={() => (handleLevelSelection(skill.id, echelonValue[index]), setOpen(false))}
          >
            <div className={classes.itemContainer}>
              <div className={classes.ItemMenuContent}>
                <div className={classes.pointsTitleContainer}>
                  <div className={classes.tooltipPointContainer}>
                    {[...Array(echelonValue[index])].map((p, point) => (
                      // eslint-disable-next-line
                      <div key={point} className={classes.tooltipPoint} />
                    ))}
                    {[...Array(4 - echelonValue[index])].map((p, point) => (
                      // eslint-disable-next-line
                      <div key={point} className={classes.tooltip} />
                    ))}
                  </div>
                  <div className={classes.echelon}>{e}</div>
                </div>
                <div className={classes.levelTitle}>
                  <p>"{levelsTab[index].title}"</p>
                </div>
              </div>
              <Divider />
            </div>
          </MenuItem>
        ))}
      </Dialog>
    </>
  );
};
export default SelectLevel;
