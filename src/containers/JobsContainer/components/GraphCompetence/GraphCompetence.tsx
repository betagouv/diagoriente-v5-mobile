/* eslint-disable default-case */
import React, { useState, useRef } from 'react';
import { echelon } from 'utils/generic';
import { useCompetences } from 'common/requests/competences';
import Divider from '@material-ui/core/Divider';
import Point from 'assets/svg/point.svg';
import useStyles from './styles';

interface IProps {
  competencesrequises: { _id: { id: string; title: string }; weight: number }[] | undefined;
  competenceUser: { id: string; value: number; count: number; title: string }[] | undefined;
}

const GraphCompetence = ({ competencesrequises, competenceUser }: IProps) => {
  const [select, setSelect] = useState('jobCompetence');

  const classes = useStyles({ select });
  const arrowRef = useRef(null as HTMLDivElement | null);
  const { data: competences } = useCompetences();
  const isExist = (id: string) => {
    let res = false;
    if (competenceUser?.length) {
      competenceUser.forEach((el) => {
        if (el.id === id && el.value !== 0) {
          res = true;
        }
      });
    }
    return res;
  };

  let competenceValue = 0;

  const getCompetenceValue = (id: string) => {
    competenceUser?.map((el) => {
      if (el.value === 1 && el.id === id) competenceValue = 1;
      if (el.value === 2 && el.id === id) competenceValue = 2;
      if (el.value === 3 && el.id === id) competenceValue = 3;
      if (el.value === 4 && el.id === id) competenceValue = 4;
    });
    return competenceValue;
  };

  const isLess = (id: string) => {
    let value = false;
    const valueRequis = competencesrequises?.find((selected) => selected._id.id === id);
    const valueUser = competenceUser?.find((el) => el.id === id);
    if (valueUser && valueRequis) {
      if (valueUser.value < valueRequis.weight) {
        value = true;
      } else {
        value = false;
      }
    }
    return value;
  };
  return (
    <div className={classes.root}>
      <div className={classes.header}>
        <div className={classes.titleJobCompetence} onClick={() => setSelect('jobCompetence')}>
          Les compétences requises pour ce métier
        </div>
        <div className={classes.titleParcoursCompetence} onClick={() => setSelect('parcoursCompetence')}>
          Tes meilleures compétences pour ce métier
        </div>
      </div>
      <div>
        <div className={classes.competencesContainer}>
          {competences?.competences.data.map((competence) => {
            let compValue = 0;
            if (competencesrequises && competencesrequises?.length !== 0) {
              const valueCompetence = competencesrequises.find((selected) => selected._id.id === competence.id);
              if (valueCompetence) {
                switch (valueCompetence.weight) {
                  case 1:
                    compValue = 1;
                    break;
                  case 2:
                    compValue = 2;
                    break;
                  case 3:
                    compValue = 3;
                    break;
                  case 4:
                    compValue = 4;
                    break;
                }
              }
            }

            return (
              <div
                key={competence.id}
                className={
                  select === 'parcoursCompetence' && (!isExist(competence.id) || isLess(competence.id))
                    ? classes.competencesValuesNotExist
                    : classes.competencesValues
                }
              >
                <p
                  className={classes.competenceTitle}
                  style={{
                    fontWeight:
                      (select === 'jobCompetence' && compValue === 4) ||
                      (select === 'parcoursCompetence' &&
                        isExist(competence.id) &&
                        !isLess(competence.id) &&
                        getCompetenceValue(competence.id) === 4)
                        ? 700
                        : 400,
                  }}
                >
                  {competence.title}
                </p>
                {select === 'jobCompetence' ? (
                  <div className={classes.pointsContainer} ref={arrowRef}>
                    {[...Array(compValue)].map((p, point) => (
                      // eslint-disable-next-line
                      <div key={point} className={classes.point} style={{ background: '#FFA600' }} />
                    ))}
                    {[...Array(4 - compValue)].map((p, point) => (
                      // eslint-disable-next-line
                      <div key={point} className={classes.point} style={{ background: '#FFD382' }} />
                    ))}
                  </div>
                ) : (
                  <div className={classes.pointsContainer} ref={arrowRef}>
                    {[...Array(getCompetenceValue(competence.id))].map((p, point) => (
                      // eslint-disable-next-line
                      <div
                        key={point}
                        className={classes.point}
                        style={{ background: isExist(competence.id) && !isLess(competence.id) ? '#00CFFF' : '#FFA600' }}
                      />
                    ))}
                    {[...Array(4 - getCompetenceValue(competence.id))].map((p, point) => (
                      // eslint-disable-next-line
                      <div
                        key={point}
                        className={classes.point}
                        style={{ background: isExist(competence.id) && !isLess(competence.id) ? '#7AE6FF' : '#FFD382' }}
                      />
                    ))}
                  </div>
                )}

                <br />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default GraphCompetence;
