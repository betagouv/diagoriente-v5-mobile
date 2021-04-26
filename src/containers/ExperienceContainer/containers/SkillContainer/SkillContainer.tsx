import React, { useState, useEffect, useContext, useMemo } from 'react';
import path from 'path';
import moment from 'moment';
import { useWillUnmount } from 'common/hooks/useLifeCycle';
import { RouteComponentProps, Switch, Route, Redirect } from 'react-router-dom';
import { useTheme } from 'common/requests/themes';
import { useAddSkill, useUpdateSkill, useLazySkill } from 'common/requests/skills';
import ParcourContext from 'common/contexts/ParcourContext';
import NotFoundPage from 'components/layout/NotFoundPage/NotFoundPage';
import SnackBar from 'components/SnackBar/SnackBar';
import Spinner from 'components/SpinnerXp/Spinner';
import { decodeUri } from 'utils/url';
import { SkillType, Competence } from 'common/requests/types';
import SkillActivities from './containers/SkillActivities';
import ExtraActivity from './containers/ExtraActivity';
import SkillCompetences from './containers/SkillCompetences';
import SkillCompetencesValues from './containers/SkillCompetencesValues/SkillCompetencesValues';
import SuccessCompetences from './containers/SuccessCompetences/SuccessCompetences';
import DoneCompetences from './containers/DoneCompetences/DoneCompetences';
import EngagementActivites from './containers/EngagementActivities/EngagementActivities';
import EngagementContext from './containers/EngagementContext/EngagementContext';
import EngagementOrganization from './containers/EngagementOrganization/EngagementOrganization';
import EngagementDate from './containers/EngagementDate/EngagementDate';
import SkillDate from './containers/SkillDate/SkillDate';

import useStyles from './style';

const SkillContainer = ({ match, location, history }: RouteComponentProps<{ themeId: string }>) => {
  const classes = useStyles();
  const { redirect } = decodeUri(location.search);

  const { data, loading } = useTheme({ variables: { id: match.params.themeId } });
  const [skillCall, skillState] = useLazySkill();
  const { parcours, setParcours } = useContext(ParcourContext);
  const selectedSkillId = useMemo(() => {
    const foundSkill = parcours?.skills.find(
      (skill) => skill.theme?.id === match.params.themeId && skill.theme.type !== 'engagement',
    );
    return foundSkill?.id;
  }, [parcours, match.params.themeId]);

  const [activities, setActivities] = useState([] as SkillType['activities']);
  const [extraActivity, setExtraActivity] = useState('');
  const [competences, setCompetences] = useState([] as Competence[]);
  const [competencesValues, setCompetencesValues] = useState([] as { id: string; value: number }[]);

  const [context, setContext] = useState('');
  const [organization, setOrganization] = useState('');

  const [startDate, setStartDate] = useState(moment().format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(moment().format('YYYY-MM-DD'));

  const [optionActivities, setOptionActivities] = useState([[]] as { id: string; title: string }[][]);
  const [activity, setActivity] = useState('');

  const [addSkillCall, addSkillState] = useAddSkill();
  const [updateSkillCall, updateSkillState] = useUpdateSkill();

  const [openSnackBar, setOpenSnackBar] = useState(false);

  const [errorText, setErrorText] = useState('');

  const renderError = () => {
    let localText = '';
    const isBeginDateValid = moment(startDate).isAfter(moment());
    const isEndDateValid = moment(endDate).isBefore(moment(startDate));
    // comments
    if (isBeginDateValid) {
      localText = 'La date début doit être ultérieur à la date actuelle!';
      return localText;
    }
    if (endDate) {
      if (isEndDateValid) {
        localText = 'La date de fin doit être supérieur à la date de début!';
        return localText;
      }
    }

    return localText;
  };

  useEffect(() => {
    setOpenSnackBar(!!addSkillState.error);
  }, [addSkillState]);

  const handleCloseSB = () => {
    if (addSkillState.error) setOpenSnackBar(false);
  };

  useEffect(() => {
    if (selectedSkillId) skillCall({ variables: { id: selectedSkillId } });
    // eslint-disable-next-line
  }, [selectedSkillId]);

  useEffect(() => {
    if (skillState.data) {
      const selectedSkill = skillState.data.skill;
      setActivities(selectedSkill.activities);
      setCompetences(selectedSkill.competences.map((c) => c._id));
      setCompetencesValues(selectedSkill.competences.map((c) => ({ id: c._id.id, value: c.value })));
      if (selectedSkill.engagement) {
        setContext(selectedSkill.engagement.context?.id);
        setStartDate(moment(selectedSkill.engagement.startDate).format('YYYY-MM-DD'));
        setEndDate(moment(selectedSkill.engagement.endDate).format('YYYY-MM-DD'));
        setOptionActivities(
          selectedSkill.engagement.options.map((question) =>
            question.option.map((q) => ({ id: q.id, title: q.title })),
          ),
        );
        setActivity(selectedSkill.engagement.activity);
      }
    }
  }, [skillState.data]);

  useEffect(() => {
    const d = localStorage.getItem('optionActivities');
    if (d) {
      const activityData = JSON.parse(d);
      setOptionActivities(activityData.theme === match.params.themeId ? activityData.optionActivities : [[]]);
    }
    // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('optionActivities', JSON.stringify({ theme: match.params.themeId, optionActivities }));
    } // eslint-disable-next-line
  }, [optionActivities, match.params.themeId]);

  useEffect(() => {
    const d = localStorage.getItem('activity');
    if (d) {
      const activityData = JSON.parse(d);
      setActivity(activityData.theme === match.params.themeId ? activityData.activity : '');
    }
    // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('activity', JSON.stringify({ theme: match.params.themeId, activity }));
    } // eslint-disable-next-line
  }, [activity, match.params.themeId]);

  useEffect(() => {
    const d = localStorage.getItem('activities');
    if (d && !selectedSkillId) {
      const activityData = JSON.parse(d);
      setActivities(activityData.theme === match.params.themeId ? activityData.activities : []);
    }
    // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('activities', JSON.stringify({ theme: match.params.themeId, activities }));
    }
    // eslint-disable-next-line
  }, [activities, match.params.themeId]);

  useEffect(() => {
    const d = localStorage.getItem('extraActivity');
    if (d) {
      const activityData = JSON.parse(d);
      setExtraActivity(activityData.theme === match.params.themeId ? activityData.extraActivity : '');
    }
    // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('extraActivity', JSON.stringify({ theme: match.params.themeId, extraActivity }));
    } // eslint-disable-next-line
  }, [extraActivity, match.params.themeId]);

  useEffect(() => {
    const d = localStorage.getItem('competences');
    if (d && !selectedSkillId) {
      const competencesData = JSON.parse(d);
      setCompetences(competencesData.theme === match.params.themeId ? competencesData.competences : []);
    } // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('competences', JSON.stringify({ theme: match.params.themeId, competences }));
    } // eslint-disable-next-line
  }, [competences, match.params.themeId]);

  useEffect(() => {
    const d = localStorage.getItem('competencesValues');
    if (d && !selectedSkillId) {
      const competencesData = JSON.parse(d);
      setCompetencesValues(competencesData.theme === match.params.themeId ? competencesData.competencesValues : []);
    } // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('competencesValues', JSON.stringify({ theme: match.params.themeId, competencesValues }));
    } // eslint-disable-next-line
  }, [competencesValues, match.params.themeId]);

  useEffect(() => {
    const d = localStorage.getItem('context');
    if (d && !selectedSkillId) {
      const contextData = JSON.parse(d);
      setContext(contextData.theme === match.params.themeId ? contextData.context : '');
    } // eslint-disable-next-line
  }, [match.params.themeId]);

  useEffect(() => {
    if (!selectedSkillId) {
      localStorage.setItem('context', JSON.stringify({ theme: match.params.themeId, context }));
    } // eslint-disable-next-line
  }, [context, match.params.themeId]);

  const valuesNext = () => {
    if (data?.theme.type === 'engagement') {
      history.push(`/experience/skill/${match.params.themeId}/context`);
    } else {
      history.push(`/experience/skill/${match.params.themeId}/skillDate`);
    }
  };

  const addSkill = () => {
    const error = renderError();
    if (!error) {
      if (data) {
        setErrorText('');
        addSkillCall({
          variables: {
            theme: data.theme.id,
            activities: activities.map((a) => a.id),
            competences: competencesValues.map((competence) => ({ _id: competence.id, value: competence.value })),
            extraActivity,
            startDate,
            endDate: endDate !== 'Invalid date' ? endDate : moment().format('YYYY-MM-DD'),
          },
        });
      }
    } else {
      setErrorText(error);
    }
  };

  const addSkillEngagement = () => {
    if (data) {
      addSkillCall({
        variables: {
          theme: data.theme.id,
          competences: competencesValues.map((competence) => ({ _id: competence.id, value: competence.value })),
          engagement: {
            startDate,
            endDate,
            context,
            organization,
            options: optionActivities.filter((o) => o.length > 0).map((option) => option.map((o) => o.id)),
            activity,
          },
        },
      });
    }
  };

  const editSkill = () => {
    const error = renderError();
    if (selectedSkillId) {
      if (!error) {
        updateSkillCall({
          variables: {
            id: selectedSkillId,
            activities: activities.map((a) => a.id),
            competences: competencesValues.map((competence) => ({ _id: competence.id, value: competence.value })),
            extraActivity,
            startDate,
            endDate: endDate !== 'Invalid date' ? endDate : moment().format('YYYY-MM-DD'),
          },
        });
      } else {
        setErrorText(error);
      }
    }
  };

  const editSkillEngagement = () => {
    if (selectedSkillId) {
      updateSkillCall({
        variables: {
          id: selectedSkillId,
          competences: competencesValues.map((competence) => ({ _id: competence.id, value: competence.value })),
          engagement: {
            startDate,
            endDate,
            context,
            organization,
            options: optionActivities.map((option) => option.map((o) => o.id)),
            activity,
          },
        },
      });
    }
  };
  useEffect(() => {
    if (addSkillState.called && addSkillState.data) {
      setParcours(addSkillState.data.addSkill);
      history.push({
        pathname: `/experience/skill/${match.params.themeId}/success`,
        search: redirect || 'add',
      });
      localStorage.removeItem('theme');
      localStorage.removeItem('activities');
      localStorage.removeItem('competences');
      localStorage.removeItem('competencesValues');
      localStorage.removeItem('optionActivities');
      localStorage.removeItem('context');
    } // eslint-disable-next-line
  }, [addSkillState.data, addSkillState.called]);

  useEffect(() => {
    if (updateSkillState.called && updateSkillState.data) {
      setParcours(updateSkillState.data.updateSkill);
      // history.push(`/profile/experience?type=${data?.theme.type}`);
      history.push({
        pathname: `/experience/skill/${match.params.themeId}/success`,
        search: location.search || 'edit',
      });
      localStorage.removeItem('theme');
      localStorage.removeItem('activities');
      localStorage.removeItem('competences');
      localStorage.removeItem('competencesValues');
      localStorage.removeItem('optionActivities');
      localStorage.removeItem('context');
    } // eslint-disable-next-line
  }, [updateSkillState.data, updateSkillState.called]);
  useWillUnmount(() => {
    localStorage.removeItem('theme');
    localStorage.removeItem('activities');
    localStorage.removeItem('competences');
    localStorage.removeItem('competencesValues');
    localStorage.removeItem('optionActivities');
    localStorage.removeItem('context');
    localStorage.removeItem('activity');
  });
  if (loading || skillState.loading) {
    return (
      <div className={classes.loadingContainer}>
        <Spinner />
      </div>
    );
  }
  if (!data) return <NotFoundPage />;

  if (match.isExact) {
    return <Redirect to={path.join(match.url, `/activities${location.search}`)} />;
  }

  const activitiesTitles =
    data?.theme.type === 'engagement'
      ? optionActivities.map((e) => e.map((o) => o.title).join(' '))
      : activities.map((a) => a.title);
  if (data?.theme.type === 'engagement' && activity) activitiesTitles.push(activity);
  if (data?.theme.type !== 'engagement' && extraActivity) activitiesTitles.push(extraActivity);

  return (
    <>
      <SnackBar
        variant="error"
        message={addSkillState.error ? addSkillState.error.graphQLErrors[0].message : ''}
        open={openSnackBar}
        handleClose={handleCloseSB}
      />

      <Switch>
        <Route
          render={(props) =>
            data.theme.type === 'engagement' ? (
              <EngagementActivites
                {...(props as any)}
                theme={data.theme}
                setOptionActivities={setOptionActivities}
                optionActivities={optionActivities}
                activity={activity}
              />
            ) : (
              <SkillActivities
                {...(props as any)}
                activities={activities}
                setActivities={setActivities}
                theme={data.theme}
              />
            )
          }
          path={`${match.path}/activities`}
          exact
        />
        <Route
          render={(props) =>
            data.theme.type === 'engagement' ? (
              <ExtraActivity
                {...(props as any)}
                extraActivity={activity}
                setExtraActivity={setActivity}
                theme={data.theme}
              />
            ) : (
              <ExtraActivity
                {...(props as any)}
                extraActivity={extraActivity}
                setExtraActivity={setExtraActivity}
                theme={data.theme}
              />
            )
          }
          path={`${match.path}/extraActivity`}
          exact
        />
        <Route
          render={(props) => (
            // if (!activities.length) return <Redirect to={path.join(match.url, `/activities${location.search}`)} />;
            <SkillCompetences
              {...(props as any)}
              competences={competences}
              setCompetences={setCompetences}
              theme={data.theme}
              activities={activitiesTitles}
            />
          )}
          path={`${match.path}/competences`}
          exact
        />
        <Route
          render={(props) => {
            if (!competences.length) return <Redirect to={path.join(match.url, `/competences${location.search}`)} />;
            return (
              <SkillCompetencesValues
                {...(props as any)}
                competencesValues={competencesValues}
                setCompetencesValues={setCompetencesValues}
                competences={competences}
                valuesNext={valuesNext}
                /*  addSkill={selectedSkillId ? editSkill : addSkill}
                addSkillState={selectedSkillId ? updateSkillState.loading : addSkillState.loading} */
                theme={data.theme}
                isCreate={!selectedSkillId}
                activities={activitiesTitles}
              />
            );
          }}
          path={`${match.path}/competencesValues`}
          exact
        />

        <Route
          render={(props) => (
            <EngagementContext
              {...(props as any)}
              setContext={setContext}
              contextCheck={context}
              theme={data.theme}
              activities={activitiesTitles}
            />
          )}
          path={`${match.path}/context`}
          exact
        />
        <Route
          render={(props) => (
            <EngagementOrganization
              {...(props as any)}
              setOrganization={setOrganization}
              organization={organization}
              theme={data.theme}
              activities={activitiesTitles}
            />
          )}
          path={`${match.path}/organization`}
          exact
        />
        <Route
          render={(props) => (
            <EngagementDate
              {...(props as any)}
              setStartDate={setStartDate}
              startDate={startDate}
              endDate={endDate}
              setEndDate={setEndDate}
              addSkill={selectedSkillId ? editSkillEngagement : addSkillEngagement}
              theme={data.theme}
              activities={activitiesTitles}
            />
          )}
          path={`${match.path}/date`}
          exact
        />
        <Route
          render={(props) => (
            <SkillDate
              {...(props as any)}
              startDate=""
              setStartDate={setStartDate}
              endDate=""
              setEndDate={setEndDate}
              addSkillState={selectedSkillId ? updateSkillState.loading : addSkillState.loading}
              addSkill={selectedSkillId ? editSkill : addSkill}
              theme={data.theme}
              activities={activitiesTitles}
              errorText={errorText}
            />
          )}
          path={`${match.path}/skillDate`}
          exact
        />
        <Route
          render={(props) => <SuccessCompetences {...(props as any)} theme={data.theme} />}
          path={`${match.path}/success`}
          exact
        />
        <Route
          render={(props) => <DoneCompetences {...(props as any)} theme={data.theme} />}
          path={`${match.path}/done`}
          exact
        />
        <Route component={NotFoundPage} />
      </Switch>
    </>
  );
};

export default SkillContainer;
