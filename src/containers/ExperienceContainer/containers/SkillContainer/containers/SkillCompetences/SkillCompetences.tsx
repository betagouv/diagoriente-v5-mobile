import React, { useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { useCompetences } from 'common/requests/competences';
import { Competence, Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import Button from 'components/button/Button';
import Spinner from 'components/SpinnerXp/Spinner';
import Popup from 'components/common/Popup/Popup';
import Skill from 'components/common/SkillCheckbox/SkillCheckbox';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  competences: Competence[];
  setCompetences: (Competences: Competence[]) => void;
  theme: Theme | null;
  activities: string[];
}
const ExperienceCompetence = ({ match, competences, setCompetences, theme, history, activities, location }: Props) => {
  const classes = useStyles();
  const { data, loading } = useCompetences({ variables: theme?.type === 'engagement' ? { type: 'engagement' } : {} });
  const [opened, setOpened] = React.useState(false);
  const [text, setText] = React.useState('');
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(-1);
  const [openDescription, setOpenDescription] = useState(false);
  const handleClose = () => {
    setOpened(false);
  };
  const onNavigate = () => {
    if (competences.length && competences.length <= 4) {
      history.push(`/experience/skill/${match.params.themeId}/competencesValues${location.search}`);
    }
    setOpened(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <BreadCrumb
          level={3}
          routes={[
            { title: 'Thème', url: `/experience/${theme?.type === 'professional' ? 'theme-pro' : 'theme'}` },
            { title: 'Activités', url: `/experience/skill/${match.params.themeId}/activities${location.search}` },
            { title: 'Compétences', url: '' },
          ]}
          theme={theme}
          activities={activities}
        />
        <div className={classes.themeContainer}>
          <div className={classes.titleContainer}>
            <span className={classes.title}>
              En rapport avec ces activités, quelles sont les compétences que tu mets en oeuvre ?
            </span>
            <span>(4 choix maximum)</span>
          </div>
          <div className={classes.skillsContainer}>
            {loading && (
              <div className={classes.loadingContainer}>
                <Spinner />
              </div>
            )}
            {data?.competences.data.map((comp, index) => (
              <Skill
                label={comp.title}
                description={theme?.tooltips[index]?.tooltip}
                competence={comp}
                competences={competences}
                setCompetences={setCompetences}
                index={index}
                openedIndex={currentDescriptionIndex}
                setOpenedIndex={setCurrentDescriptionIndex}
                open={openDescription}
                setOpen={setOpenDescription}
                setErrorMsg={setText}
                setOpenModal={setOpened}
              />
            ))}
          </div>
        </div>
        <Popup open={opened} handleClose={handleClose} iconClassName={classes.iconClassName}>
          <div className={classes.popupContainer}>
            <p className={classes.popupDescription}>{text}</p>
            <Button className={classes.incluse} onClick={handleClose}>
              compris
            </Button>
          </div>
        </Popup>
        {competences.length > 0 && competences.length < 5 && <div className={classes.emptyDiv} />}
      </div>
      {competences.length > 0 && competences.length < 5 && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default ExperienceCompetence;
