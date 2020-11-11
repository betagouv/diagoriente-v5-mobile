import React from 'react';
import ReCAPTCHA from 'react-recaptcha';

interface IProps {
  verification: any;
}

const ReCAPTCHAForm = ({ verification }: IProps) => {
  const recaptchaLoaded = () => {
    console.log('successfully loaded');
  };
  const verifyCallback = (res: any) => {
    if (res) {
      verification({ variables: { humanKey: res } });
    }
  };
  return (
    <div>
      <ReCAPTCHA
        render="explicit"
        onloadCallback={recaptchaLoaded}
        verifyCallback={verifyCallback}
        sitekey="6LcvEeEZAAAAAKw6hGw-BjV3uHUjFj-zWMKPBQrp"
      />
    </div>
  );
};
export default ReCAPTCHAForm;
