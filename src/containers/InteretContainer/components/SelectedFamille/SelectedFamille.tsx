import React, { useState } from 'react';
import { Families } from 'common/requests/types';
import Dotdotdot from 'react-dotdotdot';
import Reset from 'components/common/Rest/Rest';
import close from 'assets/svg/picto poubelle.svg';
import useStyles from './styles';

interface IProps {
  famille: Families;
  handleClick: (id: number) => void;
  index: number;
  direction: 'vertical' | 'horizontal';
  type?: string;
}
const SelectedFamille = ({
 handleClick, famille, index, direction, type,
}: IProps) => {
  const [hover, setHover] = useState(false);
  const classes = useStyles({ direction, hover });

  const nom = famille?.nom;
  const res = nom && nom.replace(/\//g, '');
  const mouseEnter = () => {
    setHover(true);
  };
  const mouseLeave = () => {
    setHover(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.circle}>
        <div className={classes.imgWrapper}>
          <div
            className={classes.imageContainer}
            onClick={type === 'ordre' ? () => handleClick(index) : () => {}}
            onMouseEnter={mouseEnter}
            onMouseLeave={mouseLeave}
          >
            <img src={famille.resources[2]} alt="" />
          </div>
        </div>
      </div>
      <div className={classes.elements}>
        <Dotdotdot clamp={5}>
          <div className={classes.text}>{res}</div>
        </Dotdotdot>
      </div>
      {type !== 'ordre' && (
        <div onClick={type !== 'ordre' ? () => handleClick(index) : () => {}} className={classes.closeContainer}>
          {/* <Reset color="#420FAB" size={20} /> */}
          <img src={close} alt="" width={20} height={20} />

        </div>
      )}
    </div>
  );
};

export default SelectedFamille;
