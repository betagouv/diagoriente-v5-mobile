import React, { useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useTheme } from 'requests/themes';
import { Theme } from 'requests/types';
import { Tooltip } from '@material-ui/core';
import classNames from 'utils/classNames';
import { decodeUri } from 'utils/url';
import Title from 'components/common/TitleImage/TitleImage';
import NextButton from 'components/nextButton/nextButton';
import Button from 'components/button/Button';
import PreviousButton from 'components/previousButton/previousButton';
import CancelButton from 'components/cancelButton/CancelButton';
import Spinner from 'components/SpinnerXp/Spinner';
import Child from 'components/ui/ForwardRefChild/ForwardRefChild';
import blueline from 'assets/svg/blueline.svg';
import { Unpacked } from 'utils/types';
import useStyles from './styles';

type Activity = Unpacked<Theme['activities']>;

interface Props extends RouteComponentProps<{ themeId: string }> {
  theme: Theme;
  activities: Activity[];
  setActivities: (activities: Activity[]) => void;
  isCreate?: boolean;
}

const ExperienceActivity = ({ match, activities, setActivities, history, theme, isCreate, location }: Props) => {
  const classes = useStyles();
  const { redirect } = decodeUri(location.search);
  const addActivity = (activite: Activity) => {
    setActivities([...activities, activite]);
  };

  const deleteActivity = (id: string) => {
    setActivities(activities.filter((act) => act.id !== id));
  };

  const { data, loading } = useTheme({ variables: { id: match.params.themeId } });

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });
  console.log('activite', activities.length);
  console.log('disabled', !activities.length);

  const onNavigate = () => {
    if (activities.length) history.push(`/experience/skill/${match.params.themeId}/competences${location.search}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title
          title={theme.type === 'professional' ? 'mes expériences pro' : 'mes expériences personnelles'}
          color="#223A7A"
          size={width > 380 ? 32 : 25}
          image={blueline}
          number={2}
        />
        <div className={classes.themeContainer}>
          <p className={classes.title}>
            Peux-tu nous en dire un peu plus sur
            <br />
            <strong>les activités </strong>
            que tu pratiques ?
          </p>
          <div className={classes.circleContainer}>
            {loading && (
              <div className={classes.loadingContainer}>
                {' '}
                <Spinner />
              </div>
            )}

            {data?.theme.activities
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
        </div>
      </div>
      <div className={classes.previousNext}>
        <div>
          {/*  {isCreate && ( */}
          <Link
            to={`/experience/${theme.type === 'professional' ? 'theme-pro' : 'theme'}${location.search}`}
            className={classes.btnpreced}
          >
            <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
          </Link>
          {/*  )} */}
        </div>

        <div onClick={onNavigate} className={classes.hideLine}>
          <NextButton disabled={!activities.length} />
        </div>
      </div>
    </div>
  );
};
export default ExperienceActivity;
