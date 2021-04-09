import React, { useMemo, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Theme } from 'requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import Input from 'components/inputs/Input/Input';
import moment from 'moment';
import DatePicker from './components/DatePicker/DatePicker';
import CheckBox from 'components/inputs/CheckBox/CheckBox';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  setStartDate: (e: string) => void;
  startDate: string;
  endDate: string;
  setEndDate: (e: string) => void;
  addSkill: () => void;
  addSkillState: boolean;
  theme: Theme | null;
  activities: string[];
}
const EngagementDate = ({
  history,
  setStartDate,
  startDate,
  endDate,
  setEndDate,
  addSkill,
  addSkillState,
  match,
  location,
  theme,
  activities,
}: Props) => {
  const classes = useStyles();
  const [checked, setChecked] = useState(false);
  const handleChange = (date: string, type: 'Begin' | 'End') => {
    if (type === 'Begin') setStartDate(date);
    else setEndDate(date);
  };
  /*  const handelChangeInput = (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    setOrganization(value);
  }; */

  const startDateEngagement = useMemo(() => moment(startDate), [startDate]);

  const endDateEngagement = useMemo(() => moment(endDate), [endDate]);

  const isBeginDateValid = startDateEngagement.month() === Number(moment(startDate).format('MM')) - 1;
  const isEndDateValid = endDateEngagement.month() === Number(moment(endDate).format('MM')) - 1;
  const errorText = 'La date est invalide';
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  const handleOnGoingClick = (e: Event) => {
    e.preventDefault();
    setChecked(!checked);
  };
  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });

  console.log('startDate', startDate);
  console.log('endDate', endDate);
  return (
    <div className={classes.root}>
      <BreadCrumb theme={theme} activities={activities} />
      <div className={classes.container}>
        <p className={classes.title}>Pour finir, à quelles dates s’est déroulée cette expérience d’engagement ?</p>
        {/*  <div className={classes.dateContainer}> */}
        {/* <div className={classes.inputContainer}>
            <span className={classes.text}>Nom de l’organisation</span>
            <Input
              name="organization"
              onChange={handelChangeInput}
              value={organization}
              placeholder="Nom de l’organisation"
              required
              withOutIcons
            />
          </div> */}
        <div className={classes.date}>
          <div className={classes.textContainer}>
            <span className={classes.text}>Date de début</span>
            <span className={classes.note}>(obligatoire)</span>
          </div>
          <div className={classes.datePickerContainer}>
            <DatePicker
              autoWidthMenu={false}
              handleChange={(e) => handleChange(e, 'Begin')}
              month={startDate.slice(5, 7)}
              year={startDate.slice(0, 4)}
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
            <DatePicker
              autoWidthMenu={true}
              handleChange={(e) => handleChange(e, 'End')}
              month={endDate.slice(5, 7)}
              year={endDate.slice(0, 4)}
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
export default EngagementDate;
