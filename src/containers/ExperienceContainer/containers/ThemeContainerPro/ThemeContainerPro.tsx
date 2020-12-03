import React, { useState, useEffect, useContext } from 'react';
import TitleImage from 'components/common/TitleImage/TitleImage';
import Title from 'components/common/TitleImage/TitleImage';
import Input from 'components/inputs/Input/Input';
import Tooltip from '@material-ui/core/Tooltip';
import Child from 'components/ui/ForwardRefChild/ForwardRefChild';

import { useThemes } from 'requests/themes';
import NextButton from 'components/nextButton/nextButton';
import PreviousButton from 'components/previousButton/previousButton';

import { Link, RouteComponentProps } from 'react-router-dom';
import RestLogo from 'components/common/Rest/Rest';
import Grid from '@material-ui/core/Grid';
import Selection from 'components/theme/ThemeSelection/ThemeSelection';
import parcoursContext from 'contexts/ParcourContext';

import blueline from 'assets/svg/blueline.svg';
import LoupeGray from 'assets/svg/loupe.svg';
import LoupeBlue from 'assets/svg/loupeBlue.svg';

import { decodeUri, encodeUri } from 'utils/url';
import { Theme } from 'requests/types';
import classNames from 'utils/classNames';
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

  const showAvatar = (theme: Theme) => {
    setSelectedTheme(theme);
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
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <Title
          title='mes expériences pro' 
          color="#223A7A"
          size={width > 380 ? 32 : 25}
          image={blueline}
          number={1}
        />
        
        <div className={classes.themeContainer}>
          {/* <TitleImage title="1." image={blueline} color="#223A7A" width={180} /> */}
          {/* <p className={classes.themeTitle}>Choisis une expérience pro : </p> */}
          <div className={classes.searchContainer}>
            <div className={classes.boxSearch}>
              {/* <div className={classes.boxSearchTitle}>Tu as réalisé un petit boulot chez KFC ? Tu bricoles sur ton temps libre ?</div> */}
              <div className={classes.boxSearchTitle}>Tape les premières lettres de ton expérience pro</div>
              <div className={classes.inputSearchContainer}>
                <Input
                  icon={valueSearch ? LoupeBlue : LoupeGray}
                  value={valueSearch}
                  onChange={onChangeValue}
                  placeholder='Ex : vendeur'
                  withOutIcons
                />
              </div>
            </div>
            <div className={classes.gridContainer}>
              <Grid className={classes.circleContainer} container spacing={2} xs >
          
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
                        <Tooltip 
                          key={theme.id}
                          open={!tooltip ? false : undefined}
                          title= 
                          {  <Child key={index}>
                              {tooltip.map((el) => (
                                <div key={el.id}>{`-${el.title}`}</div>
                              ))} 
                            </Child> 
                          }
                          
                          placement="left" >  

                          <Grid key={theme.id} item >
                            <div
                              className={classNames(
                                classes.itemData,
                                selectedTheme?.id === theme.id && classes.selected,
                              )}
                              onClick={() => showAvatar(theme)}
                            > 
                              {title}
                            </div>
                        
                          </Grid>
                        </Tooltip>
                      );
                    })} 
              </Grid> 
            </div>
          </div>
        
        </div>
      </div>
      <div className={classes.footerContainer} >
      <Selection theme={selectedTheme} activities={[]} />
        <div  className={classes.previousNext}>
       
          <div> 
          <Link
            to="/experience"
            className={classes.hideLine}
          >
            <PreviousButton
              disabled={!selectedTheme}
              classNameTitle={classes.classNameTitle}
              ArrowColor="#4D6EC5"
            />
          </Link>
          </div>
          <div>
          <Link
            to={selectedTheme ? `/experience/skill/${selectedTheme.id}${redirect ? encodeUri({ redirect }) : ''}` : ''}
            className={classes.hideLine}
          >
            <NextButton
              disabled={!selectedTheme}
              // className={classes.btn}
              classNameTitle={classes.classNameTitle}
              ArrowColor="#4D6EC5"
            />
          </Link>
          </div>
           </div>
           </div>
          </div>
  );
};
export default ThemeContainerPro;
