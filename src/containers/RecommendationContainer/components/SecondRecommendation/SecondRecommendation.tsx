import React, { useState, useEffect } from 'react';
import { Link, Redirect, RouteComponentProps } from 'react-router-dom';
import TextField from '@material-ui/core/TextField/TextField';
import { useDidMount } from 'common/hooks/useLifeCycle';
import TitleSection from 'components/common/TitleSection/TitleSection';
import RadioButton from 'components/radioButton/RadioButton';
import AutoComplete from 'components/inputs/AutoComplete/AutoComplete';
import Button from 'components/button/Button';

import medaille from 'assets/svg/medaille.svg';
import LogoLocation from 'assets/form/location.png';

import { useLocation } from 'common/requests/location';
import { useUpdateSkillComment } from 'common/requests/skillComment';
import { PublicSkill } from 'common/requests/types';

import useStyles from './styles';

interface Props extends RouteComponentProps {
  skill: PublicSkill;
  comment: string;
}

const SecondRecommendation = ({ skill, comment, location }: Props) => {
  useDidMount(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
  });
  const classes = useStyles();
  const [selectedLocation, setSelectedLocation] = useState('');
  const [search, setSearch] = useState('');
  const [locationCall, { data }] = useLocation({ variables: { search } });
  const [value, setValue] = useState('');
  const [institution, setInstitution] = useState('');
  const [updateCall, updateState] = useUpdateSkillComment();

  const title = (
    <span>
      Recommanderiez-vous le travail de
      {' '}
      {skill.user.firstName}
      {' '}
      {skill.user.lastName}
      {' '}
      à des recruteurs
      <br />
      (votre réponse restera confidentielle) ?
    </span>
  );
  useEffect(() => {
    if (search.length > 0) {
      locationCall();
    }
  }, [search, locationCall]);
  const institutionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInstitution(e.target.value);
  };
  const onSubmit = () => {
    updateCall({
      variables: {
        commentText: comment,
        id: skill.comment.id,
        status: value === 'Oui' ? 'accepted' : 'refused',
        location: selectedLocation,
        institution,
      },
    });
  };

  const onSelect = (e: string | null) => {
    if (e) setSelectedLocation(e);
  };

  if (updateState.data) {
    return <Redirect to={`/recommendation/done${location.search}`} />;
  }

  return (
    <div className={classes.container}>
      <TitleSection image={medaille} title={title} />
      <div className={classes.buttonContainer}>
        <div className={classes.buttonRadio}>
          <RadioButton
            label="Oui"
            value={value}
            onChange={(e) => {
              setValue(e.target.value);
            }}
          />
        </div>
      </div>
      <span className={classes.recommendation}>Nom de structure </span>
      <TextField
        name="institution"
        value={institution}
        placeholder="saisie votre nom de l'institution"
        onChange={institutionChange}
        InputProps={{
          classes: {
            input: classes.defaultValue,
          },
        }}
        className={classes.textArea}
        variant="outlined"
      />
      <div className={classes.location}>
        <span className={classes.recommendation}>Pour finir, dans quelle commune se situe votre établissement ? </span>
        <AutoComplete
          containerClassName={classes.containerClassName}
          freeSolo={false}
          label=""
          value={selectedLocation}
          name="location"
          placeholder="paris"
          options={data?.location || []}
          onSelectText={onSelect}
          icon={LogoLocation}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className={classes.btnContainerModal}>
        <Button className={classes.btn} disabled={!value} onClick={onSubmit}>
          <div className={classes.btnLabel}>Terminer</div>
        </Button>
      </div>
      <Link to="/" className={classes.btnpreced}>
        Annuler
      </Link>
    </div>
  );
};
export default SecondRecommendation;
