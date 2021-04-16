import React, { useState, useEffect } from 'react';
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

const EngagementContext = ({
 history, setContext, contextCheck, theme, match, activities, location,
}: Props) => {
  const classes = useStyles();

  const { data } = useContext();
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>, id: string) => {
    setContext(e.target.checked ? id : '');
  };
  const onNavigate = () => {
    {
      contextCheck && history.push(`/experience/skill/${match.params.themeId}/organization${location.search}`);
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
      <div className={classes.themeContainer}>
        <p className={classes.title}>Dans quel cadre s’est déroulée cette expérience d’engagement ?</p>
        <div className={classes.contextContainer}>
          {data?.contexts.data.map((context) => (
            <Context
              title={context.title}
              checked={context.id === contextCheck}
              handleChange={(e) => handleChange(e, context.id)}
              icon={context.icon}
              key={context.id}
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
