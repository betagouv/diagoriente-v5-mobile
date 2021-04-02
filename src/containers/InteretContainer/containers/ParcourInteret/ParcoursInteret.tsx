import React, { useState, useContext, useMemo, useEffect } from 'react';
import { useFamilies } from 'requests/familles';
import Button from 'components/button/Button';
import { Families } from 'requests/types';
import ModalContainer from 'components/common/Modal/ModalContainer';
import { useParams, Link, RouteComponentProps } from 'react-router-dom';
import { TransitionProps } from '@material-ui/core/transitions';
import Divider from '@material-ui/core/Divider';
import Slide from '@material-ui/core/Slide';
import classNames from 'utils/classNames';

import Dialog from '@material-ui/core/Dialog';
import { groupBy } from 'lodash';
import PlaceHolder from 'containers/InteretContainer/components/placeholderInterest/Placeholder';
import Arrow from 'assets/svg/arrow';

/* import classNames from 'utils/classNames';
 */
import interestContext from 'contexts/InterestSelected';
import parcoursContext from 'contexts/ParcourContext';
import Slider from 'components/Slider/Slider';
import closeButton from 'assets/svg/closeX.svg';
import logo from 'assets/svg/picto_attention.svg';
import Spinner from '../../components/SpinnerInterest/Spinner';
import FamileSelected from '../../components/SelectedFamille/SelectedFamille';

import useStyles from './styles';

const ParcoursInteret = ({ location }: RouteComponentProps) => {
  const classes = useStyles();
  const param = useParams();
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  const [height, setHeight] = useState(isBrowser ? window.innerHeight : 0);
  useEffect(() => {
    window.addEventListener('resize', () => setHeight(window.innerHeight));
  });

  const { setInterest, selectedInterest } = useContext(interestContext);
  // eslint-disable-next-line
  const [openWarning, setWarning] = useState(false);
  const [open, setOpen] = useState(false);
  const [openConfirm, setOpenConfirm] = useState(false);
  const handelOpen = () => setOpen(true);
  const onHandelClose = () => setOpen(false);
  const onHandelCloseWarning = () => setWarning(false);

  const { parcours } = useContext(parcoursContext);
  const [selectedInterests, setSelectedInterest] = useState(
    selectedInterest || parcours?.families || ([] as Families[]),
  );
  useEffect(() => {
    setInterest(selectedInterests);
  }, [setInterest, selectedInterests]);

  useEffect(() => {
    setInterest(selectedInterests);
  }, [setInterest, selectedInterests]);

  const { data, loading } = useFamilies();
  const formattedData: { title: string; data: Families[] }[] = useMemo(
    () =>
      Object.entries(groupBy(data?.families.data, 'category')).map((el) => ({
        title: el[0],
        data: el[1],
      })),
    [data],
  );
  const renderAllPlaceholder = () => {
    const array: JSX.Element[] = [];
    for (let i = 1; i <=5; i += 1) {
      array.push(   <div
        key={i}
        className={classNames(
          selectedInterest?.length && i <= selectedInterest?.length && classes.circleSelected,
          classes.circle,
        )}
        onClick={() => setOpenConfirm(true)}
      >
        {i}
      </div>);
    }
    return array;
  };

  const renderPlaceholder = () => {
    const array: JSX.Element[] = [];
    
    if (selectedInterest) {
      for (let i = selectedInterests.length + 1; i <= 5; i += 1) {
        if (i <= 4) {
          array.push(<PlaceHolder  index={i} key={i} direction="horizontal" />);
          array.push(<Divider style={{ backgroundColor: '#C9C9C7' }} />);
        } else {
          array.push(<PlaceHolder  index={i} key={i} direction="horizontal" />);
        }
      }

      return array;
    }
  };

  const isChecked = (id?: string): boolean => !!selectedInterests.find((elem) => elem.id === id);
  const handleClick = (e: Families) => {
    let copySelected: Families[] = [...selectedInterests];
    if (copySelected.length !== 5) {
      if (isChecked(e.id)) {
        copySelected = selectedInterests.filter((ele) => ele.id !== e?.id);
      } else if (selectedInterests.length < 5) {
        copySelected.push(e);
      }
      setInterest(copySelected);
      setSelectedInterest(copySelected);
    } else if (copySelected.length === 5) {
      if (isChecked(e.id)) {
        copySelected = selectedInterests.filter((ele) => ele.id !== e?.id);
        setInterest(copySelected);
        setSelectedInterest(copySelected);
      } else {
        handelOpen();
      }
    }
  };
  useEffect(() => {
    const test = selectedInterest?.every((interet) => interet.category === "avec d'autres personnes");

    if (selectedInterest?.length === 5 && test) setWarning(true);
  }, [selectedInterest]);

  const deleteFamille = (id: number) => {
    const familleSelected = selectedInterests[id];
    let copySelected: Families[] = [...selectedInterests];
    if (isChecked(familleSelected?.id)) {
      copySelected = selectedInterests.filter((ele) => ele.id !== familleSelected.id);
    }

    setSelectedInterest(copySelected);
  };
  const handelClose = () => setOpenConfirm(false);



  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
            
          <div className={classes.circleContainer}>
            {loading ? (
              <div className={classes.loadingContainer}>
                <Spinner />
              </div>
            ) : (
              <Slider
                data={formattedData}
                handleClick={handleClick}
                isChecked={isChecked}
                defaultIndex={Number((param as any).id)}
              />
            )}
          </div>
        </div>

        <div className={classes.fiveCircle}>
        {renderAllPlaceholder()}

      
          <div className={classes.validerButton}>
            {selectedInterest && selectedInterest?.length >= 3 && (
              <div className={classes.btnNext}>
                <Link to={`/interet/ordre/${location}`} className={classes.wrapperBtn}>
                  <Button className={classes.btn}>
                    <div className={classes.contentBtn}>
                      <div className={classes.btnLabel}>Valider</div>
                    </div>
                  </Button>
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
      <ModalContainer
        open={open}
        backdropColor="#011A5E"
        colorIcon="#420FAB"
        height={60}
        size={90}
        style={{
      overflow:'hidden !important'
        }}
      >
        <div className={classes.modalAtt}>
          <div className={classes.closePop1} style={{ zIndex: 1 }}>
            <img src={closeButton} alt="att" width={50} height={50} onClick={onHandelClose} />
          </div>
          <div className={classes.titleContainerModal}>ATTENTION !</div>
          <div className={classes.textModal}>
            Tu as déjà choisi 5 familles d’intérêts, tu dois en supprimer si tu souhaites en ajouter de nouvelles.
          </div>
          <div>
            <Button onClick={onHandelClose} className={classes.btn}>
              <div className={classes.comprisButton}>J'ai compris !</div>
            </Button>
          </div>
        </div>
      </ModalContainer>
      <ModalContainer open={openWarning} backdropColor="#011A5E" colorIcon="#420FAB" size={90} height={60}>
        <div
className={classes.modalAtt2}
        >
          <div className={classes.closePop1} style={{ zIndex: 1 }}>
            <img src={closeButton} alt="att" width={50} height={50} onClick={onHandelCloseWarning} />
          </div>
          <div className={classes.titleContainerModal}>UNE PETITE MINUTE...</div>
          <div className={classes.textModal} style={height < 400 ? { padding: '0px' } : {}}>
            Tu as choisi tes familles d’intérêts seulement dans la 1ère partie, es-tu sûr.e d’avoir exploré toutes les
            familles d’intérêts
          </div>
          <div>
            <Button onClick={onHandelCloseWarning} className={classes.btn}>
              <div className={classes.comprisButton}>J'ai compris !</div>
            </Button>
          </div>
        </div>
      </ModalContainer>
      <Dialog
        open={openConfirm}
        keepMounted
        style={{
          overflow: 'hidden !important',
        }}
      >
     
        <div className={classes.diagPop}>
        <div className={classes.closePop} style={{ zIndex: 1 }}>
          <img src={closeButton} alt="att" width={35} height={35} onClick={handelClose} />
        </div>
          <div className={classes.headerModelConfirm}>
            <span className={classes.textModelConfirm}>
              Ma sélection ({selectedInterest?.length}
              /5)
            </span>
            <Arrow color="white" width="22" height="22" className={classes.arrowStyle} />
          </div>
          <div
            style={{
              overflow: 'auto  !important',
            }}
          >
            {selectedInterests.map((el, i) => (
              <>
                <div>
                  <div className={classes.itemRow} key={el.id}>
                    <FamileSelected
                      handleClick={() => deleteFamille(i)}
                      famille={el}
                      index={i}
                      direction="horizontal"
                    />
                  </div>
                </div>
                <Divider style={{ margin: '-1' }} />
              </>
            ))}
          </div>
          {!loading && renderPlaceholder()}
        </div>
      </Dialog>
    </div>
  );
};

export default ParcoursInteret;
