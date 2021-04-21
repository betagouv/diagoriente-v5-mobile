import React, { useContext, useState, useEffect, useRef, useLayoutEffect } from 'react';
import Logo from 'assets/svg/Frame.svg';
import Title from 'components/common/TitleImage/TitleImage';
import localForage from 'localforage';
import { Link } from 'react-router-dom';
import useOnclickOutside from 'common/hooks/useOnclickOutside';
import ParcoursContext from 'common/contexts/ParcourContext';
import { Jobs } from 'common/requests/types';
import pictoFilter from 'assets/svg/picto filtres.svg';
import Slide from '@material-ui/core/Slide';
import arrow from 'assets/svg/Vector (12).svg';
import Reset from 'components/common/Rest/Rest';
import Spinner from 'components/Spinner/Spinner';
import classNames from 'utils/classNames';

import Button from 'components/button/Button';
import Autocomplete from '../../components/Autocomplete/AutoCompleteJob';
import JobCard from '../../components/Card/CardJob';
import Select from '../../components/Select/Select';
import SelectData from '../../components/SelectData/SelectData';

import useStyles from './styles';

interface IProps {
  jobs?: Jobs[];
  domaine?: string[];
  search?: string;
  environments?: string[];
  accessibility?: string[];
  loading: boolean;
  setDomaine: (d: string[]) => void;
  setSearch: (s?: string) => void;
  setJob: (d: string[]) => void;
  setAccessibility: (d: string[]) => void;
  listAccData?: { id: string; name: string }[];
  listTypeData?: { id: string; title: string }[];
  listSecteurData?: {
    activities: string[];
    id: string;
    title: string;
    resources: { backgroundColor: string; icon: string };
  }[];
}

const JobsContainer = ({
  jobs,
  domaine,
  search,
  environments,
  accessibility,
  loading,
  setDomaine,
  setSearch,
  setJob,
  setAccessibility,
  listAccData,
  listTypeData,
  listSecteurData,
}: IProps) => {
  const classes = useStyles();
  const { parcours } = useContext(ParcoursContext);
  const [jobsToShow, setJobsToShow] = useState(12);
  const [openType, setOpenType] = useState(false);
  const [openDomain, setOpenDomain] = useState(false);
  const [openAcc, setOpenAcc] = useState(false);
  const [showHeader, setShowHeader] = useState(false);
  const [filteredArray, setFiltredArray] = useState<Jobs[] | undefined>([]);
  const [openDataToRender, setOpenDataToRender] = useState(false);
  const [dataToRender, setDataToRender] = useState(12);

  const divDomaine = useRef<HTMLDivElement>(null);
  const divType = useRef<HTMLDivElement>(null);
  const divAcc = useRef<HTMLDivElement>(null);
  const divData = useRef<HTMLDivElement>(null);

  const scrollRef = useRef(0);
  const [openModal, setOpenModal] = React.useState(false);

  const [clearMessage, setClearMessage] = useState<null | boolean>(null);

  useEffect(() => {
    const scrollCallBack: any = window.addEventListener('scroll', () => {
      if (window.pageYOffset > 500) {
        return setShowHeader(true);
      }
      return setShowHeader(false);
    });
    return () => {
      window.removeEventListener('scroll', scrollCallBack);
    };
  }, []);
  useEffect(() => {
    async function c() {
      const res = await localForage.getItem('messages');
      if (res === null) {
        setClearMessage(true);
      }
    }
    c();
  }, []);

  useLayoutEffect(() => {
    window.scroll({ top: scrollRef.current, behavior: 'auto' });
  }, [jobsToShow]);

  useOnclickOutside(divDomaine, () => {
    if (openDomain) {
      setOpenDomain(false);
    }
  });
  useOnclickOutside(divType, () => setOpenType(false));
  useOnclickOutside(divAcc, () => setOpenAcc(false));

  const setMessage = async () => {
    setClearMessage(true);
    await localForage.setItem('messages', false);
  };

  const onSelect = (label?: string) => {
    setSearch(label);
    // setOpen(false);
  };

  const onChangeSelect = (e: any) => {
    const v = e.target.value;
    setSearch(v);

    setFiltredArray(jobs?.filter((el: any) => el.title.toLowerCase().indexOf(v.toLowerCase()) !== -1));
  };
  const onSelectDomaine = (label?: string) => {
    if (label && domaine) {
      const array = [...domaine];
      if (array.includes(label)) {
        const index = array.indexOf(label);
        array.splice(index, 1);
      } else {
        array.push(label);
      }
      setDomaine(array);
    }
  };
  useEffect(() => {
    if (accessibility) {
      const array = [...accessibility];
      if (parcours?.accessibility) {
        array.push(parcours?.accessibility.id);
      }
      setAccessibility(array);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [parcours?.accessibility]);

  const onSelectAcc = (label?: string) => {
    if (label && accessibility) {
      const array = [...accessibility];
      if (array.includes(label)) {
        const index = array.indexOf(label);
        array.splice(index, 1);
      } else {
        array.push(label);
      }
      setAccessibility(array);
    }
  };
  const onSelectType = (label?: string) => {
    if (label && environments) {
      const array = [...environments];
      if (array.includes(label)) {
        const index = array.indexOf(label);
        array.splice(index, 1);
      } else {
        array.push(label);
      }
      setJob(array);
    }
  };
  const onSelectData = (label?: number) => {
    if (label) {
      setDataToRender(label);
      setJobsToShow(label);
      setOpenDataToRender(false);
    }
  };
  const renderedJobs = jobs?.slice(0, jobsToShow);

  const getDomaineName = (domaineParam: string[] | undefined) => {
    if (listSecteurData && domaineParam !== undefined && domaineParam.length !== 0) {
      const firstItem = listSecteurData.find((item) => item.id === domaineParam[0]);
      return `${firstItem?.title} ${domaineParam.length > 1 ? `(+${domaineParam.length - 1})` : ''}`;
    }
    return 'Domaine d’activité';
  };
  useEffect(() => {
    getDomaineName(domaine);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listSecteurData, domaine]);

  const getEnvName = (environmentsParam: string[] | undefined) => {
    if (listTypeData && environmentsParam !== undefined && environmentsParam.length !== 0) {
      const firstItem = listTypeData.find((item) => item.id === environmentsParam[0]);
      return `${firstItem?.title} ${environmentsParam.length > 1 ? `(+${environmentsParam.length - 1}) ` : ''}`;
    }
    return 'Type de métier';
  };
  useEffect(() => {
    getEnvName(environments);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listSecteurData, environments]);

  const getAccName = (accessibilityParam: string[] | undefined) => {
    if (listAccData && accessibilityParam !== undefined && accessibilityParam.length !== 0) {
      const firstItem = listAccData.find((item) => item.id === accessibilityParam[0]);
      return `${firstItem?.name} ${accessibilityParam.length > 1 ? `(+${accessibilityParam.length - 1})` : ''}`;
    }
    return 'Niveau d’accès';
  };
  useEffect(() => {
    getEnvName(accessibility);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [listAccData, accessibility]);

  const closeSelect = () => {
    if (domaine) domaine.splice(0, domaine.length);
    setOpenDomain(false);
  };
  const renderJobs = () => {
    if (renderedJobs?.length) {
      return renderedJobs?.map((el) => (
        <Link to={`/jobs/job/${el.id}`}>
          <JobCard
            key={el.id}
            title={el.title}
            description={el.description}
            accessibility={el.accessibility}
            favoris={el.favorite}
          />
        </Link>
      ));
    }

    return 'Aucun resultat trouvé !';
  };
  return (
    <div className={classes.wrapper}>
      {!clearMessage && (
        <div className={classes.messages}>
          <div className={classes.contentMessage}>
            <div className={classes.text}>
              <div>
                Pour voir une sélection personnalisée de métiers qui pourraient te plaire, commence à remplir ton profil
                en ajoutant tes{' '}
                <Link to="/experience">
                  <span className={classes.clearTextBold}>expériences</span>
                </Link>{' '}
                et tes{' '}
                <Link to="/interet">
                  <span className={classes.clearTextBold}>centres d&apos;intérêt</span>
                </Link>{' '}
              </div>
            </div>
            <div>
              <div onClick={() => setMessage()} className={classes.clearMessage}>
                <div className={classes.clearText}>Ok, masquer ce message</div>
                <Reset color="#D60051" size={32} />
              </div>
            </div>
          </div>
        </div>
      )}

      <div className={classes.root}>
        <div className={classes.content}>
          <Title
            title={parcours?.completed ? 'MON TOP MÉTIERS' : 'TOUS LES MÉTIERS'}
            font="ocean"
            size={32}
            color="#DB8F00"
            backgroudColor="#ffff"
            logo={Logo}
            logoHeight="28px"
          />
          <div className={classes.subTitle}>Sélectionné en fonction de tes réponses</div>
          <div className={classes.filtersContainer}>
            <Autocomplete
              options={filteredArray}
              onChange={onChangeSelect}
              onSelectText={onSelect}
              value={search || ''}
              name="search"
              placeholder="Rechercher"
              className={classes.containerAutoComp}
            />
            <Select
              options={listSecteurData}
              onSelectText={onSelectDomaine}
              name="domaine"
              value={domaine}
              placeholder={getDomaineName(domaine)}
              // className={classNames(domaine && classes.selectedDomaineSelect, classes.domaineSelect)}
              open={openDomain}
              fullScreenModal
              onClick={() => setOpenDomain(!openDomain)}
              onCloseSelect={closeSelect}
              onClose={() => setOpenDomain(false)}
              arrowColor="#DB8F00"
              from="job"
              borderColor={domaine?.length !== 0 ? '#DB8F00  ' : '#C9C9C7 '}
              bkColor="#FFD382"
              placeHolderColor={domaine?.length !== 0 ? '#DB8F00' : '#424242'}
            />
            <Select
              options={listTypeData}
              onSelectText={onSelectType}
              name="job"
              value={environments}
              placeholder={getEnvName(environments)}
              open={openType}
              modal
              onClick={() => setOpenType(!openType)}
              onClose={() => setOpenType(false)}
              reference={divType}
              arrowColor="#DB8F00"
              from="job"
              check
              borderColor={environments?.length !== 0 ? '#DB8F00  ' : '#C9C9C7  '}
              bkColor="#FFD382"
              placeHolderColor={environments?.length !== 0 ? '#DB8F00' : '#424242'}
            />
            <Select
              options={listAccData}
              onSelectText={onSelectAcc}
              name="accessibility"
              placeholder={getAccName(accessibility)}
              value={accessibility}
              open={openAcc}
              modal
              onClick={() => setOpenAcc(!openAcc)}
              onClose={() => setOpenAcc(false)}
              reference={divAcc}
              arrowColor="#DB8F00"
              from="job"
              check
              borderColor={accessibility?.length !== 0 ? '#DB8F00 ' : '#C9C9C7 '}
              bkColor="#FFD382"
              placeHolderColor={accessibility?.length !== 0 ? '#DB8F00 ' : '#424242'}
            />
          </div>
          {loading ? (
            <div className={classes.spinnerContainer}>
              <Spinner />
            </div>
          ) : (
            <div className={classes.boxsContainer}>
              {!parcours?.completed && <Spinner />}
              {renderJobs()}
            </div>
          )}
        </div>
      </div>
      {jobs && jobsToShow < jobs.length && (
        <div className={classes.footerContainer}>
          <div className={classes.footerContent}>
            <div className={classes.itemFooter} />
            <div className={classNames(classes.itemFooter, classes.centerItem)}>
              <Button
                onClick={() => {
                  scrollRef.current = window.scrollY;
                  setJobsToShow(jobsToShow + dataToRender);
                }}
                className={classes.moreButton}
              >
                Voir plus de métiers
              </Button>
            </div>
            <div className={classNames(classes.itemFooter, classes.rightItem)}>
              <div className={classes.rightItem}>
                <span className={classes.textSelect}>Afficher</span>
                <SelectData
                  options={[12, 24, 36]}
                  onSelectText={onSelectData}
                  name="dataToRender"
                  placeholder={`${dataToRender}`}
                  open={openDataToRender}
                  onClick={() => setOpenDataToRender(!openDataToRender)}
                  reference={divData}
                />
                <span className={classes.textSelect}>métiers par page</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {showHeader && (
        <>
          <div className={classes.headerRecherche}>
            <div className={classes.titreHeader}> Mon top Métiers </div>
            <div className={classes.iconHeader} onClick={() => setOpenModal(!openModal)}>
              <img src={pictoFilter} alt="" />
            </div>
          </div>
          <Slide direction="down" in={openModal} mountOnEnter unmountOnExit timeout={0}>
            <div className={classes.modalWrapper}>
              <div className={classes.backdrop} onClick={() => setOpenModal(!openModal)} />
              <div className={classes.modalItemsContainer}>
                <div className={classes.filtersContainer1}>
                  <div className={classes.headerRecherche}>
                    <div className={classes.titreHeader}> Mon top Métiers </div>
                    <div className={classes.iconHeader} onClick={() => setOpenModal(!openModal)}>
                      <img src={arrow} alt="" />
                    </div>
                  </div>
                  <Autocomplete
                    options={filteredArray}
                    onChange={(e) => {
                      setSearch(e.target.value);
                    }}
                    onSelectText={onSelect}
                    // onKeyPress={}
                    value={search || ''}
                    name="search"
                    placeholder="Rechercher"
                    className={classes.containerAutoComp}
                  />

                  <Select
                    options={listSecteurData}
                    onSelectText={onSelectDomaine}
                    name="domaine"
                    value={domaine}
                    placeholder={getDomaineName(domaine)}
                    // className={classes.containerAutoComp}
                    open={openDomain}
                    fullScreenModal
                    onClick={() => setOpenDomain(!openDomain)}
                    onClose={() => setOpenDomain(false)}
                    arrowColor="#DB8F00"
                    from="job"
                    borderColor="#C9C9C7"
                    bkColor="#FFD382"
                    placeHolderColor="#DB8F00"
                  />
                  <Select
                    options={listTypeData}
                    onSelectText={onSelectType}
                    name="job"
                    value={environments}
                    placeholder={getEnvName(environments)}
                    open={openType}
                    modal
                    onClick={() => setOpenType(!openType)}
                    onClose={() => setOpenType(false)}
                    reference={divType}
                    arrowColor="#DB8F00"
                    from="job"
                    borderColor="#C9C9C7"
                    check
                    bkColor="#FFD382"
                    placeHolderColor="#DB8F00"
                  />
                  <Select
                    options={listAccData}
                    onSelectText={onSelectAcc}
                    name="accessibility"
                    placeholder={getAccName(accessibility)}
                    value={accessibility}
                    open={openAcc}
                    modal
                    onClick={() => setOpenAcc(!openAcc)}
                    onClose={() => setOpenAcc(false)}
                    reference={divAcc}
                    arrowColor="#DB8F00"
                    from="job"
                    borderColor="#C9C9C7"
                    check
                    bkColor="#FFD382"
                    placeHolderColor="#DB8F00"
                  />
                  <Button onClick={() => setOpenModal(!openModal)} className={classes.rechercheButton}>
                    Rechercher
                  </Button>
                </div>
              </div>
            </div>
          </Slide>
        </>
      )}
    </div>
  );
};

export default JobsContainer;
