import React, { forwardRef, Ref } from 'react';
import useStyles from './styles';
import classNames from 'utils/classNames';
const ForwardRefChild = forwardRef(
  (props: React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, ref: Ref<HTMLDivElement>) => {
    const classes = useStyles();
    return (   <div ref={ref} {...props} className={classes.child} />
 )
  }


);
export default ForwardRefChild;
