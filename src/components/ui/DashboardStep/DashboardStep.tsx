import React from 'react';

import useStyles from './styles';

interface Props extends React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  background?: string;
  secondBackground?: string;
  title: string;
  initialChildren?: React.ReactChild;
  openChildren?: React.ReactChild;
  state?: 'closed' | 'initial' | 'open';
  image?: string;
  titleBackground?: string;
  isOpen?: boolean;
}

const DashboardStep = ({
  title,
  background,
  secondBackground,
  initialChildren,
  openChildren,
  state,
  image,
  titleBackground,
  isOpen,
  ...other
}: Props) => {
  const classes = useStyles({ background, secondBackground, state, isOpen });

  return (
    <div {...other} className={classes.container}>
      <div style={{ height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <div className={classes.wrapperTitleImage}>
          <div className={classes.avatarContainer}>
            <div className={classes.avatar}>{image && <img className={classes.image} alt="" src={image} />}</div>
          </div>
          <div style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
            <div className={classes.title}>
              {title}
              {titleBackground && <img src={titleBackground} alt="" className={classes.titleBackground} />}
            </div>
          </div>
        </div>

        {isOpen && (
          <div onClick={(e) => e.stopPropagation()} className={classes.openChildren}>
            {openChildren}
          </div>
        )}
      </div>
    </div>
  );
};

export default DashboardStep;
