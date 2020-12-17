import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Theme } from 'requests/types';
import TextField from '@material-ui/core/TextField/TextField';
import PreviousButton from 'components/previousButton/previousButton';
import Title from 'components/common/TitleImage/TitleImage';
import NextButton from 'components/nextButton/nextButton';
import add from 'assets/svg/pictoadd.svg';
import blueline from 'assets/svg/blueline.svg';
import useStyles from './styles';
import QuestionList from './components/QuestionList/QuestionList';

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

  const onNavigate = () => {
    if (optionActivities[0].length === 0 ? activity.length : valid.findIndex((e) => !e) === -1)
      history.push(`/experience/skill/${match.params.themeId}/competences${location.search}`);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title
          title={theme && theme.type === 'engagement' ? 'mes expériences d’engagement' : 'mes expériences personnelles'}
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
            <br />
          </p>
          <div className={classes.selectRoot}>
            <div className={classes.rowActivityWidth}>
              <span>Choisis en déroulant les menus ou ajoute tes propre activités</span>
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

                <img src={add} alt="" height={24} className={classes.addIcon} onClick={addActivityRow} />
              </div>
            </div>
            <p className={classes.activityTitle}>Ou décris toi-même une activité:</p>

            <TextField
              name="activity"
              value={activity}
              placeholder="Ecrivez ici votre activité (140 caractères max)"
              onChange={activityChange}
              InputProps={{
                classes: {
                  input: classes.defaultValue,
                },
              }}
              classes={{ root: classes['MuiTextField-root'] }}
              rows={3}
              multiline
              className={classes.textArea}
              variant="outlined"
            />
            <p className={classes.activityCaracter}>{140 - activity.length} caractères restant</p>
          </div>
        </div>
      </div>
      <div className={classes.previousNext}>
        {/*  {isCreate && ( */}
        <Link
          to={{
            pathname: '/experience/theme',
            search: location.search ? `${location.search}&type=${theme.type}` : `?type=${theme.type}`,
          }}
          className={classes.hideLine}
        >
          <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
        </Link>
        {/*  )} */}
        <div onClick={onNavigate} className={classes.hideLine}>
          <NextButton
            disabled={optionActivities[0].length === 0 ? !activity.length : valid.findIndex((e) => !e) !== -1}
          />
        </div>
      </div>
    </div>
  );
};
export default EngagementActivities;
