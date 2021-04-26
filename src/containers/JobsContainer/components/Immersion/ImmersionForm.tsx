import React, { useState } from 'react';
import Button from 'components/button/Button';
// import { Jobs } from 'common/requests/types';
import Arrow from 'assets/svg/arrow';
// import classNames from 'utils/classNames';
// import useOnclickOutside from 'common/hooks/useOnclickOutside';
import Loupe from 'assets/svg/loupe';
import AutoComplete from '../Autocomplete/AutoCompleteJob';
import useStyles from './styles';

interface IProps {
  // filteredArray?: Jobs[];
  // onChangeImmersion: (e: React.ChangeEvent) => void;
  // onSelectImmersion: (e?: string) => void;
  // selectedImmersion?: string;
  // openImmersion: boolean;
  onChangeLocation: (e: React.ChangeEvent) => void;
  onSelect: (e?: string) => void;
  selectedLocation: string;
  listLocation?: { label: string; coordinates: string[] }[];
  openLocation: boolean;
  onClickImmersion: () => void;
  setOpenLocation?: (open: boolean) => void;
  errorLocation?: boolean;
  // typeApi?: string;
}

const ImmersionForm = ({
  // filteredArray,
  // onChangeImmersion,
  // onSelectImmersion,
  // selectedImmersion,
  // openImmersion,
  onChangeLocation,
  onSelect,
  selectedLocation,
  listLocation,
  openLocation,
  onClickImmersion,
  setOpenLocation,
  errorLocation,
}: // typeApi,
IProps) => {
  const classes = useStyles();
  const [isOpen, setIsOpen] = useState(false);
  const [placeholder, setPlaceholder] = React.useState('Je recherche :');

  // const divSelect = useRef<HTMLDivElement>(null);

  const onClickSelect = () => setIsOpen(!isOpen);
  const handleChange = (event: any, e: string) => {
    setPlaceholder(e);
    setIsOpen(false);
  };
  // useOnclickOutside(divSelect, () => {
  //   if (isOpen) {
  //     setIsOpen(!isOpen);
  //   }
  // });
  const options = [
    {
      label: 'formation',
    },
    {
      label: 'entreprise',
    },
  ];
  return (
    <div className={classes.immersion}>
      <div className={classes.logoContainer}>
        <Loupe color="#D60051" width="29" height="92" />{' '}
      </div>
      <div className={classes.titleImersion}>Trouver une immersion ou une formation</div>
      <div className={classes.containerSelect} onClick={onClickSelect}>
        <span className={classes.labelSelect}> {placeholder} </span>
        <div className={classes.logoContainer}>
          <Arrow color="#424242" width="9" height="14" className={!isOpen ? classes.rotatedBase : classes.rotated} />
        </div>
        {isOpen && (
          <div className={classes.containerOptions}>
            {options.map((option) => (
              <div
                key={option.label}
                className={classes.itemOption}
                onClick={(event) => handleChange(event, option.label)}
              >
                {option.label}
              </div>
            ))}
          </div>
        )}
      </div>
      <div className={classes.autocompleteContainer}>
        {/* <AutoComplete
          options={filteredArray}
          onChange={onChangeImmersion}
          onSelectText={onSelectImmersion}
          value={selectedImmersion}
          name="search"
          placeholder="Ex: plomberie"
          className={classes.containerAutoComp}
          open={openImmersion}
          type="immersion"
        /> */}
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
