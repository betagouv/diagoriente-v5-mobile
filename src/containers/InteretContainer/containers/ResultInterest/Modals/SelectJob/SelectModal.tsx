import React, { useContext, useEffect, useState, useRef } from 'react';
import parcoursContext from 'contexts/ParcourContext';
import useOnclickOutside from 'hooks/useOnclickOutside';
import { updateParcours, useUpdateParcour } from 'requests/parcours';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Select from 'containers/JobsContainer/components/Select/Select';
import { useHistory } from 'react-router-dom';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import CircularProgress from '@material-ui/core/CircularProgress/CircularProgress';

import Avatar from 'components/common/AvatarTheme/AvatarTheme';
// import CheckBox from 'components/inputs/CheckBox/CheckBox';
import Button from 'components/button/Button';
import classNames from 'utils/classNames';
import { useAccessibility } from 'requests/accessibility';
import useStyles from './style';
import checked from 'assets/form/checkboxchecked.svg';
// import Arrow from 'containers/ProfilContainer/components/Arrow/Arrow';
// import redarrow from 'assets/svg/redarrow.svg';
import Divider from '@material-ui/core/Divider';

import Arrow from 'assets/svg/arrow';
enum Steps {
  THEMES,
  ACCESSIBILITY,
}

const selectTheme = createMuiTheme({
  palette: {
    success: {
      main: '#00B2DB',
    },
    secondary: {
      main: '#7AE6FF',
    },
  },
});

const SelectModal = () => {
  const divSelect = useRef(null);
  const history = useHistory();
  const classes = useStyles();
  const [selectedThemes, setSelectedThemes] = useState<string[]>([]);
  const [accessibilityCall, accessibilityState] = useAccessibility();
  const { parcours, setParcours } = useContext(parcoursContext);
  const [step, setStep] = useState<Steps>(Steps.THEMES);
  const [updateCall, updateState] = useUpdateParcour();
  const [open, setOpen] = useState(false);
  const [openType, setOpenType] = useState(false);

  const [accessibility, setAccessibility] = useState('');
  const isChecked = (id: string): any => selectedThemes.includes(id);
  const divType = useRef<HTMLDivElement>(null);
  var x = false;

  useEffect(() => {
    accessibilityCall();
    // eslint-disable-next-line
  }, []);

  useOnclickOutside(divSelect, () => {
    if (open) setOpen(false);
  });

  const addTheme = (id: string) => {
    const array = [...selectedThemes];
    if (isChecked(id)) {
      const index = array.indexOf(id);
      array.splice(index, 1);
      setSelectedThemes(array);
    } else {
      array.push(id);
      setSelectedThemes(array);
    }
  };

  const getAccebilityName = (id: string | undefined) => {
    if (id) {
      const niveau = accessibilityState.data?.accessibilities.data.find((o) => {
        return o.id === id;
      });
      return niveau?.name;
    }
    return 'Niveau de diplôme';
  };
  const onValide = () => {
    updateCall({ variables: { skillsAlgo: selectedThemes, accessibility } });
  };

  useEffect(() => {
    if (updateState.data) {
      setParcours(updateState.data.updateParcour);
      history.push('/jobs');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [updateState.data]);

  switch (step) {
    case Steps.ACCESSIBILITY:
      return (
        <div className={classes.modalBody}>
          <div className={classes.titleModal}>Encore une petite chose !</div>
          <div className={classes.descriptionModal1}>Indique-nous ton niveau de diplôme :</div>
          <div className={classes.accessibility}>
            <ThemeProvider theme={selectTheme}>
              <Select
                options={accessibilityState.data?.accessibilities.data || []}
                onSelectText={(e) => {
                  if (e) setAccessibility(e);
                }}
                name="job"
                value={[accessibility]}
                placeholder={getAccebilityName(accessibility)}
                className={classes.containerAutoComp}
                open={openType}
                modal
                onClick={() => setOpenType(!openType)}
                onClose={() => setOpenType(false)}
                reference={divType}
                color={x}
                arrowColor={'#00B2DB'}
                from="interest"
              />
            </ThemeProvider>
          </div>
          {accessibility && (
            <div className={classes.btnContainerModal}>
              <div className={classes.btn} onClick={onValide}>
                <div className={classes.btnLabel}>Voir mes pistes métiers</div>
                {updateState.loading && (
                  <div className={classes.loaderContainer}>
                    <CircularProgress classes={{ colorPrimary: classes.colorPrimaryLoader }} size={24} />
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      );
    default:
      return (
        <div className={classes.modalBody}>
          <div className={classes.titleModal}>Encore une petite chose !{/* 1/2 */}</div>
          <div className={classes.descriptionModal}>Sélectionne les expériences qui comptent le plus pour toi :</div>

          <div className={classes.experienceContainer}>
            <div className={classes.expContainer}>
              <div className={classes.titlePerso}>Mes expériences perso</div>
              <div className={classes.themesContainer}>
                {parcours?.skills
                  .filter((p) => p.theme?.type === 'personal')
                  .map((pr) => (
                    <>
                      <Divider variant={'fullWidth'} />

                      <div
                        key={pr.theme.id}
                        className={classNames(
                          classes.themeContainer,
                          isChecked(pr.theme.id) && classes.themeContainerPersoSelected,
                        )}
                        onClick={() => addTheme(pr.theme.id)}
                      >
                        <div className={classes.CheckBoxStyle}>
                          <CheckBox
                            checked={isChecked(pr.theme.id)}
                            img={isChecked(pr.theme.id) && checked}
                            className={classes.checkBox}
                            classNameLogo={classes.checkBoxImg}
                            color="#7AE6FF"
                            border="##00B2DB"
                            background="#fff"
                          />
                        </div>
                        <Avatar size={60} squareContainerClassName={classes.square} className={classes.circle}>
                          <img src={pr.theme.resources?.icon} alt="" className={classes.avatarStyle} />
                        </Avatar>
                        <div
                          className={classNames(
                            classes.themeTitle,
                            isChecked(pr.theme.id) && classes.themeTitleSelected,
                          )}
                        >
                          {pr.theme.title.replace(/\//g, '')}
                        </div>
                      </div>
                    </>
                  ))}
                <Divider variant={'fullWidth'} />
              </div>
            </div>
            <div className={classes.expContainer}>
              <div className={classes.titlePro}>Mes expériences pro</div>
              <div className={classes.themesContainer}>
                {parcours?.skills
                  .filter((p) => p.theme?.type === 'professional')
                  .map((pr) => (
                    <>
                      <Divider variant={'fullWidth'} />
                      <div
                        key={pr.theme.id}
                        onClick={() => addTheme(pr.theme.id)}
                        className={classNames(
                          classes.themeContainer,
                          classes.themeContainerPro,
                          isChecked(pr.theme.id) && classes.themeContainerProSelected,
                        )}
                      >
                        <div className={classes.CheckBoxStyle}>
                          <CheckBox
                            checked={isChecked(pr.theme.id)}
                            className={classes.checkBox}
                            classNameLogo={classes.checkBoxImg}
                            color="#7AE6FF"
                            border="##00B2DB"
                            background="#fff"
                          />
                        </div>
                        <div
                          className={classNames(
                            classes.themeTitle,
                            isChecked(pr.theme.id) && classes.themeTitleSelected,
                          )}
                        >
                          {pr.theme.title}
                        </div>
                      </div>
                    </>
                  ))}
                <Divider variant={'fullWidth'} />
              </div>
            </div>
          </div>
          {selectedThemes.length > 0 ? (
            <div className={classes.btnContainerModal}>
              <div className={classes.btn} onClick={() => setStep(Steps.ACCESSIBILITY)}>
                <div className={classes.btnLabel}>{'Valider'}</div>
              </div>
              {updateState.loading && (
                <div className={classes.loaderContainer}>
                  <CircularProgress classes={{ colorPrimary: classes.colorPrimaryLoader }} size={24} />
                </div>
              )}{' '}
            </div>
          ) : (
            ''
          )}
        </div>
      );
  }
};

export default SelectModal;
