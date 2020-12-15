import React, { useRef, useEffect, useState } from 'react';
import { Tooltip } from '@material-ui/core';
import { Link, RouteComponentProps } from 'react-router-dom';
import { CompetenceValues, Competence, Theme } from 'requests/types';
import Title from 'components/common/TitleImage/TitleImage';
import RestLogo from 'components/common/Rest/Rest';
import Button from 'components/nextButton/nextButton';
import CancelButton from 'components/cancelButton/CancelButton';
import Avatar from 'components/common/AvatarTheme/AvatarTheme';
import PreviousButton from 'components/previousButton/previousButton';
import Select from 'components/inputs/SelectLevel/SelectLevel';
import Child from 'components/ui/ForwardRefChild/ForwardRefChild';
import classNames from 'utils/classNames';
import { decodeUri } from 'utils/url';
import blueline from 'assets/svg/blueline.svg';
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
        <Title
          title={theme && theme.type === 'professional' ? 'mes expériences pro' : 'mes expériences personnelles'}
          color="#223A7A"
          size={width > 380 ? 32 : 25}
          image={blueline}
          number={4}
        />

        <div className={classes.themeContainer}>
          <div className={classes.echelonWrapper}>
            <p className={classes.title}>
              En rapport avec les <b> compétences que tu as choisies</b>, comment te sens-tu ?
            </p>

            <div className={classes.echelonBackground}>
              <div className={classes.avatarContainer}>
                <Avatar
                  title={theme?.title}
                  size={95}
                  className={classes.themeAvatar}
                  squareContainerClassName={classes.squareContainerClassName}
                  titleClassName={classes.titleClassName}
                >
                  <img src={theme?.resources?.icon} alt="" className={classes.avatarStyle} height={90} />
                </Avatar>
              </div>
              <div className={classes.dataOptions}>
                {activities.slice(0, 4).map((activity) => (
                  <div key={activity}>{activity}</div>
                ))}
              </div>
            </div>

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
      <div className={classes.previousNext}>
        <div>
          <Link
            to={`/experience/skill/${match.params.themeId}/competences${location.search}`}
            className={classes.btnpreced}
          >
            <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
          </Link>
        </div>
        <div>
          <Button
            fetching={addSkillState}
            disabled={!(competencesValues.length === competences.length)}
            onClick={addSkill}
          />{' '}
        </div>
      </div>
    </div>
  );
};
export default SkillCompetencesValues;
