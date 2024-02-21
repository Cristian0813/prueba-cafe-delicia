'use client';

import Image from 'next/image';
import tazaDeCafe from '/public/home/locally-sourced.jpg';
import ImageGps from '/public/home/locally-sourced.png';
import ImageDiner from '/public/home/hollistic.png';
import cafeGalleta from '/public/home/product-1.jpg';
import batidoCafe from '/public/home/product-2.jpg';
import bistoCarne from '/public/home/product-3.jpg';
import Helado from '/public/home/product-4.jpg';
import Hamburguesa from '/public/home/product-5.jpg';
import capuchino from '/public/home/product-6.jpg';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function Nosotros() {
  const [isRotated, setIsRotated] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsRotated(true);
    }, 1000); // Espera 1 segundo antes de girar

    return () => clearTimeout(timeout);
  }, []); // Se ejecuta solo al montar el componente000); // Espera 1 segundo antes de girar

  return (
    <>
      <div className="gap-4 px-4 sm:px-8 md:px-32 mt-8 sm:mt-16 md:mt-16">
        <div className="p-4 flex flex-col sm:flex-row">
          <motion.div
            className="relative w-full sm:w-80 h-60 sm:h-96 mb-4 sm:mb-0 sm:mr-4 rounded-lg"
            id="conocenos"
            initial={{ x: '-100vw', rotate: -90 }} // Inicialmente fuera de la pantalla y rotado
            animate={{ x: 0, rotate: 0 }} // Animación para que entre y se enderece
            transition={{ type: 'spring', stiffness: 50 }} // Tipo de transición y suavidad
          >
            <Image
              src={tazaDeCafe}
              alt="Taza de café"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </motion.div>
          <div className="w-full sm:w-2/3 flex flex-col items-center justify-center">
            <motion.div
              className="md:text-left sm:text-left text-center"
              initial={{ x: '100vw', rotate: 90 }} // Inicialmente fuera de la pantalla y rotado
              animate={{ x: 0, rotate: 0 }} // Animación para que entre y se enderece
              transition={{ type: 'spring', stiffness: 50 }} // Tipo de transición y suavidad
            >
              <h2 className="text-[#171717] text-2xl font-semibold mt-4">
                Somos Café Delicia
              </h2>
              <p className="mt-2 text-md">
                Una marca caleña y comprometida con ofrecerte una experiencia
                auténtica y acogedora. Calidosos, auténticos y amables en todo
                lo que hacemos. Buscamos crear momentos de verdadera delicia
                para todos con nuestra selección de cafés locales de primera y
                platos para calmarte el hambre. Nuestro enfoque cálido y
                amistoso refleja nuestro compromiso con tu satisfacción y el
                bienestar de los caleños.
              </p>
            </motion.div>
          </div>
        </div>
        <div className="p-4 md:flex md:mt-8 sm:mt-8 mt-8" id="historia">
          <motion.div
            className="md:text-left sm:text-center text-center md:flex p-4"
            initial={{ scale: 0.1 }} // Inicialmente muy pequeño
            animate={{ scale: 1 }} // Se expande al tamaño completo
            transition={{ type: 'spring', stiffness: 100 }} // Tipo de transición y suavidad
          >
            <div className="flex items-center justify-center">
              <Image
                src={ImageGps}
                alt="Localización"
                className="w-28 md:w-40"
              />
            </div>
            <div className="items-center justify-center ml-3">
              <h2 className="text-[#EE8E11] text-xl font-semibold mt-4">
                Origen Local Priorizamos
              </h2>
              <p className="text-black text-md mt-2">
                Los productos locales, colaborando estrechamente con
                agricultores del país para garantizar la frescura y calidad en
                cada taza.
              </p>
            </div>
          </motion.div>
          <motion.div
            className="md:flex p-4 md:text-left sm:text-center text-center"
            initial={{ scale: 0.1 }} // Inicialmente muy pequeño
            animate={{ scale: 1 }} // Se expande al tamaño completo
            transition={{ type: 'spring', stiffness: 50 }} // Tipo de transición y suavidad
          >
            <div className="flex items-center justify-center">
              <Image
                src={ImageDiner}
                alt="Ubicación"
                className="w-28 md:w-40"
              />
            </div>
            <div className="items-center justify-center ml-3">
              <h2 className="text-[#EE8E11] text-xl font-semibold mt-4">
                Enfoque Holístico
              </h2>
              <p className="text-black text-md mt-2">
                Consideramos cada aspecto del proceso de producción con cuidado
                y respeto hacia la naturaleza, promoviendo prácticas sostenibles
                en cada etapa.
              </p>
            </div>
          </motion.div>
        </div>
        <div className="p-4 md:mt-10 sm:mt-10 mt-10">
          <div className="text-center md:text-start sm:text-start ml-5">
            <h2 className="text-4xl text-[#171717] font-semibold mt-4">
              Nuestros Servicios
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4 items-center justify-center sm:items-center sm:justify-center md:items-center md:justify-center text-center">
            <motion.div
              className="p-4"
              id="cafe"
              animate={{ rotateX: isRotated ? 360 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-80 md:w-full md:h-80 sm:w-96 sm:h-96">
                <Image
                  src={cafeGalleta}
                  alt="Café con galletas"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <p className="text-black text-sm mt-2">
                <b>Cafetería especializada:</b> Probá nuestra panadería fresca y
                emparejala con una bebidita caliente
              </p>
            </motion.div>
            <motion.div
              className="p-4"
              id="panaderia"
              animate={{ rotateX: isRotated ? 360 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-80 md:w-full md:h-80 sm:w-96 sm:h-96">
                <Image
                  src={batidoCafe}
                  alt="Batido de café"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <p className="text-black text-md mt-2">
                <b>¿Tenés calor?:</b> Refrescate con nuestra línea de productos
                heladitos
              </p>
            </motion.div>
            <motion.div
              className="p-4"
              id="bistro"
              animate={{ rotateX: isRotated ? 360 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-80 md:w-full md:h-80 sm:w-96 sm:h-96">
                <Image
                  src={bistoCarne}
                  alt="Bisto de carne"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <p className="text-black text-sm mt-2">
                <b>Bistro pa’ esa hambre:</b> A cualquier hora del día, tenemos
                antojitos que te dan energía para seguir el día
              </p>
            </motion.div>
            <motion.div
              className="p-4"
              id="helados"
              animate={{ rotateX: isRotated ? 360 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-80 md:w-full md:h-80 sm:w-96 sm:h-96">
                <Image
                  src={Helado}
                  alt="Helados con aroma de café"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <p className="text-black text-sm mt-2">
                <b>Helados con aroma de café:</b> Un helado es la solución para
                los problemas pequeños.
              </p>
            </motion.div>
            <motion.div
              className="p-4"
              id="hamburguesas"
              animate={{ rotateX: isRotated ? 360 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-80 md:w-full md:h-80 sm:w-96 sm:h-96">
                <Image
                  src={Hamburguesa}
                  alt="Ven a pasarla bien"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <p className="text-black text-md mt-2">
                <b>Ven a pasarla bien:</b> Saborea una hamburguesa espectacular.
              </p>
            </motion.div>
            <motion.div
              className="p-4"
              id="capuchino"
              animate={{ rotateX: isRotated ? 360 : 0 }}
              transition={{ duration: 1 }}
            >
              <div className="relative w-full h-80 md:w-full md:h-80 sm:w-96 sm:h-96">
                <Image
                  src={capuchino}
                  alt="Nada como un capuchino"
                  className="w-full h-full rounded-2xl object-cover"
                />
              </div>
              <p className="text-black text-sm mt-2">
                <b>Nada como un capuchino:</b> Con una armonía musical, la vida
                se hace más dulce junto a los tuyos.
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}
