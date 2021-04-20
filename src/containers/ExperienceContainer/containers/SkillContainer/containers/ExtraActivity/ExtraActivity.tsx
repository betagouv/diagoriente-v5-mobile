import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import TextField from '@material-ui/core/TextField/TextField';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  extraActivity: string;
  setExtraActivity: (activity: string) => void;
  theme: Theme;
}

const ExtraActivity = ({ match, history, extraActivity, setExtraActivity, theme, location }: Props) => {
  const classes = useStyles();

  const activityChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 140) setExtraActivity(e.target.value);
  };

  const onNavigate = () => {
    history.push(`/experience/skill/${match.params.themeId}/competences${location.search}`);
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
        <div className={classes.themeContainer}>
          <span className={classes.title}>Décris toi-même la ou les activités que tu pratiques :</span>
          <TextField
            name="extraActivity"
            value={extraActivity}
            placeholder="Exemple : je vends de la limonade"
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
          <p className={classes.activityCaracter}>{140 - extraActivity.length} caractères restants</p>
        </div>
      </div>
      {extraActivity.length > 0 && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default ExtraActivity;
