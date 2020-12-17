import React from 'react';
import classNames from 'utils/classNames';
import useStyles from './styles';
import Title from '../Title/Title';

interface Props {
  title: string;
  image?: string;
  logo?: string;
  number?: number;
  color: string;
  height?: string;
  logoHeight?: string;
  size?: number;
  font?: string;
  width?: number;
  className?: string;
}

const TitleImage = ({ title, image, logo, number, color, height, logoHeight, size, font, width, className }: Props) => {
  const classes = useStyles({
    color,
    size,
    font,
    width,
  });
  return (
    <div
      className={classNames(
        classes.container,
        number ? classes.containerPositionWithNumber : classes.containerPosition,
        className,
      )}
    >
      {logo && <img src={logo} alt="startImg" className={classes.logo} height={logoHeight} />}
      <Title
        title={title}
        color={color}
        size={size}
        font={font}
        className={number || logo ? classes.positionWithNumber : classes.position}
      />
      <div className={classes.imageContainer}>
        {image && <img src={image} alt="trait" className={classes.image} height={height} />}
        {number && <div className={classes.number}>{number}</div>}
      </div>
    </div>
  );
};

export default TitleImage;
