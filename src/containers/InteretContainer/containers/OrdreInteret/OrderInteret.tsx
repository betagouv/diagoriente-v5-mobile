import React, { useState, useContext, useEffect } from 'react';
import { Redirect, Link, RouteComponentProps } from 'react-router-dom';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Families } from 'requests/types';
import { useUpdateParcour } from 'requests/parcours';
import classNames from 'utils/classNames';
import { decodeUri } from 'utils/url';
import interestContext from 'contexts/InterestSelected';
import ParcourContext from 'contexts/ParcourContext';
import NextButton from 'components/nextButton/nextButton';
import FamileSelected from '../../components/SelectedFamille/SelectedFamille';
import useStyles from './styles';

const OrderInteret = ({ history, location }: RouteComponentProps) => {
  const [updateCall, updateState] = useUpdateParcour();
  const [error, setError] = useState('');
  const { selectedInterest, setInterest } = useContext(interestContext);
  const { setParcours } = useContext(ParcourContext);
  const classes = useStyles();
  const [orderedArray, setOrderedArray] = useState([] as Families[]);

  const isChecked = (id?: string): boolean => !!orderedArray.find((elem) => elem.id === id);

  const handelClick = (item?: Families) => {
    let copySelected: Families[] = [...orderedArray];
    if (isChecked(item?.id)) {
      copySelected = orderedArray.filter((ele) => ele.id !== item?.id);
    } else if (orderedArray.length < 5 && item) {
      copySelected.push(item);
    }

    setOrderedArray(copySelected);
  };
  useEffect(() => {
    if (orderedArray.length === selectedInterest?.length || orderedArray.length === 0) {
      setError('');
    }
  }, [selectedInterest, orderedArray]);

  useEffect(() => {
    if (updateState.data && !updateState.error) {
      setParcours(updateState.data.updateParcour);
      const { profil } = decodeUri(location.search);
      history.push(profil ? '/profile/interest' : '/interet/result');
    }
    // eslint-disable-next-line
  }, [updateState.data, updateState.error]);

  const onUpdate = () => {
    const dataToSend = selectedInterest?.map(el => el.id);
    if(selectedInterest) {
    updateCall({ variables: { families: dataToSend } });

    }
  };

  const reorder = (list: any, startIndex: any, endIndex: any) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };
  const onDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    const items: any = reorder(selectedInterest, result.source.index, result.destination.index);
    setInterest(items);
  };

  if (!selectedInterest) return <Redirect to="/interet/main" />;
  return (
    <div className={classes.container}>
      <div className={classes.content}>
        <div className={classes.wrapper}>
          <div className={classes.subTitle}>
            <div>Bravo ! Tu as sélectionné tes familles d&lsquo;intérêts.</div>
            <div>Maintenant classe-les par ordre d’importance pour toi :</div>
          </div>
          <div className={classes.listSelected}>
            <div className={classes.rowItem}>
              {selectedInterest.map((el, index) => (
                <div className={classes.rowParent}>
                  <div className={classes.indexItem}>
                    <span className={classes.index}>{index + 1}</span>
                  </div>
                </div>
              ))}
            </div>
            <div className={classes.wrapperList}>
              <div className={classes.wrapperListItem}>
                {selectedInterest && (
                  <DragDropContext onDragEnd={onDragEnd}>
                    <Droppable droppableId="droppable">
                      {(provided, snapshot) => (
                        <div {...provided.droppableProps} ref={provided.innerRef}>
                          {selectedInterest.map((ele, index) => (
                            <Draggable key={ele.id} draggableId={`item-${ele.id}`} index={index}>
                              {(provided, snapshot) => (
                                <div ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                                  <div
                                    className={classNames(
                                      classes.itemList,
                                      snapshot.draggingOver && classes.drag_on_drag,
                                    )}
                                    key={ele.id}
                                  >
                                    <FamileSelected
                                      famille={ele}
                                      index={index}
                                      handleClick={() => handelClick(ele)}
                                      direction="horizontal"
                                      type="ordre"
                                    />
                                  </div>
                                </div>
                              )}
                            </Draggable>
                          ))}
                          {provided.placeholder}
                        </div>
                      )}
                    </Droppable>
                  </DragDropContext>
                )}
              </div>

              <div className={classes.hiddenList}>
                {selectedInterest.map((el) => (
                  <div className={classes.holderItem} />
                ))}
              </div>
            </div>
          </div>
          <div className={classes.btnContainer}>
            <NextButton
              fetching={updateState.loading}
              onClick={onUpdate}
              className={classes.btn}
              classNameTitle={classes.btnLabel}
              ArrowColor="#fff"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderInteret;
