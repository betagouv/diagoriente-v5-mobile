import React, { forwardRef, useRef } from 'react';
import arrow from 'assets/svg/whitearrow.svg';
import useCaptureRef from 'common/hooks/useCaptureRef';
import classNames from 'common/utils/classNames';
import useStyles from './style';

interface Props {
  value: string;
  onChange?: (e: any) => void;
  onClick: () => void;
  placeholder: string;
  isOpen: boolean;
  options: { label: string; value: string }[];
  name: string;
  onClickItem: (e: { label: string; value: string }) => void;
}

const SelectDateSkill = forwardRef<HTMLDivElement, Props>(
  ({ value, placeholder, isOpen, options, name, onChange, onClick, onClickItem }: Props, Ref) => {
    const classes = useStyles();
    const containerRef = useRef<HTMLDivElement>(null);
    useCaptureRef(containerRef.current, Ref);

    return (
      <div className={classes.wrapperSelect} ref={containerRef} onClick={onClick}>
        <input
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className={classNames(classes.selectContainer, value ? classes.selectedContainer : '')}
          disabled
        />
        <div className={classNames(classes.arrowContainer, value ? classes.selectedContainer : '')}>
          <img src={arrow} alt="arrow" />
        </div>
        {isOpen && (
          <div className={classes.options}>
            {options.map((opt) => {
              return (
                <div key={opt.label} style={{ width: '33%', height: 39 }} onClick={() => onClickItem(opt)}>
                  <p className={classNames(classes.option, opt.label === value && classes.selected)}>{opt.label}</p>
                  <div style={{ marginTop: 4, height: 1, width: '100%', backgroundColor: '#C9C9C7' }} />
                </div>
              );
            })}
          </div>
        )}
      </div>
    );
  },
);

export default SelectDateSkill;
