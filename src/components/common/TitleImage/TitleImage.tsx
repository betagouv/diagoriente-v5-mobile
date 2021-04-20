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
  backgroudColor?: string;
  btnImage?: string;
  onClick?: () => void;
}

const TitleImage = ({
  title,
  image,
  logo,
  number,
  color,
  height,
  logoHeight,
  size,
  font,
  width,
  className,
  btnImage,
  onClick,
  backgroudColor,
}: Props) => {
  const classes = useStyles({
    color,
    size,
    font,
    width,
    backgroudColor,
  });
  return (
    <div
      className={classNames(
        className,
        classes.container,
        number || btnImage ? classes.containerPositionWithNumber : classes.containerPosition,
        className,
      )}
    >
      {logo && <img src={logo} alt="startImg" className={classes.logo} height={logoHeight} />}
      <Title
        title={title}
        color={color}
        size={size}
        font={font}
        className={number || logo || btnImage ? classes.positionWithNumber : classes.position}
      />
      <div className={classes.imageContainer}>
        {image && <img src={image} alt="trait" className={classes.image} height={height} />}
        {number && <div className={classes.number}>{number}</div>}
      </div>
      {btnImage && <img src={btnImage} alt="btnImg" className={classes.btnImage} onClick={onClick} />}
    </div>
  );
};

export default TitleImage;
