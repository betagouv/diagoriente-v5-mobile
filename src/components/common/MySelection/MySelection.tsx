import React, { useState } from 'react';
import { Theme } from 'requests/types';
import Close from 'assets/svg/closeModal.svg';
import Avatar from 'components/common/Avatar/Avatar';
import useStyles from './styles';

interface Props {
  theme?: Omit<Theme, 'activities'> | null;
  /* theme: any; */
  activities?: string[];
}

const MySelection = ({ theme, activities }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  console.log('themeS', theme);
  return (
    <div className={classes.container}>
      <div className={classes.title} onClick={() => setOpen(true)}>
        Ma sélection
      </div>
      {open && (
        <div className={classes.modalContainer}>
          <div className={classes.modal}>
            <img src={Close} alt="" className={classes.closeImg} onClick={() => setOpen(false)} />
            <div className={classes.modalTitle}> Ma sélection</div>
            <div className={classes.selectionContainer}>
              <div className={classes.label}>Mon thème</div>
              <div className={classes.selection} style={{ flexDirection: 'row' }}>
                {theme?.type !== 'professional' ? (
                  <Avatar
                    size={50}
                    className={classes.themeAvatar}
                    avatarCircleBackground={theme?.resources?.backgroundColor}
                    circleClassName={classes.circleClassName}
                  >
                    <img src={theme?.resources?.icon} alt="" className={classes.avatarStyle} height={90} />
                  </Avatar>
                ) : (
                  undefined
                )}
                <p className={classes.text}>{theme?.title}</p>
              </div>
            </div>
            {activities && (
              <div className={classes.selectionContainer}>
                <div className={classes.label}>Mes activités</div>
                <div className={classes.selection}>
                  {activities.map((a) => (
                    <span className={classes.text}>• {a}</span>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MySelection;
