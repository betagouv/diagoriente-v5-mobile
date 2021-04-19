import React, { useMemo, useEffect, useState } from 'react';
import { Link, RouteComponentProps } from 'react-router-dom';
import { Theme } from 'common/requests/types';
import BreadCrumb from 'components/common/BreadCrumb/BreadCrumb';
import Input from 'components/inputs/Input/Input';
import ValidationButton from 'components/valideButton/valideButton';
import useStyles from './styles';

interface Props extends RouteComponentProps<{ themeId: string }> {
  setOrganization: (e: string) => void;
  organization: string;
  theme: Theme | null;
  activities: string[];
}
const EngagementOrganisation = ({
  history,
  setOrganization,
  match,
  location,
  organization,
  theme,
  activities,
}: Props) => {
  const classes = useStyles();

  const handelChangeInput = (e: React.ChangeEvent<any>) => {
    const { value } = e.target;
    setOrganization(value);
  };
  const onNavigate = () => {
    {
      organization && history.push(`/experience/skill/${match.params.themeId}/date${location.search}`);
    }
  };
  return (
    <div className={classes.root}>
      <BreadCrumb theme={theme} activities={activities} />
      <div className={classes.container}>
        <p className={classes.title}>Quel est le nom de l’organisation ?</p>
        <Input
          name="organization"
          onChange={handelChangeInput}
          value={organization}
          placeholder="Exemple : Restos du coeur"
          required
          withOutIcons
          inputBaseClassName={classes.inputBase}
        />
      </div>
      {organization && (
        <ValidationButton label="Valider" bgColor="#00CFFF" color="#223A7A" onClick={() => onNavigate()} />
      )}
    </div>
  );
};
export default EngagementOrganisation;
