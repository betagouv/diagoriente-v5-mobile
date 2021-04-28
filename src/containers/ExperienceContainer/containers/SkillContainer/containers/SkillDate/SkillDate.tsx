import React, { useState, useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import moment from 'moment';
import useOnclickOutside from 'common/hooks/useOnclickOutside';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import ValidationButton from 'components/valideButton/valideButton';
import Select from './component/SelectDateSkill';
import useStyles from './style';

interface Props extends RouteComponentProps<{ themeId: string }> {
  startDate: string;
  setStartDate: (e: string) => void;
  endDate: string;
  setEndDate: (e: string) => void;
  addSkill: () => void;
  theme: Theme | null;
  activities: string[];
  months?: any;
  errorText: string;
}
const SkillDate = ({
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  addSkill,
  theme,
  activities,
  months,
  errorText,
}: Props) => {
  const classes = useStyles();

  /* const isBeginDateValid = startDateEngagement.month() === Number(moment(startDate).format('MM')) - 1;
  const isEndDateValid = endDateEngagement.month() === Number(moment(endDate).format('MM')) - 1; */

  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);
  const [error, setError] = useState('');
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  const [monthStart, setMonthStart] = useState(startDate ? moment(startDate).format('MM') : '');
  const [monthStartText, setMonthStartText] = useState(startDate ? moment(startDate).format('MMMM') : '');
  const [monthEnd, setMonthEnd] = useState(endDate ? moment(endDate).format('MM') : '');
  const [monthEndText, setMonthEndText] = useState(endDate ? moment(endDate).format('MMMM') : '');
  const [yearStart, setYearStart] = useState(startDate ? moment(startDate).format('YYYY') : '');
  const [yearEnd, setYearEnd] = useState(endDate ? moment(endDate).format('YYYY') : '');
  const [checked, setChecked] = useState(false);

  useOnclickOutside(startRef, () => {
    if (isOpenStart) setIsOpenStart(false);
  });
  useOnclickOutside(endRef, () => {
    if (isOpenEnd) setIsOpenEnd(false);
  });

  useEffect(() => {
    if (yearStart && monthStart) {
      setStartDate(moment(`${yearStart}-${monthStart}-01`).format('YYYY-MM-DD'));
    }
  }, [yearStart, monthStart]);

  /* useEffect(() => {
    if (yearEnd && monthEnd) {
      setEndDate(moment(`${yearEnd}-${monthEnd}-01`).format('YYYY-MM-DD'));
    } else setEndDate('');
  }, [yearEnd, monthEnd]); */

  useEffect(() => {
    if (checked) {
      setEndDate(moment().format('YYYY-MM-DD'));
      setYearEnd('');
      setMonthEndText('');
      setMonthEnd('');
    } else if (yearEnd && monthEnd) {
      setEndDate(moment(`${yearEnd}-${monthEnd}-01`).format('YYYY-MM-DD'));
    } else setEndDate('');
  }, [checked, yearEnd, monthEnd]);

  const onClickItem = (e: { label: string; value: string }, type: string) => {
    if (type === 'begin') {
      setMonthStart(e.value);
      setMonthStartText(e.label);
      setIsOpenStart(false);
    } else {
      setMonthEnd(e.value);
      setMonthEndText(e.label);
      setIsOpenEnd(false);
    }
  };

  const handleOnGoingClick = (e: Event) => {
    e.preventDefault();
    setChecked(!checked);
  };

  const renderType = (text?: string) => {
    let type = '';
    if (text) {
      switch (text) {
        case 'personal': {
          type = 'personnelle';
          break;
        }
        case 'professional': {
          type = 'professionnelle';
          break;
        }
        case 'engagement': {
          type = "d'engagement";
          break;
        }
        case 'sport': {
          type = 'sportive';
          break;
        }
        default: {
          type = 'personnelle';
          break;
        }
      }
    }

    return type;
  };

  useEffect(() => {
    if (yearStart && !monthStart) {
      setError('Veuillez renseigner le mois de la date de début');
    } else if (!yearStart && monthStart) {
      setError("Veuillez renseigner l'année de la date de début");
    } else if (!yearEnd && monthEnd) {
      setError("Veuillez renseigner l'année de la date de fin");
    } else if (yearEnd && !monthEnd) {
      setError('Veuillez renseigner le mois de la date de fin');
      /*  } else if ((!yearStart && yearEnd && monthEnd) || (!monthStart && yearEnd && monthEnd)) {
      setError(' Les champs de la date de début sont obligatoires'); */
    } else if (
      ((yearStart && monthStart) || (!yearStart && !monthStart)) &&
      ((yearEnd && monthEnd) || (!yearEnd && !monthEnd))
    )
      setError('');
  }, [yearStart, monthStart, yearEnd, monthEnd]);

  console.log('monthEnd', monthEnd);
  console.log('yearEnd', yearEnd);
  console.log('monthEndText', monthEndText);
  console.log('endDate', endDate);

  return (
    <div className={classes.root}>
      <BreadCrumb theme={theme} activities={activities} />
      <div className={classes.container}>
        <p className={classes.title}>
          Pour finir, à quelles dates s’est déroulée cette expérience {renderType(theme?.type)} ?
        </p>
        <div className={classes.error}>{error}</div>
        <div className={classes.date}>
          <div className={classes.textContainer}>
            <span className={classes.text}>Date de début</span>
            <span className={classes.note}>(optionnelle)</span>
          </div>
          <div className={classes.datePickerContainer}>
            <Select
              value={monthStartText}
              placeholder="Mois"
              name="monthStart"
              isOpen={isOpenStart}
              options={months}
              onClick={() => setIsOpenStart(!isOpenStart)}
              onClickItem={(e) => onClickItem(e, 'begin')}
              ref={startRef}
            />
            <input
              className={classes.yearContainer}
              value={yearStart}
              placeholder="AAAA"
              onChange={(e) => setYearStart(e.target.value)}
              type="number"
            />

            <span className={classes.example}>Ex: 2018</span>
          </div>
        </div>
        {/* <div className={classes.errorText}>{!isBeginDateValid ? errorText : ''}</div> */}
        <div className={classes.date}>
          <div className={classes.textContainer}>
            <span className={classes.text}>Date de fin</span>
            <span className={classes.note}>(optionnelle)</span>
          </div>
          <div className={classes.datePickerContainer}>
            <Select
              value={monthEndText}
              placeholder="Mois"
              name="monthEnd"
              isOpen={isOpenEnd}
              options={months}
              onClick={() => setIsOpenEnd(!isOpenEnd)}
              onClickItem={(e) => onClickItem(e, 'end')}
              ref={endRef}
            />
            <input
              className={classes.yearContainer}
              value={yearEnd}
              placeholder="AAAA"
              onChange={(e) => setYearEnd(e.target.value)}
              type="number"
              disabled={checked}
            />
            <span className={classes.example}>Ex: 2018</span>
          </div>
          <div className={classes.onGoingContainer} onClick={(e) => handleOnGoingClick(e as any)}>
            <CheckBox checked={checked} color="#00B2DB" border="#00B2DB" background="#FFFFFF" />
            <span className={classes.onGoingLabel}>Expérience toujours en cours</span>
          </div>
        </div>
        {/*  <div className={classes.errorText}>{!isEndDateValid ? errorText : ''}</div> */}
        <div className={classes.errorText}>{errorText || ''}</div>
      </div>

      <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={addSkill} />
    </div>
  );
};

SkillDate.defaultProps = {
  months: moment.months().map((month, index) => ({
    value: index + 1 < 10 ? `0${index + 1}` : String(index + 1),
    label: month[0].toUpperCase() + month.slice(1),
  })),
};
export default SkillDate;
