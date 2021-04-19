/* eslint-disable @typescript-eslint/no-unused-expressions */
import React from 'react';

import { SkillType } from 'common/requests/types';
import Dialog from '@material-ui/core/Dialog';
import { createStyles, Theme, withStyles, WithStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid/Grid';
import Tooltip from '@material-ui/core/Tooltip';
import Typography from '@material-ui/core/Typography';
import DialogContent from '@material-ui/core/DialogContent';

import medaille from 'assets/svg/picto_medaille.svg';
import Comment from '../Comment/Comment';

import useStyles from './styles';

interface CardSkill extends SkillType {}

const CardSkill = ({ comment: allComments, theme, activities, engagement }: CardSkill) => {
  const comment = allComments.filter((c) => c.status === 'accepted');
  const classes = useStyles({ recommended: comment.length !== 0 });
  const act = theme.type === 'engagement' ? engagement?.options : activities;
  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    // <Tooltip
    //   arrow
    //   placement="right"
    //   classes={{ tooltipPlacementRight: classes.tooltipRight, tooltipPlacementLeft: classes.tooltipLeft }}
    //   title={comment.length ? comment.map((c) => <Comment key={c.id} {...c} />) : ''}
    // >
    <div className={classes.puces}>
      <Grid className={classes.skill} item xs={12}>
        <div className={classes.skillHeader}>
          <div className={classes.themeTitle}>
            {theme.title}
            {comment.length ? (
              <img className={classes.commentIcon} src={medaille} alt="" onClick={handleClickOpen} />
            ) : null}
          </div>
        </div>
        <div>
          <ul className={classes.activityContainer}>
            {(act as any)?.map((activity: any, i: number) => (
              <li className={classes.activity} key={activity.id || i}>
                {theme.type === 'engagement' ? (
                  <span style={{ fontWeight: 700 }}>
                    {activity.option.map((el: { title: string; id: string }) => el.title).join(' ')}
                  </span>
                ) : (
                  activity.title
                )}
              </li>
            ))}
            {theme.type === 'engagement' && engagement?.activity && (
              <div className={classes.activity}>{engagement?.activity}</div>
            )}
          </ul>
        </div>
      </Grid>
      <Dialog onClose={handleClose} className={classes.Dialog} open={open}>
        <DialogContent dividers>
          <Typography gutterBottom>
            {comment.length ? comment.map((c) => <Comment key={c.id} {...c} />) : ''}
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
    // </Tooltip>
  );
};

export default CardSkill;
