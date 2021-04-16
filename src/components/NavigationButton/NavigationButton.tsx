import React, { useState } from 'react';
import { Theme } from 'common/requests/types';
import { Link, RouteComponentProps } from 'react-router-dom';
import NextButton from 'components/nextButton/nextButton';
import PreviousButton from 'components/previousButton/previousButton';
import { decodeUri, encodeUri } from 'utils/url';
import Button, { IProps } from 'components/button/Button';

import classNames from 'utils/classNames';
import useStyles from './styles';

interface Props {
 selectedTheme:any;
 nextLink : string;
 previousLink: string
  }
const NavigationButton = ({ selectedTheme, nextLink, previousLink }:Props) => {
const { redirect } = decodeUri(window.location.search);

  const classes = useStyles();
  return (
    <div className={classes.previousNext}>

      <div>
        <Link
    //   to="/experience"
          to={previousLink}
          className={classes.hideLine}
        >
          <PreviousButton
            disabled={!selectedTheme}
            classNameTitle={classes.classNameTitle}
            ArrowColor="#4D6EC5"
          />
        </Link>
      </div>
      <div>
        <Link
          to={nextLink}
    //   to={selectedTheme ? `/experience/skill/${selectedTheme.id}${redirect ? encodeUri({ redirect }) : ''}` : ''}
          className={classes.hideLine}
        >
          <NextButton
            disabled={!selectedTheme}
            classNameTitle={classes.classNameTitle}
            ArrowColor="#4D6EC5"
          />
        </Link>
      </div>
    </div>
  );
};

export default NavigationButton;
