import React, { useState, useEffect, useContext } from 'react';
import Title from 'components/common/TitleImage/TitleImage';
import Input from 'components/inputs/Input/Input';
import { useThemes } from 'common/requests/themes';
import { RouteComponentProps } from 'react-router-dom';
import parcoursContext from 'common/contexts/ParcourContext';
import LoupeGray from 'assets/svg/loupe.svg';
import LoupeBlue from 'assets/svg/loupeBlue.svg';
import { decodeUri, encodeUri } from 'utils/url';
import { Theme } from 'common/requests/types';
import classNames from 'utils/classNames';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

const ThemeContainerPro = ({ location, history }: RouteComponentProps) => {
  const classes = useStyles();

  const [selectedTheme, setSelectedTheme] = useState<Theme | null>(null);
  const [valueSearch, setValueSearch] = useState('');
  const { redirect } = decodeUri(location.search);
  const { data } = useThemes({
    variables: { type: 'professional', search: valueSearch },
  });
  const { parcours } = useContext(parcoursContext);
  const [isOpen, setIsOpen] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(-1);
  const [jobs, setJobs] = useState([] as Theme[]);
  const [tags, setTags] = useState([] as Theme[]);
  const [jobsNtags, setJobsNTags] = useState<Theme[]>();
  const [breaker, setBreaker] = useState(0);
  const jobsId = [] as string[];
  const tagsId = [] as string[];

  const onChangeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setValueSearch(value);
  };

  useEffect(() => {
    if (selectedTheme) {
      localStorage.setItem('theme', selectedTheme?.id);
    }
  }, [selectedTheme]);

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
  };

  const highlighter = (text: string) => {
    const rep = text.replace(new RegExp('[//,]', 'g'), '\n');
    const spl = rep.split(new RegExp(valueSearch, 'i'));
    const title = [];
    for (let i = 0; i < spl.length; i += 1) {
      title.push(spl[i]);
      if (i !== spl.length - 1) {
        title.push(
          <span key={i} style={{ color: '#424242', fontWeight: 'normal' }}>
            {valueSearch}
          </span>,
        );
      }
    }
    return title;
  };

  useEffect(() => {
    if (data && valueSearch !== '') {
      data.themes.data
        .filter((theme) => !parcours?.skills.find((id) => theme.id === id.theme?.id))
        .map((theme, index) => {
          const t = theme.title.replace(new RegExp('[//,]', 'g'), '\n');
          const x = t.split(new RegExp(valueSearch, 'i'));
          {
            if (x.length === 1) {
              tagsId.push(theme.id);
            } else {
              jobsId.push(theme.id);
            }
          }
        });
      if (jobsId.length !== 0) {
        setJobs(data.themes.data.filter((theme) => jobsId.find((id) => theme.id === id)));
      } else setJobs([]);
      if (tagsId.length !== 0) {
        setTags(data.themes.data.filter((theme) => tagsId.find((id) => theme.id === id)));
      } else setTags([]);
    }
  }, [data]);

  useEffect(() => {
    setJobsNTags([...jobs, ...tags]);
    setBreaker(jobs.length);
  }, [jobs, tags]);

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
                {jobsNtags?.length && breaker > 0 ? (
                  <>
                    <div className={classes.titleWrapper}>
                      <span className={classes.resultTitle}>Métiers</span>
                    </div>
                    {jobsNtags?.map((job, index) => (
                      <>
                        {index < breaker ? (
                          <>
                            <div
                              className={classNames(
                                classes.titleWrapper,
                                isOpen && currentTheme === index ? classes.selectedResult : classes.resultWrapper,
                              )}
                              onClick={() => onClickTheme(job, index)}
                            >
                              <span className={classes.resultTitle}>{highlighter(job.title)}</span>
                            </div>
                            {isOpen && currentTheme === index && (
                              <div className={classes.ativityContainer}>
                                {job?.activities.map((a) => (
                                  <span className={classes.activity}>• {a.title}</span>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          ''
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  ''
                )}
                {jobsNtags?.length && jobsNtags?.length > breaker ? (
                  <>
                    <div className={classes.titleWrapper}>
                      <span className={classes.resultTitle}>Tags</span>
                    </div>
                    {jobsNtags?.map((job, index) => (
                      <>
                        {index >= breaker ? (
                          <>
                            <div
                              className={classNames(
                                classes.titleWrapper,
                                isOpen && currentTheme === index ? classes.selectedResult : classes.resultWrapper,
                              )}
                              onClick={() => onClickTheme(job, index)}
                            >
                              <span className={classes.resultTitle}>{job.title}</span>
                            </div>
                            {isOpen && currentTheme === index && (
                              <div className={classes.ativityContainer}>
                                {job?.activities.map((a) => (
                                  <span className={classes.activity}>• {a.title}</span>
                                ))}
                              </div>
                            )}
                          </>
                        ) : (
                          ''
                        )}
                      </>
                    ))}
                  </>
                ) : (
                  ''
                )}
              </div>
            )}
            {valueSearch && jobsNtags?.length === 0 && <div className={classes.errorMsg}>Aucun résultat trouvé !</div>}
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
