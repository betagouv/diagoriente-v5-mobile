import React from 'react';
import classNames from 'utils/classNames';
import useStyles from './styles';
import Title from '../Title/Title';

interface Props {
  title: string;
  image?: string;
  number?: number;
  color: string;
  height?: string;
  size?: number;
  font?: string;
  width?: number;
  className?: string;
  classNameTitle?: string;
  backgroudColor?: string;
}

const TitleImage = ({
  title,
  image,
  number,
  color,
  height,
  size,
  font,
  width,
  className,
  classNameTitle,
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
        number ? classes.containerPositionWithNumber : classes.containerPosition,
      )}
    >
      <Title
        title={title}
        color={color}
        size={size}
        font={font}
        className={classNames(classNameTitle, number ? classes.positionWithNumber : classes.position)}
      />
      <div className={classes.imageContainer}>
        {image && <img src={image} alt="trait" className={classes.image} height={height} />}
        {number && <div className={classes.number}>{number}</div>}
      </div>
    </div>
  );
};

export default TitleImage;
