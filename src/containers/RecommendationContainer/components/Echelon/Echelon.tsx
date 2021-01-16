import React from 'react';
import EchelonComptence from 'components/common/CompetenceEchelon/CompetenceEchelon';
import useStyles from './styles';

const CompetenceEchelon = ({ value, title, niveau, mobile }: any) => {
  const classes = useStyles({ mobile });
  return (
    <div className={classes.echelonContainer}>
      <div className={classes.echelonRoot}>
        <span className={classes.title}>{title}</span>
        <span className={classes.niveau}>{niveau}</span>
      </div>
      <EchelonComptence value={value} />
    </div>
  );
};
export default CompetenceEchelon;
