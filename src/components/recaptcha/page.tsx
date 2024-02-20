import React, { useEffect } from 'react';

interface Props {
  setRecaptchaToken: React.Dispatch<React.SetStateAction<string>>;
}

interface RecaptchaEnterprise {
  execute: (
    siteKey: string,
    options: {
      callback: (token: string) => void;
    }
  ) => void;
}

interface WindowWithRecaptcha extends Window {
  grecaptcha: {
    enterprise: RecaptchaEnterprise;
  };
}

const Recaptcha: React.FC<Props> = ({ setRecaptchaToken }) => {
  useEffect(() => {
    const loadRecaptchaScript = () => {
      return new Promise<void>((resolve, reject) => {
        const script = document.createElement('script');
        script.src =
          'https://www.google.com/recaptcha/enterprise.js?render=6Ld_wnkpAAAAAOyestP_dQB_aIL-xFbXm3Ij7GkT';
        script.async = true;
        script.onload = () => resolve();
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    const initializeRecaptcha = async () => {
      try {
        await loadRecaptchaScript();
        if (
          (window as unknown as WindowWithRecaptcha).grecaptcha &&
          (window as unknown as WindowWithRecaptcha).grecaptcha.enterprise &&
          typeof (window as unknown as WindowWithRecaptcha).grecaptcha.enterprise
            .execute === 'function'
        ) {
          (window as unknown as WindowWithRecaptcha).grecaptcha.enterprise.execute(
            '6Ld_wnkpAAAAAOyestP_dQB_aIL-xFbXm3Ij7GkT',
            {
              callback: (token: string) => {
                setRecaptchaToken(token);
              },
            }
          );
        } else {
          console.error(
            'reCAPTCHA Enterprise no se ha inicializado correctamente'
          );
        }
      } catch (error) {
        console.error('Error al cargar el script reCAPTCHA:', error);
      }
    };

    initializeRecaptcha();

    return () => {
      // Cleanup code if needed
    };
  }, [setRecaptchaToken]);

  return null;
};

export default Recaptcha;
