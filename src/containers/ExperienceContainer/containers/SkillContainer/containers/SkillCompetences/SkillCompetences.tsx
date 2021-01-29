import React, { useEffect, useState, useRef, useContext } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { useCompetences } from 'requests/competences';
import { Competence, Theme } from 'requests/types';
import Title from 'components/common/TitleImage/TitleImage';
import Grid from '@material-ui/core/Grid';
import Slide from '@material-ui/core/Slide';
import PreviousButton from 'components/previousButton/previousButton';
import NextButton from 'components/nextButton/nextButton';
import Button from 'components/button/Button';
import Spinner from 'components/SpinnerXp/Spinner';
import Child from 'components/ui/ForwardRefChild/ForwardRefChild';
import Popup from 'components/common/Popup/Popup';
import blueline from 'assets/svg/blueline.svg';
import useOnclickOutside from 'hooks/useOnclickOutside';
import classNames from 'utils/classNames';
import { decodeUri } from 'utils/url';
import useStyles from './styles';
import SelectionContext from 'contexts/SelectionContext';

interface Props extends RouteComponentProps<{ themeId: string }> {
  competences: Competence[];
  setCompetences: (Competences: Competence[]) => void;
  theme: Theme | null;
  isCreate?: boolean;
}

const ExperienceCompetence = ({ match, competences, setCompetences, theme, history, isCreate, location }: Props) => {
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

  useOnclickOutside(divInfo, (e: Event) => {
    if (
      currentBtn >= 0 &&
      document.getElementsByClassName('ignore-onclickoutside')[currentBtn].contains(e.target as any)
    ) {
      return;
    } else if (showInfo && divInfo) {
      setShowInfo(false);
    }
  });

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
    if (competences.length && competences.length <= 4)
      history.push(`/experience/skill/${match.params.themeId}/competencesValues${location.search}`);
    setOpened(false);
  };

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title
          title={
            theme && theme.type === 'engagement'
              ? 'mes expériences d’engagement'
              : theme && theme.type === 'professional'
              ? 'mes expériences pro'
              : 'mes expériences personnelles'
          }
          color="#223A7A"
          size={width > 380 ? 32 : 25}
          image={blueline}
          number={3}
        />

        <div className={classes.themeContainer}>
          <p className={classes.title}>
            En rapport avec ces activités, quelles sont
            <br />
            <strong>les compétences </strong>
            que tu mets en oeuvre ?
            <br />
            <small>(4 choix maximum) </small>
          </p>
          <Grid className={classes.circleContainer} container spacing={3}>
            {loading && (
              <div className={classes.loadingContainer}>
                {' '}
                <Spinner />
              </div>
            )}

            {data?.competences.data.map((comp, index) => {
              const selected = competences.find((e) => e.id === comp.id);
              const tooltip = theme?.tooltips.find((e) => e.competenceId === comp.id);

              return (
                <Grid key={comp.id} item xs={12} md={6}>
                  <Button
                    childrenClassName={classes.margin}
                    className={classNames(
                      'ignore-onclickoutside',
                      classes.competences,
                      showInfo && currentInfoId === comp.id && classes.infoDisplyed,
                      selected && classes.selectedCompetence,
                    )}
                    onClick={() => {
                      setCurrentBtn(index);
                      setShowInfo(false);
                      !selected
                        ? !showInfo || (showInfo && currentInfoId !== comp.id)
                          ? handleShowInfo(comp.id)
                          : addCompetence(comp as any)
                        : deleteCompetence(comp.id);
                    }}
                    ref={buttonRef}
                  >
                    {comp.title}
                  </Button>
                  <Slide direction="up" in={showInfo} mountOnEnter unmountOnExit>
                    <Child key={index} style={{ padding: '10px' }} ref={divInfo}>
                      <p style={{ width: '100%', color: '#FF0060' }}>
                        <b>Appuie deux fois sur la compétence pour la sélectionner</b>
                      </p>{' '}
                      {currentInfoIndex >= 0 && theme?.tooltips[currentInfoIndex].tooltip}{' '}
                    </Child>
                  </Slide>
                </Grid>
              );
            })}
          </Grid>
          <div className={classes.previousNext}>
            <Link
              //   to="/experience"
              to={`/experience/skill/${match.params.themeId}/activities${location.search}`}
              className={classes.hideLine}
            >
              <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
            </Link>

            <div onClick={onNavigate} className={classes.hideLine}>
              <NextButton disabled={!competences.length || competences.length > 4} />
            </div>
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
      </div>
    </div>
  );
};
export default ExperienceCompetence;
