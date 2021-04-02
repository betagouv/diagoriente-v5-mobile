import React, { useState, useEffect } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useContext } from 'requests/context';
import { Theme } from 'requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import Grid from '@material-ui/core/Grid';
import NextButton from 'components/nextButton/nextButton';
import PreviousButton from 'components/previousButton/previousButton';
import Context from './components/Context/Context';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  setContext: (e: string) => void;
  contextCheck: string;
  theme: Theme | null;
  activities: string[];
}

const EngagementContext = ({ history, setContext, contextCheck, theme, match, activities, location }: Props) => {
  const classes = useStyles();

  const { data } = useContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setContext(e.target.checked ? id : '');
  };
  const onNavigate = () => {
    {
      contextCheck && history.push(`/experience/skill/${match.params.themeId}/date${location.search}`);
    }
  };

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });
  return (
    <div className={classes.root}>
      <BreadCrumb theme={theme} activities={activities} />
      <div className={classes.container}>
        <div className={classes.themeContainer}>
          <p className={classes.title}>Dans quel cadre s’est déroulée cette expérience d’engagement</p>
          <Grid container spacing={0} className={classes.contextContainer}>
            {data?.contexts.data.map((context) => (
              <Context
                title={context.title}
                checked={context.id === contextCheck}
                handleChange={(e) => handleChange(e, context.id)}
                icon={context.icon}
                key={context.id}
              />
            ))}
          </Grid>

          <div className={classes.previousNext}>
            <Link
              //   to="/experience"
              to={`/experience/skill/${match.params.themeId}/competencesValues${location.search}`}
              className={classes.hideLine}
            >
              <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
            </Link>

            <div onClick={onNavigate} className={classes.hideLine}>
              <NextButton disabled={!contextCheck} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default EngagementContext;
