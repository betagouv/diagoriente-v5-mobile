import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useCompetences } from 'common/requests/competences';
import { Competence, Theme } from 'common/requests/types';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import Button from 'components/button/Button';
import Spinner from 'components/SpinnerXp/Spinner';
import Popup from 'components/common/Popup/Popup';
import Skill from 'components/common/SkillCheckbox/SkillCheckbox';
import useOnclickOutside from 'common/hooks/useOnclickOutside';
import { decodeUri } from 'utils/url';
import ValidationButton from 'components/valideButton/valideButton';
import SelectionContext from 'common/contexts/SelectionContext';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  competences: Competence[];
  setCompetences: (Competences: Competence[]) => void;
  theme: Theme | null;
  isCreate?: boolean;
  activities: string[];
}

const ExperienceCompetence = ({
  match,
  competences,
  setCompetences,
  theme,
  history,
  isCreate,
  activities,
  location,
}: Props) => {
  const classes = useStyles();
  const refSlide = useRef(null);
  const { open, setOpen } = useContext(SelectionContext);

  const { data, loading } = useCompetences({ variables: theme?.type === 'engagement' ? { type: 'engagement' } : {} });
  const [opened, setOpened] = React.useState(false);
  const [text, setText] = React.useState('');
  const [showInfo, setShowInfo] = useState(false);
  const [currentInfoId, setCurrentInfoId] = useState('');
  const [currentInfoIndex, setCurrentInfoIndex] = useState(-1);

  const [currentBtn, setCurrentBtn] = useState(-1);
  const { redirect } = decodeUri(location.search);
  const divInfo = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [currentDescriptionIndex, setCurrentDescriptionIndex] = useState(-1);
  const [openDescription, setOpenDescription] = useState(false);

  useOnclickOutside(divInfo, (e: Event) => {
    if (
      currentBtn >= 0 &&
      document.getElementsByClassName('ignore-onclickoutside')[currentBtn].contains(e.target as any)
    ) {
    } else if (showInfo && divInfo) {
      setShowInfo(false);
    }
  });

  const handleShowDescription = (id: string) => {
    const index = theme?.tooltips.findIndex((e) => e.competenceId === id);

    {
      index !== undefined && setCurrentDescriptionIndex(index);
    }
    setCurrentInfoId(id);
    setShowInfo(true);
    setOpen(false);
  };

  const handleShowInfo = (id: string) => {
    const index = theme?.tooltips.findIndex((e) => e.competenceId === id);
    {
      index !== undefined && setCurrentInfoIndex(index);
    }
    setCurrentInfoId(id);
    setShowInfo(true);
    setOpen(false);
  };

  const addCompetence = (competence: Competence) => {
    setShowInfo(false);
    if (competences.length < 4) {
      setCompetences([...competences, competence]);
    } else if (competences.length === 4) {
      setText('Tu as déjà choisi 4 compétences');
      setOpened(true);
    }
  };

  const deleteCompetence = (id: string) => {
    setCompetences(competences.filter((comp) => comp.id !== id));
  };
  const handleClose = () => {
    setOpened(false);
  };
  const onclickBtn = () => {
    if (competences.length === 0) {
      setText('Tu as déjà choisi 4 compétences');
      setOpened(true);
    }
  };

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });
  const onNavigate = () => {
    if (competences.length && competences.length <= 4) {
      history.push(`/experience/skill/${match.params.themeId}/competencesValues${location.search}`);
    }
    setOpened(false);
  };
  console.log('comptences', data?.competences.data);
  console.log('comptencesSelected', competences);
  console.log('theme?.tooltips', theme?.tooltips);
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
