import React, { useState, useEffect } from 'react';
import { Question, Option } from 'requests/types';
import classNames from 'utils/classNames';
import { useQuestions } from 'requests/questions';
import deleteX from 'assets/svg/deleteX.svg';
import Select from '../QuestionSelect/ActivitySelect';
import useStyles from './styles';

interface Props {
  setOptionActivities: (optionsActivities: { id: string; title: string }[][]) => void;
  optionActivities: { id: string; title: string }[][];
  index: number;
  handleValidate?: (valid: boolean, index: number) => void;
  clearValid?: (index: number) => void;
  valid?: boolean[];
}

const QuestionList = ({ setOptionActivities, optionActivities, index, handleValidate, clearValid, valid }: Props) => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  const [questions, setQuestions] = useState([] as Question[]);

  const { data } = useQuestions({ variables: { path: optionActivities[index].map((o) => o.id) } });

  useEffect(() => {
    if (data) {
      const question = data.questions.data.sort((a, b) => {
        if (!a.parent) return -1;
        if (!b.parent) return 1;
        if (a.id === b.parent.id) return -1;
        if (b.id === a.parent.id) return 1;
        return 0;
      });
      setQuestions(question);
    }

    // eslint-disable-next-line
  }, [data?.questions.data]);

  useEffect(() => {
    if (handleValidate) {
      handleValidate(!questions.find((q, i) => !optionActivities[index][i]), index);
    }
    // eslint-disable-next-line
  }, [questions, optionActivities]);

  const openActivity = () => {
    setOpen(true);
  };

  const handleChange = (option: Option, i: number) => {
    const nextOptionsActivities = [...optionActivities];
    const newValuesRow = nextOptionsActivities[index];
    const newOptionsValues = newValuesRow.slice(0, i);
    newOptionsValues[i] = { id: option.id, title: option.title };
    nextOptionsActivities[index] = newOptionsValues;
    setOptionActivities(nextOptionsActivities);
  };

  const deleteActivity = () => {
    if (optionActivities.length > 1) {
      if (clearValid) clearValid(index);
      setOptionActivities(optionActivities.filter((act, i) => i !== index));
    } else {
      setOptionActivities([[]]);
    }
  };
  const deleteAnswer = (i: number) => {
    const nextOptionsActivities = [...optionActivities];
    const newValuesRow = nextOptionsActivities[index];
    const newOptionsValues = newValuesRow.slice(0, i);
    nextOptionsActivities[index] = newOptionsValues;
    setOptionActivities(nextOptionsActivities);
  };

  return (
    <>
      {questions.map((question, i) => (
        <>
          <div key={question.id} className={classNames(classes.rowActivity)}>
            <div className={classes.selectContainer}>
              <Select
                index={i}
                openActivity={openActivity}
                onChange={(e) => handleChange(e, i)}
                value={optionActivities && optionActivities[index][i] ? optionActivities[index][i].id : ''}
                setOpen={setOpen}
                open={open}
                question={question}
                parent={optionActivities[index]
                  .slice(0, i)
                  .map((e) => e.id)
                  .join(',')}
              />
            </div>

            {(optionActivities[index].length > i || (optionActivities.length > 1 && index !== 0)) && (
              <div className={classes.deleteContainer} onClick={() => deleteAnswer(i)}>
                <img src={deleteX} alt="" />
              </div>
            )}
          </div>
          {optionActivities.length > 1 &&
            index !== optionActivities.length - 1 &&
            ((valid && valid[index] && i === optionActivities[index].length - 1) ||
              (valid && !valid[index] && i === optionActivities[index].length)) && (
              <div className={classes.divider}></div>
            )}
        </>
      ))}
    </>
  );
};
export default QuestionList;
