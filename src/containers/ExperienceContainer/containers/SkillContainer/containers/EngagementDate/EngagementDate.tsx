import React, { useMemo, useState, useRef, useEffect } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import moment from 'moment';
import useOnclickOutside from 'common/hooks/useOnclickOutside';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import ValidationButton from 'components/valideButton/valideButton';
// eslint-disable-next-line max-len
import Select from 'containers/ExperienceContainer/containers/SkillContainer/containers/SkillDate/component/SelectDateSkill';
/* import DatePicker from './components/DatePicker/DatePicker'; */
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  startDate: string;
  endDate: string;
  addSkill: () => void;
  theme: Theme | null;
  activities: string[];
  months?: any;
}
const EngagementDate = ({ startDate, endDate, addSkill, theme, activities, months }: Props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  /*  const handleChange = (date: string, type: 'Begin' | 'End') => {
    if (type === 'Begin') setStartDate(date);
    else setEndDate(date);
  };
 */
  const startDateEngagement = useMemo(() => moment(startDate), [startDate]);

  const endDateEngagement = useMemo(() => moment(endDate), [endDate]);

  const isBeginDateValid = startDateEngagement.month() === Number(moment(startDate).format('MM')) - 1;
  const isEndDateValid = endDateEngagement.month() === Number(moment(endDate).format('MM')) - 1;

  const startRef = useRef<HTMLDivElement>(null);
  const endRef = useRef<HTMLDivElement>(null);

  // _____________________________________
  const [error, setError] = useState('');
  const [isOpenStart, setIsOpenStart] = useState(false);
  const [isOpenEnd, setIsOpenEnd] = useState(false);
  // eslint-disable-next-line
  const [monthStart, setMonthStart] = useState(startDate ? moment(startDate).format('MM') : '');
  const [monthStartText, setMonthStartText] = useState(startDate ? moment(startDate).format('MMMM') : '');
  // eslint-disable-next-line
  const [monthEnd, setMonthEnd] = useState(endDate ? moment(endDate).format('MM') : '');
  const [monthEndText, setMonthEndText] = useState(endDate ? moment(endDate).format('MMMM') : '');
  const [yearStart, setYearStart] = useState(startDate ? moment(startDate).format('YYYY') : '');
  const [yearEnd, setYearEnd] = useState(endDate ? moment(endDate).format('YYYY') : '');

  useOnclickOutside(startRef, () => {
    if (isOpenStart) setIsOpenStart(false);
  });
  useOnclickOutside(endRef, () => {
    if (isOpenEnd) setIsOpenEnd(false);
  });

  /* const checkDate = () => {
    if (yearStart && monthStart && !yearEnd && !monthEnd) {
      onSubmit(moment(`${yearStart}-${monthStart}-01`).format('YYYY-MM-DD'));
    } else if (yearStart && !monthStart) {
      setError('Veuillez renseigner le mois de la date de début');
    } else if (!yearStart && monthStart) {
      setError("Veuillez renseigner l'année de la date de début");
    } else if (yearStart && monthStart && !yearEnd && monthEnd) {
      setError("Veuillez renseigner l'année de la date de fin");
    } else if (yearStart && monthStart && yearEnd && !monthEnd) {
      setError('Veuillez renseigner le mois de la date de fin');
    } else if ((!yearStart && yearEnd && monthEnd) || (!monthStart && yearEnd && monthEnd)) {
      setError(' Les champs de la date de début sont obligatoires');
    } else if (yearStart && monthStart && yearEnd && monthEnd) {
      onSubmit(
        moment(`${yearStart}-${monthStart}-01`).format('YYYY-MM-DD'),
        moment(`${yearEnd}-${monthEnd}-01`).format('YYYY-MM-DD'),
      );
    } else {
      onSubmit();
    }
  }; */
  useEffect(() => {
    if (yearStart && monthStart) {
      setError('');
    }
  }, [yearStart, monthStart]);

  const errorText = 'La date est invalide';

  const handleOnGoingClick = (e: Event) => {
    e.preventDefault();
    setChecked(!checked);
  };

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
            <span className={classes.note}>(obligatoire)</span>
          </div>
          <div className={classes.datePickerContainer}>
            {/*  <DatePicker
              autoWidthMenu={false}
              handleChange={(e) => handleChange(e, 'Begin')}
              month={startDate.slice(5, 7)}
              year={startDate.slice(0, 4)}
            /> */}
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
            {/* <DatePicker
              autoWidthMenu
              handleChange={(e) => handleChange(e, 'End')}
              month={endDate.slice(5, 7)}
              year={endDate.slice(0, 4)}
            /> */}
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
            />
            <span className={classes.example}>Ex: 2018</span>
          </div>
        </div>
        <div className={classes.errorText}>{!isEndDateValid ? errorText : ''}</div>
        <div className={classes.onGoingContainer} onClick={(e) => handleOnGoingClick(e as any)}>
          <CheckBox checked={checked} color="#00B2DB" border="#00B2DB" background="#FFFFFF" />
          <span className={classes.onGoingLabel}>Expérience toujours en cours</span>
        </div>
        {/* </div> */}

        {/* <div className={classes.previousNext}>
          <Link to={`/experience/skill/${match.params.themeId}/context${location.search}`} className={classes.hideLine}>
            <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
          </Link>

          <div className={classes.hideLine}>
            <NextButton fetching={addSkillState} onClick={addSkill} disabled={!isBeginDateValid || !isEndDateValid} />
          </div>
        </div> */}
      </div>
      {isBeginDateValid && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => addSkill} />
      )}
    </div>
  );
};

EngagementDate.defaultProps = {
  months: moment.months().map((month, index) => ({
    value: index + 1 < 10 ? `0${index + 1}` : String(index + 1),
    label: month[0].toUpperCase() + month.slice(1),
  })),
};
export default EngagementDate;
