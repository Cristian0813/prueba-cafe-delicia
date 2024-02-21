'use client';

import React, { useState, useEffect, Fragment } from 'react';
import Image from 'next/image';
import imgCafeteria from '/public/home/hero-background.jpg';
import { Comforter_Brush } from 'next/font/google';
import { motion, useAnimation } from 'framer-motion';
import { MouseEvent } from 'react';

const comforter_brush = Comforter_Brush({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

const scrollToSection = (event: MouseEvent<HTMLDivElement>) => {
  event.preventDefault();
  const section = document.getElementById('conocenos');
  if (section) {
    section.scrollIntoView({ behavior: 'smooth' });
  }
};
export default function Header() {
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      controls.start({ opacity: window.scrollY > 100 ? 0 : 1 });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const variants = {
    initial: { scale: 1 },
    animate: {
      scale: [1, 1.1, 1],
      transition: { duration: 0.5, repeat: Infinity },
    },
    hover: { scale: 1.4 },
  };

  return (
    <header>
      <Fragment>
        <motion.div
          className="relative"
          initial={{ opacity: 5 }}
          animate={controls}
          transition={{ duration: 0.5 }}
        >
          <figure className="w-full relative z-0 overflow-hidden brightness-50 saturate-150 h-[75vh] sm:h-[80vh] md:h-[99vh]">
            <Image
              src={imgCafeteria}
              alt="Background"
              layout="fill"
              objectFit="cover"
              priority
            />
          </figure>
          <div className="absolute inset-0 flex flex-col justify-center items-center">
            <div className="w-[70%] sm:w-[50%] dm:w-[70%] mt-40 sm:mt-20 md:mt-40">
              {' '}
              <h1 className="text-white text-2xl sm:text-3xl md:text-4xl text-center">
                Disfrutá del sabor auténtico en{' '}
                <span className="text-[#EE8E11]">Café</span>
                <span className={`${comforter_brush.className} text-[#EE8E11]`}>
                  Delicia
                </span>
              </h1>
            </div>
            <div className="w-[80%] sm:w-[70%] dm:w-[70%] mt-4">
              <p className="text-white text-center text-2lg sm:text-4lg md:text-xl">
                Café Delicia es una experiencia única con café de alta calidad y
                un ambiente parchado para todos. ¡Vení y disfrutá de un momento
                de delicia con nosotros!
              </p>
            </div>
            <div className="mb-8 text-white text-md font-bold text-center mt-36 sm:mt-30 md:mt-40">
              <motion.div
                variants={variants}
                initial="initial"
                animate="animate"
                whileHover="hover"
                className="block mb-4"
                onClick={(event: MouseEvent<HTMLDivElement>) =>
                  scrollToSection(event)
                }
              >
                <a href="#conocenos">
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
              </motion.div>
            </div>
          </div>
        </motion.div>
      </Fragment>
    </header>
  );
}
