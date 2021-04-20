import React from 'react';
import Button from 'components/button/Button';
import { Jobs } from 'common/requests/types';
import AutoComplete from '../Autocomplete/AutoCompleteJob';
import useStyles from './styles';

interface IProps {
  filteredArray?: Jobs[];
  onChangeImmersion: (e: React.ChangeEvent) => void;
  onSelectImmersion: (e?: string) => void;
  selectedImmersion?: string;
  openImmersion: boolean;
  onChangeLocation: (e: React.ChangeEvent) => void;
  onSelect: (e?: string) => void;
  selectedLocation: string;
  listLocation?: { label: string; coordinates: string[] }[];
  openLocation: boolean;
  onClickImmersion: () => void;
  setOpenLocation?: (open: boolean) => void;
  errorLocation?: boolean;
}

const ImmersionForm = ({
  filteredArray,
  onChangeImmersion,
  onSelectImmersion,
  selectedImmersion,
  openImmersion,
  onChangeLocation,
  onSelect,
  selectedLocation,
  listLocation,
  openLocation,
  onClickImmersion,
  setOpenLocation,
  errorLocation,
}: IProps) => {
  const classes = useStyles();
  return (
    <div className={classes.immersion}>
      <div className={classes.logoContainer}>{/* <Loupe color="#FFA600" width="29" height="92" /> */}</div>
      <div className={classes.titleImersion}>Trouver une immersion ou une formation</div>
      {/* <div>Je recherche :</div> */}
      <div className={classes.autocompleteContainer}>
        <AutoComplete
          options={filteredArray}
          onChange={onChangeImmersion}
          onSelectText={onSelectImmersion}
          value={selectedImmersion}
          name="search"
          placeholder="Ex: plomberie"
          className={classes.containerAutoComp}
          open={openImmersion}
          type="immersion"
        />
      </div>
      <div className={classes.autocompleteContainer}>
        <AutoComplete
          onChange={onChangeLocation}
          onSelectText={onSelect}
          value={selectedLocation}
          name="location"
          placeholder="à Paris, Dijon, Lille..."
          options={listLocation}
          type="location"
          open={openLocation}
          error={errorLocation && !selectedLocation}
          setOpen={setOpenLocation}
          className={classes.autocompleteStyle}
        />
      </div>

      <div className={classes.btnImersionContainer}>
        <Button className={classes.btnImersion} onClick={onClickImmersion}>
          <div className={classes.btnLabel}>Chercher</div>
        </Button>
      </div>
    </div>
  );
};

export default ImmersionForm;
