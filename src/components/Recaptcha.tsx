import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import dotenv from 'dotenv';

dotenv.config();

const siteKey = process.env.REACT_APP_RECAPTCHA_SITEKEY;

export default function Recaptcha() {
  return (
    <div>
      {siteKey ? (
        <ReCAPTCHA sitekey="6LfNiHcpAAAAAMZpq4d7b2nDX76O4gChcw030XfP" />
      ) : (
        <p>Error: Sitekey not defined</p>
      )}
    </div>
  );
}