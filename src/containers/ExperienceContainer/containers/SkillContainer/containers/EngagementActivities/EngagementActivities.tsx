import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Theme } from 'requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import TextField from '@material-ui/core/TextField/TextField';
import PreviousButton from 'components/previousButton/previousButton';
import NextButton from 'components/nextButton/nextButton';
import add from 'assets/svg/pictoadd.svg';
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
  console.log('optionsActivities', optionActivities);
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
          <p className={classes.title}>Peux-tu nous en dire un peu plus sur les activités que tu pratiques ?</p>
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
          <div className={classes.orDivider}>
            <div className={classes.halfDivider} />
            <div className={classes.title} style={{ width: 'fit-content' }}>
              ou
            </div>
            <div className={classes.halfDivider} />
          </div>
          <span className={classes.title}>Décris toi-même ton activité :</span>
          <TextField
            name="activity"
            value={activity}
            placeholder="Exemple : j’accompagne des jeunes dans la rédaction de leur CV"
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
          <p className={classes.activityCaracter}>{140 - activity.length} caractères restants</p>
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
