import React, { useState, useEffect, useContext, useMemo } from 'react';
import Title from 'components/common/TitleImage/TitleImage';
import { useThemes } from 'common/requests/themes';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import { RouteComponentProps } from 'react-router-dom';
import parcoursContext from 'common/contexts/ParcourContext';
import Spinner from 'components/SpinnerXp/Spinner';
import SelectTheme from 'components/inputs/SelectTheme/SelectTheme';
import { decodeUri } from 'utils/url';
import { Theme } from 'common/requests/types';
import useStyles from './styles';

const ThemeContainer = ({ location, history }: RouteComponentProps) => {
  const classes = useStyles();
  const [selectedTheme, setSelectedTheme] = useState<Omit<Theme, 'activities'> | null>(null);
  const { type, redirect } = decodeUri(location.search);

  let typeData: 'engagement' | 'sport' | 'personal';
  let title = '';
  switch (type) {
    case 'engagement':
      typeData = 'engagement';
      title = 'mes expériences d’engagement';
      break;
    case 'personal':
      typeData = 'personal';
      title = 'mes expériences personnelles';
      break;
    case 'sport':
      typeData = 'sport';
      title = 'mes expériences sportives';
      break;
    default:
      typeData = 'personal';
      title = 'mes expériences personnelles';
  }

  const showAvatar = (theme: Omit<Theme, 'activities'>) => {
    setSelectedTheme(theme);
  };

  const { data, loading } = useThemes({
    variables: { type: typeData },
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
        <Title title={title} color="#FFFFFF" size={32} />
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
