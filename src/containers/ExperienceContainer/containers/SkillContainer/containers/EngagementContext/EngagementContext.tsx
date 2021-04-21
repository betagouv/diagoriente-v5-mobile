import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useContext } from 'common/requests/context';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import ValidationButton from 'components/valideButton/valideButton';
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

  const onNavigate = () => {
    // eslint-disable-next-line @typescript-eslint/no-unused-expressions
    contextCheck && history.push(`/experience/skill/${match.params.themeId}/organization${location.search}`);
  };

  return (
    <div className={classes.root}>
      <BreadCrumb theme={theme} activities={activities} />
      <div className={classes.themeContainer}>
        <p className={classes.title}>Dans quel cadre s’est déroulée cette expérience d’engagement ?</p>
        <div className={classes.contextContainer}>
          {data?.contexts.data.map((context) => (
            <Context
              title={context.title}
              icon={context.icon}
              key={context.id}
              id={context.id}
              context={contextCheck}
              setContext={setContext}
            />
          ))}
        </div>
      </div>
      {contextCheck && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default EngagementContext;
