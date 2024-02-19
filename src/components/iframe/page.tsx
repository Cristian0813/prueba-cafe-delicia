import React from 'react';

export default function Iframe() {
  return (
    <>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m21!1m12!1m3!1d404.3743232465327!2d-76.535405565322!3d3.4578351174378623!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m6!3e0!4m3!3m2!1d3.4577877!2d-76.5354691!4m0!5e0!3m2!1ses-419!2sco!4v1708242014847!5m2!1ses-419!2sco"
        width="100%"
        height="400"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        className="rounded-lg border-2 border-[#5F3907] border-opacity-10 shadow-lg"
        style={{ maxWidth: '600px' }}
      ></iframe>
    </>
  );
}
