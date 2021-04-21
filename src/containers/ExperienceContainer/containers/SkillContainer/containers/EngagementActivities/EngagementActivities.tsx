import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import ValidationButton from 'components/valideButton/valideButton';
import add from 'assets/svg/pictoadd.svg';
import useStyles from './styles';
import QuestionList from './components/QuestionList/QuestionList';

interface Props extends RouteComponentProps<{ themeId: string }> {
  theme: Theme;
  setOptionActivities: (optionsActivities: { id: string; title: string }[][]) => void;
  optionActivities: { id: string; title: string }[][];
  activity: string;
}

const EngagementActivities = ({
  history,
  match,
  theme,
  location,
  setOptionActivities,
  optionActivities,
  activity,
}: Props) => {
  const classes = useStyles();
  const [valid, setValid] = useState([] as boolean[]);

  const addActivityRow = () => {
    setOptionActivities([...optionActivities, []]);
  };

  const handleValidate = (isValid: boolean, index: number) => {
    const nextValid = [...valid];
    nextValid[index] = isValid;
    setValid(nextValid);
  };

  const clearValid = (index: number) => {
    setValid(valid.filter((v, i) => i !== index));
  };

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
                />
              ))}
              {optionActivities[0].length !== 0 && valid.findIndex((e) => !e) === -1 && (
                <div className={classes.extraActivityLink} onClick={addActivityRow}>
                  <img src={add} alt="" />
                  <span className={classes.extraActivityLabel}>Ajouter une autre activité</span>
                </div>
              )}
            </div>
            <div className={classes.extraActivityLink} onClick={() => addExtraActivity()}>
              <img src={add} alt="" />
              <span className={classes.extraActivityLabel}>Ajouter une activité non listée</span>
            </div>
          </div>
        </div>
      </div>
      {optionActivities[0].length !== 0 && valid.findIndex((e) => !e) === -1 && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default EngagementActivities;
