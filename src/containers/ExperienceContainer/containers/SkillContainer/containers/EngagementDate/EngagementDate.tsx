import React, { useMemo , useEffect,useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import Input from 'components/inputs/Input/Input';
import TitleImage from 'components/common/TitleImage/TitleImage';
import Title from 'components/common/TitleImage/TitleImage';
import NextButton from 'components/nextButton/nextButton';

import moment from 'moment';
import PreviousButton from 'components/previousButton/previousButton';

import blueline from 'assets/svg/blueline.svg';
import DatePicker from './components/DatePicker/DatePicker';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  setStartDate: (e: string) => void;
  startDate: string;
  endDate: string;
  setEndDate: (e: string) => void;
  setOrganization: (e: string) => void;
  addSkill: () => void;
  addSkillState: boolean;
  organization: string;
}
const EngagementDate = ({
  history,
  setStartDate,
  startDate,
  endDate,
  setEndDate,
  setOrganization,
  addSkill,
  addSkillState,
  match,
  location,
  organization,
}: Props) => {
  const classes = useStyles();

  const handleChange = (date: string, type: 'Begin' | 'End') => {
    if (type === 'Begin') setStartDate(date);
    else setEndDate(date);
  };
  const handelChangeInput = (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    setOrganization(value);
  };

  const startDateEngagement = useMemo(() => moment(startDate), [startDate]);

  const endDateEngagement = useMemo(() => moment(endDate), [endDate]);

  const isBeginDateValid = startDateEngagement.month() === Number(moment(startDate).format('MM')) - 1;
  const isEndDateValid = endDateEngagement.month() === Number(moment(endDate).format('MM')) - 1;
  const errorText = 'La date est invalide';
  const isBrowser = typeof window !== 'undefined';
  const [width, setWidth] = useState(isBrowser ? window.innerWidth : 0);

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  });
  return (
    <div className={classes.root}>
      <div className={classes.container}>
        <div className={classes.header}>
        <Title
          title= "MES EXPÉRIENCES D’ENGAGEMENT"
          color="#223A7A"
          size={width > 380 ? 32 : 25}
          image={blueline}
          number={6}
        />
        </div>
        <div className={classes.themeContainer}>
          <p className={classes.title}>
            Pour finir, à quelles dates s’est déroulée cette
            <br />
            expérience d’engagement
            <br />
          </p>
          <div className={classes.dateContainer}>
            <div className={classes.inputContainer}>
              <span className={classes.text}>Nom de l’organisation</span>
              <Input
                name="organization"
                onChange={handelChangeInput}
                value={organization}
                placeholder="Nom de l’organisation"
                required
                withOutIcons
              />
            </div>
            <div className={classes.date}>
              <span className={classes.text}>Du</span>
              <DatePicker
                handleChange={(e) => handleChange(e, 'Begin')}
                day={startDate.slice(8)}
                month={startDate.slice(5, 7)}
                year={startDate.slice(0, 4)}
              />
            </div>
            {/* <div className={classes.errorText}>{!isBeginDateValid ? errorText : ''}</div> */}
            <div className={classes.date}>
              <span className={classes.text}>Au</span>
              <DatePicker
                handleChange={(e) => handleChange(e, 'End')}
                day={endDate.slice(8)}
                month={endDate.slice(5, 7)}
                year={endDate.slice(0, 4)}
              />
            </div>
            <div className={classes.errorText}>{!isEndDateValid ? errorText : ''}</div>
          </div>
         
        </div>
  
          <div className={classes.previousNext}>
            <Link
              to={`/experience/skill/${match.params.themeId}/context${location.search}`} 
              className={classes.hideLine}
            >
              <PreviousButton classNameTitle={classes.classNameTitle} ArrowColor="#4D6EC5" />
            </Link>

            <div  className={classes.hideLine}>
              <NextButton fetching={addSkillState} onClick={addSkill} disabled={!isBeginDateValid || !isEndDateValid}  />
            </div>
          </div>


   
      </div>
    </div>
  );
};
export default EngagementDate;
