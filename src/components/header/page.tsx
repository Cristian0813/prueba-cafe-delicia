import React from 'react';
import Image from 'next/image';
import imgCafeteria from '/public/home/hero-background.jpg';
import { Comforter_Brush } from 'next/font/google';

const comforter_brush = Comforter_Brush({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export default function Header() {
  return (
    <header>
      <div className="relative">
        <figure className="w-full relative z-0 overflow-hidden brightness-50 saturate-150 h-[70vh] sm:h-[75vh] nd:h-[99vh]">
          <Image
            src={imgCafeteria}
            alt="Background"
            fill={true}
            className="object-cover w-full h-full "
            priority
          />
        </figure>
        <div className="absolute inset-0 flex flex-col justify-center items-center">
          <div className="w-[60%] sm:w-[50%] dm:w-[70%] mt-40 sm:mt-30 md:mt-20">
            {' '}
            <h1 className="text-white text-2xl sm:text-3xl md:text-5xl text-center">
              Disfrutá del sabor auténtico en{' '}
              <span className="text-[#EE8E11]">Café</span>
              <span className={`${comforter_brush.className} text-[#EE8E11]`}>
                Delicia
              </span>
            </h1>
          </div>
          <div className="w-[80%] sm:w-[70%] dm:w-[70%] mt-4">
            <p className="text-white text-center text-2lg sm:text-4lg md:text-4xl">
              Café Delicia es una experiencia única con café de alta calidad y
              un ambiente parchado para todos. ¡Vení y disfrutá de un momento de
              delicia con nosotros!
            </p>
          </div>
          <div className="mb-8 text-white text-md font-bold text-center mt-10">
            <a href="" className="block mb-4">
              Conocenos
              <div className="flex justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  className="bi bi-chevron-double-down"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M1.646 6.646a.5.5 0 0 1 .708 0L8 12.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                  <path
                    fillRule="evenodd"
                    d="M1.646 2.646a.5.5 0 0 1 .708 0L8 8.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708"
                  />
                </svg>
              </div>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
