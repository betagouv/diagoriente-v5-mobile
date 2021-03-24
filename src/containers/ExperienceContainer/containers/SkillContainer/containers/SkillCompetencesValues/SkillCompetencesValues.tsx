import React, { useRef, useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { CompetenceValues, Competence, Theme } from 'requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import Select from 'components/inputs/SelectLevel/SelectLevel';
import ValidationButton from 'components/valideButton/valideButton';
import { decodeUri } from 'utils/url';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  competencesValues: CompetenceValues[];
  setCompetencesValues: (CompetencesValues: CompetenceValues[]) => void;
  competences: Competence[];
  addSkill: () => void;
  addSkillState: boolean;
  theme: Theme | null;
  isCreate?: boolean;
  activities: string[];
}

const SkillCompetencesValues = ({
  match,
  competencesValues,
  setCompetencesValues,
  competences,
  addSkill,
  addSkillState,
  history,
  theme,
  isCreate,
  location,
  activities,
}: Props) => {
  const classes = useStyles();
  const circleRef = useRef([] as (HTMLDivElement | null)[]);
  const arrowRef = useRef(null as HTMLDivElement | null);

  // eslint-disable-next-line
  const [fixRef, setFixRef] = useState(0);
  const { redirect } = decodeUri(location.search);
  const pointClick = (id: string, value: number) => {
    const nextCompetenceValues = [...competencesValues];
    const index = nextCompetenceValues.findIndex((v) => v.id === id);
    if (index === -1) {
      nextCompetenceValues.push({ id, value });
    } else {
      nextCompetenceValues[index] = { id, value };
    }
    setCompetencesValues(nextCompetenceValues);
  };

  const handleNextClick = () => {
    if (competencesValues.length === competences.length) addSkill();
  };

  useEffect(() => {
    if (competencesValues.length) {
      setFixRef(1);
    }
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    setCompetencesValues(competencesValues.filter((comp) => competences.find((id) => comp.id === id.id)));
    // eslint-disable-next-line
  }, [competences]);

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <BreadCrumb
          level={3}
          routes={[
            { title: 'Thème', url: `/experience/${theme?.type === 'professional' ? 'theme-pro' : 'theme'}` },
            { title: 'Activités', url: `/experience/skill/${match.params.themeId}/activities${location.search}` },
            { title: 'Compétences', url: '' },
          ]}
        />
        <div className={classes.themeContainer}>
          <div className={classes.echelonWrapper}>
            <p className={classes.title}>En rapport avec les compétences que tu as choisies, comment te sens-tu ?</p>
            <div className={classes.echelonContainer}>
              <div className={classes.competencesContainer}>
                {competences.map((competence, i) => {
                  const valueCompetence = competencesValues.find((selected) => selected.id === competence.id);
                  let width = 0;
                  if (valueCompetence && arrowRef.current) {
                    const circle = circleRef.current[valueCompetence.value - 1];

                    if (circle) {
                      width = circle.getBoundingClientRect().left - arrowRef.current.getBoundingClientRect().left + 9;
                    }
                  }
                  return (
                    <div key={competence.id} className={classes.competencesValues}>
                      <Select skill={competence} handleLevelSelection={pointClick} selectedLevels={competencesValues} />
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
      {competencesValues.length === competences.length && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => handleNextClick()} />
      )}
    </div>
  );
};
export default SkillCompetencesValues;
