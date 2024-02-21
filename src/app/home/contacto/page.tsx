'use client';

import React, { useState } from 'react';
import Iframe from '@/components/iframe/page';
import Recaptcha from '@/components/recaptcha/page';
import { FaExclamationCircle } from 'react-icons/fa'; // Importar el ícono de error

export default function Contacto() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    phone: '',
    message: '',
  });

  const [errors, setErrors] = useState<{
    [key: string]: boolean;
  }>({
    username: false,
    email: false,
    phone: false,
    message: false,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));

    // Eliminar el error cuando el usuario comience a escribir en un campo vacío
    if (errors[name]) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        [name]: false,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    let formIsValid = true;
    const newErrors: { [key: string]: boolean } = {};

    // Validar los campos
    Object.entries(formData).forEach(([key, value]) => {
      if (!value) {
        formIsValid = false;
        newErrors[key] = true;
      }
    });

    if (!formIsValid) {
      setErrors(newErrors);
      return;
    }

    // Si todos los campos están completos, enviar el formulario
    sendEmail(formData);
  };

  const sendEmail = async (data: any) => {
    try {
      console.log('Data before stringify:', data);
      const response = await fetch(
        'https://prueba-cafe-delicia-backend.onrender.com/api/email',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        }
      );
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
                {' '}
                ¿Querés hablar?{' '}
              </h1>
              <div className="sm:col-span-4">
                <div className="mt-2 relative">
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className={`flex-1 border-0 shadow-lg rounded-md ring-1 ${
                      errors.username ? 'ring-red-500' : 'ring-[#5F3907]'
                    } bg-transparent py-1.5 px-4 text-[#5F3907] placeholder:text-[#5F3907] sm:text-sm sm:leading-6 w-full`}
                    placeholder=" Tu nombre"
                    value={formData.username}
                    onChange={handleChange}
                  />
                  {errors.username && (
                    <FaExclamationCircle className="text-red-500 absolute top-3 right-3 w-4 h-4" />
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="mt-2 relative">
                  <input
                    type="text"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className={`flex-1 border-0 shadow-lg rounded-md ring-1 ${
                      errors.email ? 'ring-red-500' : 'ring-[#5F3907]'
                    } bg-transparent py-1.5 px-4 text-[#5F3907] placeholder:text-[#5F3907] sm:text-sm sm:leading-6 w-full`}
                    placeholder=" Tu correo"
                    value={formData.email}
                    onChange={handleChange}
                  />
                  {errors.email && (
                    <FaExclamationCircle className="text-red-500 absolute top-3 right-3 w-4 h-4" />
                  )}
                </div>
              </div>
              <div className="sm:col-span-4">
                <div className="mt-2 relative">
                  <input
                    type="text"
                    name="phone"
                    id="phone"
                    autoComplete="phone"
                    className={`flex-1 border-0 shadow-lg rounded-md ring-1 ${
                      errors.phone ? 'ring-red-500' : 'ring-[#5F3907]'
                    } bg-transparent py-1.5 px-4 text-[#5F3907] placeholder:text-[#5F3907] sm:text-sm sm:leading-6 w-full`}
                    placeholder=" Tu teléfono"
                    value={formData.phone}
                    onChange={handleChange}
                  />
                  {errors.phone && (
                    <FaExclamationCircle className="text-red-500 absolute top-3 right-3 w-4 h-4" />
                  )}
                </div>
              </div>
              <div className="col-span-full">
                <div className="mt-2 relative">
                  <textarea
                    id="message"
                    name="message"
                    rows={3}
                    className={`block w-full rounded-md shadow-lg border-0 bg-transparent ring-1 ${
                      errors.message ? 'ring-red-500' : 'ring-[#5F3907]'
                    } py-1.5 px-4 text-[#5F3907] placeholder:text-[#5F3907] focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6`}
                    placeholder=" ¿Un mensaje?..."
                    value={formData.message}
                    onChange={handleChange}
                  />
                  {errors.message && (
                    <FaExclamationCircle className="text-red-500 absolute top-3 right-3 w-4 h-4" />
                  )}
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
