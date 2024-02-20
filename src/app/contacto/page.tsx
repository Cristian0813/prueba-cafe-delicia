'use client';

import React, { useState } from 'react';
import Iframe from '@/components/iframe/page';
import Recaptcha from '@/components/recaptcha/page';

export default function Contacto() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    sendEmail(formData);
  };

  const sendEmail = async (data: any) => {
    try {
      console.log('Data before stringify:', data); // Agregamos este console.log
      const response = await fetch('http://localhost:3001/api/email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      console.log(result);
      // Aquí puedes manejar la respuesta del servidor como desees
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  const [token, setToken] = useState('');

  return (
    <>
      <section className="mt-36 mx-auto md:mx-auto flex flex-col md:flex-row md:items-start">
        <Recaptcha
          setRecaptchaToken={setToken}
          recaptchaSiteKey="6Ld_wnkpAAAAAOyestP_dQB_aIL-xFbXm3Ij7GkT"
        />
        <form
          onSubmit={handleSubmit}
          className="flex-1 max-w-md mx-auto md:mr-10"
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
      </section>
    </>
  );
}
