'use client';

import React, { useState } from 'react';
import Iframe from '@/components/iframe/page';
import NavBar from '@/components/navbar/page';
import Recaptcha from '@/components/recaptcha/page';
import { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';
import axios from 'axios';

const RECAPTCHA_SITE_KEY = '6Ld_wnkpAAAAAOyestP_dQB_aIL-xFbXm3Ij7GkT';
const RECAPTCHA_SECRET_KEY = '6Ld_wnkpAAAAAMM4k2tE6DI_iyBQGjJGcbk34-Zh';

async function verifyRecaptchaToken(token: string): Promise<boolean> {
  try {
    const response = await axios.post(
      `https://www.google.com/recaptcha/api/siteverify?secret=${RECAPTCHA_SECRET_KEY}&response=${token}`
    );
    const { success, score } = response.data;
    return success && score > 0.5;
  } catch (error) {
    console.error('Error al verificar el token reCAPTCHA:', error);
    return false;
  }
}

async function sendEmail(
  username: string,
  email: string,
  phone: string,
  message: string
) {
  const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
      user: 'javier.0813@hotmail.com',
      pass: 'arias0813',
    },
  });

  const mailOptions = {
    from: 'javier.0813@hotmail.com',
    to: 'cristianjariaso@gmail.com',
    subject: 'Mensaje desde formulario de contacto',
    text: `Nombre: ${username}\nCorreo: ${email}\nCorreo: ${phone}\nMensaje: ${message}`,
  };

  return new Promise<void>((resolve, reject) => {
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error al enviar correo electrónico:', error);
        reject(error);
      } else {
        console.log('Correo electrónico enviado:', info.response);
        resolve();
      }
    });
  });
}

interface FormData {
  username: string;
  email: string;
  phone: string;
  message: string;
}

export default function Contacto() {
  const [formData, setFormData] = useState<FormData>({
    username: '',
    email: '',
    phone: '',
    message: '',
  });
  const [recaptchaToken, setRecaptchaToken] = useState('');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await fetch('/app/api', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Email enviado correctamente');
      } else {
        console.error('Error al enviar el email:', response.statusText);
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <>
      <NavBar />
      <section className="mt-20 flex justify-center">
        <div className="mx-6 sm:mx-12 md:mx-26 flex flex-col md:flex-row md:items-start">
          <Recaptcha setRecaptchaToken={setRecaptchaToken} />
          <form
            onSubmit={handleSubmit}
            className="flex-1 max-w-md mr-4 md:mr-10"
          >
            <div className="space-y-12">
              <div className="pb-12">
                <h1 className="text-black text-left text-6xl font-semibold">
                  ¿Querés hablar?
                </h1>
                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        type="text"
                        name="username"
                        id="username"
                        autoComplete="username"
                        className="flex-1 border-0 shadow-lg rounded-md ring-1 ring-[#5F3907] bg-transparent py-1.5 pl-1 text-[#5F3907] placeholder:text-[#5F3907] sm:text-sm sm:leading-6"
                        placeholder="   Tu nombre"
                        value={formData.username}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        type="text"
                        name="email"
                        id="email"
                        autoComplete="email"
                        className="flex-1 border-0 shadow-lg rounded-md ring-1 ring-[#5F3907] bg-transparent py-1.5 pl-1 text-[#5F3907] placeholder:text-[#5F3907] sm:text-sm sm:leading-6"
                        placeholder="   Tu correo"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="sm:col-span-4">
                  <div className="mt-2">
                    <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset sm:max-w-md">
                      <input
                        type="text"
                        name="phone"
                        id="phone"
                        autoComplete="phone"
                        className="flex-1 border-0 shadow-lg rounded-md ring-1 ring-[#5F3907] bg-transparent py-1.5 pl-1 text-[#5F3907] placeholder:text-[#5F3907] sm:text-sm sm:leading-6"
                        placeholder="  Tu teléfono"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-span-full">
                  <div className="mt-2">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="block w-full rounded-md shadow-lg border-0 bg-transparent ring-1 ring-[#5F3907] py-1.5 text-[#5F3907]  placeholder:text-[#5F3907] focus:ring-2 focus:ring-inset  sm:text-sm sm:leading-6"
                      placeholder="   ¿Un mensaje?..."
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="mt-6 flex items-center justify-center gap-x-6">
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-2xl text-[#5F3907] border border-[#5F3907] border-rounde hover:bg-[#F5BB70] hover:border-[#F5BB70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 drop-shadow-xl"
                  >
                    ¡Hablanos!
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="md:w-1/2">
            <Iframe />
          </div>
        </div>
      </section>
    </>
  );
}
