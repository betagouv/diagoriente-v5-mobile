import React, { useState, useEffect, useContext, useMemo } from 'react';
import Title from 'components/common/TitleImage/TitleImage';
import SelectionContext from 'contexts/SelectionContext';
import { useThemes } from 'requests/themes';
import Button from 'components/nextButton/nextButton';
import NavigationButton from 'components/NavigationButton/NavigationButton';
import { Link, RouteComponentProps } from 'react-router-dom';
import Selection from 'components/theme/ThemeSelection/ThemeSelection';
import parcoursContext from 'contexts/ParcourContext';
import Spinner from 'components/SpinnerXp/Spinner';
import SelectTheme from 'components/inputs/SelectTheme/SelectTheme';
import blueline from 'assets/svg/blueline.svg';
import PreviousButton from 'components/previousButton/previousButton';
import classNames from 'utils/classNames';
import { decodeUri, encodeUri } from 'utils/url';
import { Theme } from 'requests/types';
import useStyles from './styles';

const ThemeContainer = ({ location, history }: RouteComponentProps) => {
  const classes = useStyles();
  const { setOpen } = useContext(SelectionContext);

  const [selectedTheme, setSelectedTheme] = useState<Omit<Theme, 'activities'> | null>(null);

  const { type, redirect } = decodeUri(location.search);

  const showAvatar = (theme: Omit<Theme, 'activities'>) => {
    setSelectedTheme(theme);
  };
  const { data, loading } = useThemes({
    variables: { type: type === 'engagement' ? 'engagement' : 'personal' },
  });
  const { parcours } = useContext(parcoursContext);

  const themeFiltereds = useMemo(
    () => (data ? data.themes.data.filter((theme) => !parcours?.skills.find((id) => theme.id === id.theme?.id)) : []),
    [data, parcours],
  );
  const themeNotFiltered = useMemo(() => (data ? data.themes.data : []), [data]);

  const themeFiltered = useMemo(() => (type === 'engagement' ? themeNotFiltered : themeFiltereds), [
    themeFiltereds,
    themeNotFiltered,
    type,
  ]);

  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  useEffect(() => {
    if (data) {
      const id = localStorage.getItem('theme');
      const selected = data.themes.data.find((theme) => theme.id === id);
      if (selected) setSelectedTheme(selected);
    }
  }, [data]);

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem('theme', selectedTheme?.id);
    }
  }, [selectedTheme]);

  const onNavigate = () => {
    if (selectedTheme) history.push(`/experience/skill/${selectedTheme.id}${redirect ? encodeUri({ redirect }) : ''}`);
    setOpen(false);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title
          title={type === 'engagement' ? 'mes expériences d’engagement' : 'mes expériences personnelles'}
          color="#223A7A"
          size={width > 380 ? 32 : 25}
          image={blueline}
          number={1}
        />

        <div className={classes.themeContainer}>
          {themeFiltered.length === 0 && !loading ? (
            <div className={classes.errorMessage}>
              Il n&apos;y a plus de thèmes disponible, vous les avez deja tous choisis !{' '}
            </div>
          ) : (
            <p className={classes.themeTitle}>Choisis un thème :</p>
          )}
          <div className={classes.selectThemeContainer}>
            <SelectTheme avatarsTab={themeFiltered} selectedTheme={selectedTheme} showAvatar={showAvatar} />
          </div>
          {loading && (
            <div className={classes.loadingContainer}>
              <Spinner />
            </div>
          )}

          <Selection theme={selectedTheme} activities={[]} />

          <div className={classes.previousNext}>
            <Link
              //   to="/experience"
              to={'/experience'}
              className={classes.hideLine}
            >
              <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
            </Link>

            <div onClick={onNavigate} className={classes.hideLine}>
              <Button disabled={!selectedTheme} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ThemeContainer;
