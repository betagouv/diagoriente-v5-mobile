import React, { useState, useEffect, useContext, useMemo } from 'react';
import Title from 'components/common/TitleImage/TitleImage';
import SelectionContext from 'contexts/SelectionContext';
import { useThemes } from 'requests/themes';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import { RouteComponentProps } from 'react-router-dom';
import parcoursContext from 'contexts/ParcourContext';
import Spinner from 'components/SpinnerXp/Spinner';
import SelectTheme from 'components/inputs/SelectTheme/SelectTheme';
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

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title
          title={type === 'engagement' ? 'mes expériences d’engagement' : 'mes expériences personnelles'}
          color="#FFFFFF"
          size={32}
          sizecont={classes.sizeTitle}
        />
        <BreadCrumb level={1} routes={[{ title: 'Thème', url: '' }]} />
        <div className={classes.themeContainer}>
          <div className={classes.selectThemeContainer}>
            {themeFiltered.length === 0 && !loading ? (
              <div className={classes.errorMessage}>
                Il n&apos;y a plus de thèmes disponible, vous les avez deja tous choisis !{' '}
              </div>
            ) : (
              <p className={classes.themeTitle}>Choisis un thème :</p>
            )}
            <SelectTheme
              avatarsTab={themeFiltered}
              selectedTheme={selectedTheme}
              showAvatar={showAvatar}
              history={history}
              redirect={redirect}
            />
          </div>
          {loading && (
            <div className={classes.loadingContainer}>
              <Spinner />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default ThemeContainer;
