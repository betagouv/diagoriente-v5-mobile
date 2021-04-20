import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useTheme } from 'common/requests/themes';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import classNames from 'utils/classNames';
import Button from 'components/button/Button';
import Spinner from 'components/SpinnerXp/Spinner';
import ValidationButton from 'components/valideButton/valideButton';
import plusImg from 'assets/svg/pictoadd.svg';
import { Unpacked } from 'utils/types';
import useStyles from './styles';

type Activity = Unpacked<Theme['activities']>;

interface Props extends RouteComponentProps<{ themeId: string }> {
  theme: Theme;
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
}

const ExperienceActivity = ({ match, activities, setActivities, history, theme, location }: Props) => {
  const classes = useStyles();
  const addActivity = (activite: Activity) => {
    setActivities([...activities, activite]);
  };

  const deleteActivity = (id: string) => {
    setActivities(activities.filter((act) => act.id !== id));
  };

  const { data, loading } = useTheme({ variables: { id: match.params.themeId } });

  const addExtraActivity = () => {
    history.push(`/experience/skill/${match.params.themeId}/extraActivity${location.search}`);
  };

  const onNavigate = () => {
    if (activities.length) history.push(`/experience/skill/${match.params.themeId}/competences${location.search}`);
  };
  console.log('data?.theme.activities', data?.theme.activities);
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
        <div className={classes.themeContainer}>
          <span className={classes.title}>Peux-tu nous en dire un peu plus sur les activités que tu pratiques ?</span>
          <span className={classes.subtitle}>(plusieurs choix possibles)</span>
          <div className={classes.activitiesContainer}>
            {loading && (
              <div className={classes.loadingContainer}>
                <Spinner />
              </div>
            )}

            {data?.theme.activities
              .slice()
              .sort((a, b) => a.title.toLowerCase().charCodeAt(0) - b.title.toLowerCase().charCodeAt(0))
              .map((act) => {
                const selected = activities.find((e) => e.id === act.id);
                return (
                  <Button
                    variant="outlined"
                    className={classNames(classes.activity, selected && classes.selectedActivity)}
                    onClick={() => (!selected ? addActivity(act) : deleteActivity(act.id))}
                    childrenClassName={classes.childrenClassName}
                  >
                    {act.title}
                  </Button>
                );
              })}
          </div>
          <div className={classes.extraActivityLink} onClick={() => addExtraActivity()}>
            <img src={plusImg} alt="" />
            <span className={classes.extraActivityLabel}>Ajouter une activité non listée</span>
          </div>
        </div>
      </div>
      {activities.length > 0 && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default ExperienceActivity;
