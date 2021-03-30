import React, { useState, useEffect, useContext, useRef } from 'react';
import Title from 'components/common/TitleImage/TitleImage';
import Input from 'components/inputs/Input/Input';
import { useThemes } from 'requests/themes';
import { RouteComponentProps } from 'react-router-dom';
import parcoursContext from 'contexts/ParcourContext';
import LoupeGray from 'assets/svg/loupe.svg';
import LoupeBlue from 'assets/svg/loupeBlue.svg';
import { decodeUri, encodeUri } from 'utils/url';
import { Theme } from 'requests/types';
import classNames from 'utils/classNames';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

const ThemeContainerPro = ({ location, history }: RouteComponentProps) => {
  const classes = useStyles();

  const isBrowser = typeof window !== 'undefined';
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [valueSearch, setValueSearch] = useState('');

  const { redirect } = decodeUri(location.search);
  const { data } = useThemes({
    variables: { type: 'professional', search: valueSearch },
  });
  const { parcours } = useContext(parcoursContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(-1);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem('theme', selectedTheme?.id);
    }
  }, [selectedTheme]);

  useEffect(() => {
    const handleResize = () => setHeight(window.innerHeight);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  const onNavigate = () => {
    if (selectedTheme) history.push(`/experience/skill/${selectedTheme.id}${redirect ? encodeUri({ redirect }) : ''}`);
  };
  const onClickTheme = (theme: Theme, index: number) => {
    if (!isOpen && currentTheme !== index) {
      setIsOpen(true);
      setCurrentTheme(index);
    } else if (isOpen && currentTheme !== index) {
      setCurrentTheme(index);
    } else if (isOpen && currentTheme === index) {
      setSelectedTheme(theme);
      setIsOpen(false);
      setCurrentTheme(-1);
      if (selectedTheme) setValueSearch(selectedTheme?.title);
    }
    console.log('Index', index);
  };

  useEffect(() => {
    if (selectedTheme) setValueSearch(selectedTheme?.title);
  }, [selectedTheme?.title]);

  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title title="mes expériences pro" color="#FFFFFF" size={32} />
        <BreadCrumb level={1} routes={[{ title: 'Thème', url: '' }]} />
        <div className={classes.themeContainer}>
          <div className={classes.searchContainer}>
            <div className={classes.boxSearch}>
              <div className={classes.boxSearchTitle}>Décris ton expérience professionnelle</div>
              <div className={classes.inputSearchContainer}>
                <Input
                  icon={valueSearch && valueSearch !== selectedTheme?.title ? LoupeBlue : LoupeGray}
                  value={valueSearch}
                  onChange={onChangeValue}
                  placeholder="Ex : j’ai vendu des fleurs"
                  wrapperInputClassName={classes.wrapperInput}
                  inputClassName={classes.input}
                  inputBaseClassName={classes.inputBase}
                  withOutIcons
                />
              </div>
            </div>
            {valueSearch && valueSearch !== selectedTheme?.title && (
              <div className={classes.resultsContainer}>
                <div className={classes.titleWrapper}>
                  <span className={classes.resultTitle}>Métiers</span>
                </div>
                {data?.themes.data
                  .filter((theme) => !parcours?.skills.find((id) => theme.id === id.theme?.id))
                  .map((theme, index) => {
                    const tooltip = theme.activities;
                    const t = theme.title.replace(new RegExp('[//,]', 'g'), '\n');
                    const x = t.split(new RegExp(valueSearch, 'i'));
                    const title = [];
                    for (let i = 0; i < x.length; i += 1) {
                      title.push(x[i]);
                      if (i !== x.length - 1) {
                        title.push(
                          <span key={i} style={{ color: '#424242', fontWeight: 'normal' }}>
                            {valueSearch}
                          </span>,
                        );
                      }
                    }
                    return (
                      <>
                        <div
                          className={classNames(
                            classes.titleWrapper,
                            isOpen && currentTheme === index ? classes.selectedResult : classes.resultWrapper,
                          )}
                          onClick={() => onClickTheme(theme, index)}
                        >
                          <span className={classes.resultTitle}>{title}</span>
                        </div>
                        {isOpen && currentTheme === index && (
                          <div className={classes.ativityContainer}>
                            {theme?.activities.map((a) => (
                              <span className={classes.activity}>• {a.title}</span>
                            ))}
                          </div>
                        )}
                      </>
                    );
                  })}

                <div className={classes.titleWrapper}>
                  <span className={classes.resultTitle}>Tags</span>
                </div>
              </div>
            )}
          </div>
        </div>
        {selectedTheme && valueSearch === selectedTheme?.title && (
          <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
        )}
      </div>
    </div>
  );
};
export default ThemeContainerPro;
