import React, { useState, useEffect, useContext, useRef } from 'react';
import TitleImage from 'components/common/TitleImage/TitleImage';
import Title from 'components/common/TitleImage/TitleImage';
import Input from 'components/inputs/Input/Input';
import Tooltip from '@material-ui/core/Tooltip';
import Child from 'components/ui/ForwardRefChild/ForwardRefChild';
import NavigationButton from 'components/NavigationButton/NavigationButton';
import SelectionContext from 'contexts/SelectionContext';
import useOnclickOutside from 'hooks/useOnclickOutside';
import { useThemes } from 'requests/themes';
import { Link, RouteComponentProps } from 'react-router-dom';
import RestLogo from 'components/common/Rest/Rest';
import Grid from '@material-ui/core/Grid';
import Selection from 'components/theme/ThemeSelection/ThemeSelection';
import parcoursContext from 'contexts/ParcourContext';
import NextButton from 'components/nextButton/nextButton';
import blueline from 'assets/svg/blueline.svg';
import LoupeGray from 'assets/svg/loupe.svg';
import LoupeBlue from 'assets/svg/loupeBlue.svg';
import PreviousButton from 'components/previousButton/previousButton';
import { decodeUri, encodeUri } from 'utils/url';
import { Theme } from 'requests/types';
import classNames from 'utils/classNames';
import useStyles from './styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Portal from '@material-ui/core/Portal';
import { Slide } from '@material-ui/core';
const ThemeContainerPro = ({ location, history }: RouteComponentProps) => {
  const classes = useStyles();

  const isBrowser = typeof window !== 'undefined';
  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);
  const refSlide = useRef(null);
  const [openedTheme, setOpenedTheme] = useState<Theme | null>(null);
  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [valueSearch, setValueSearch] = useState('');
  const { redirect } = decodeUri(location.search);
  const { data } = useThemes({
    variables: { type: 'professional', search: valueSearch },
  });
  const { parcours } = useContext(parcoursContext);

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueSearch(value);
  };
  useEffect(() => {
    if (data) {
      const id = localStorage.getItem('theme');
      const selected = data.themes.data.find((theme) => theme.id === id);
      if (selected) setSelectedTheme(selected);
    }
  }, [data]);
  const { open, setOpen } = useContext(SelectionContext);

  const showAvatar = (e: React.MouseEvent<HTMLDivElement, MouseEvent>, theme: Theme) => {
    if (openedTheme?.id === theme.id) {
      setSelectedTheme(theme);
      setOpenedTheme(null);
    }
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

  const handleClick = (theme: any) => {
    setOpenedTheme(theme);
  };

  const onNavigate = () => {
    if (selectedTheme) history.push(`/experience/skill/${selectedTheme.id}${redirect ? encodeUri({ redirect }) : ''}`);
  };
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title title="mes expériences pro" color="#223A7A" size={width > 380 ? 32 : 25} image={blueline} number={1} />

        <div className={classes.themeContainer}>
          <div className={classes.searchContainer}>
            <div className={classes.boxSearch}>
              <div className={classes.boxSearchTitle}>Tape les premières lettres de ton expérience pro</div>
              <div className={classes.inputSearchContainer}>
                <Input
                  icon={valueSearch ? LoupeBlue : LoupeGray}
                  value={valueSearch}
                  onChange={onChangeValue}
                  placeholder="Ex : vendeur"
                  withOutIcons
                />
              </div>
            </div>
            <div className={classes.gridContainer}>
              <Grid className={classes.circleContainer} container spacing={2} xs>
                {valueSearch &&
                  data?.themes.data
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
                            <span key={i} style={{ color: '#00CFFF' }}>
                              {valueSearch}
                            </span>,
                          );
                        }
                      }
                      return (
                        <div key={theme.id}>
                          <Grid
                            key={theme.id}
                            item
                            onClick={() => {
                              handleClick(theme);
                            }}
                          >
                            <div
                              className={classNames(
                                classes.itemData,
                                selectedTheme?.id === theme.id && classes.selected,
                              )}
                              onClick={(e) => {
                                showAvatar(e, theme);
                              }}
                            >
                              {title}
                            </div>
                          </Grid>

                          <div>
                            {openedTheme?.id === theme.id ? (
                              <Slide
                                direction="up"
                                in={!(selectedTheme?.id === theme.id)}
                                mountOnEnter
                                unmountOnExit
                                
                              >
                                <Child key={index} className={classes.child}>
                                  {tooltip.map((el) => (
                                    <div key={el.id} className={classes.titleDiv}>{`-${el.title}`}</div>
                                  ))}
                                </Child>
                              </Slide>
                            ) : null}
                          </div>
                        </div>
                      );
                    })}
              </Grid>
            </div>
          </div>
        </div>
      </div>
      <Selection theme={selectedTheme} activities={[]} />
      <div className={classes.previousNext}>
        <div>
          <Link to={'/experience'} className={classes.btnpreced}>
            <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
          </Link>
        </div>
        <div onClick={onNavigate}>
          <NextButton disabled={!selectedTheme} />
        </div>
      </div>
    </div>
  );
};
export default ThemeContainerPro;
