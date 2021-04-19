import React, { useState, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import ValidationButton from 'components/valideButton/valideButton';
import add from 'assets/svg/pictoadd.svg';
import useStyles from './styles';
import QuestionList from './components/QuestionList/QuestionList';
import classNames from 'utils/classNames';

interface Props extends RouteComponentProps<{ themeId: string }> {
  theme: Theme;
  isCreate?: boolean;
  setOptionActivities: (optionsActivities: { id: string; title: string }[][]) => void;
  optionActivities: { id: string; title: string }[][];
  activity: string;
  setActivity: (activity: string) => void;
}

const EngagementActivities = ({
  history,
  match,
  theme,
  isCreate,
  location,
  setOptionActivities,
  optionActivities,
  activity,
  setActivity,
}: Props) => {
  const classes = useStyles();
  const [valid, setValid] = useState([] as boolean[]);

  const addActivityRow = () => {
    setOptionActivities([...optionActivities, []]);
  };

  const activityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 140) setActivity(e.target.value);
  };

  const handleValidate = (isValid: boolean, index: number) => {
    const nextValid = [...valid];
    nextValid[index] = isValid;
    setValid(nextValid);
  };

  const clearValid = (index: number) => {
    setValid(valid.filter((v, i) => i !== index));
  };

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  const addExtraActivity = () => {
    history.push(`/experience/skill/${match.params.themeId}/extraActivity${location.search}`);
  };

  const onNavigate = () => {
    if (optionActivities[0].length === 0 ? activity.length : valid.findIndex((e) => !e) === -1) {
      history.push(`/experience/skill/${match.params.themeId}/competences${location.search}`);
    }
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <BreadCrumb
          level={2}
          routes={[
            { title: 'Thème', url: `/experience/${theme.type === 'professional' ? 'theme-pro' : 'theme'}` },
            { title: 'Activités', url: '' },
          ]}
          theme={theme}
        />
        <div className={classes.greyContainer}>
          <p className={classes.title}>Peux-tu nous en dire un peu plus sur les activités que tu pratiques ?</p>
          <div className={classes.ActivitiesContainer}>
            <div className={classes.selectGrid}>
              {optionActivities.map((q, index) => (
                <QuestionList
                  index={index}
                  optionActivities={optionActivities}
                  setOptionActivities={setOptionActivities}
                  handleValidate={handleValidate}
                  clearValid={clearValid}
                  valid={valid}
                />
              ))}
              {/* optionActivities[0].length !== 0 &&  */ valid.findIndex((e) => !e) === -1 && (
                <div className={classNames(classes.addContainer, classes.addMargin)} onClick={addActivityRow}>
                  <img src={add} alt="" />
                  <span className={classes.extraActivityLabel}>Ajouter une autre activité</span>
                </div>
              )}
            </div>
            <div className={classes.addContainer} onClick={() => addExtraActivity()}>
              <img src={add} alt="" />
              <span className={classes.extraActivityLabel}>Ajouter une activité non listée</span>
            </div>
          </div>
        </div>
      </div>
      {/* optionActivities[0].length !== 0 && */ valid.findIndex((e) => !e) === -1 && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default EngagementActivities;
