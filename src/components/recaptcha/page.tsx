declare global {
  interface Window {
    grecaptcha: {
      enterprise: {
        getResponse: () => string;
      };
    };
  }
}

import React, { useEffect } from 'react';

interface Props {
  setRecaptchaToken: React.Dispatch<React.SetStateAction<string>>;
}

const Recaptcha: React.FC<Props> = ({ setRecaptchaToken }) => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = `https://www.google.com/recaptcha/enterprise.js?render=6Ld_wnkpAAAAAOyestP_dQB_aIL-xFbXm3Ij7GkT`;
    script.async = true;
    document.body.appendChild(script);

    script.onerror = (error) => {
      console.error('Error loading reCAPTCHA script:', error);
    };


    // Espera a que el script de recaptcha se cargue antes de acceder a grecaptcha
    script.onload = () => {
      if (window.grecaptcha && window.grecaptcha.enterprise) {
        const token = window.grecaptcha.enterprise.getResponse();
        setRecaptchaToken(token);
      } else {
        console.error('reCAPTCHA Enterprise is not properly initialized');
      }
    };


    return () => {
      document.body.removeChild(script);
    };
  }, [setRecaptchaToken]);

  return null;
};

export default Recaptcha;