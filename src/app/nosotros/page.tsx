import Image from 'next/image';
import image1 from '../../../public/home/locally-sourced.jpg';
import image2 from '../../../public/home/locally-sourced.png';
import image3 from '../../../public/home/hollistic.png';
import image4 from '../../../public/home/product-1.jpg';
import image5 from '../../../public/home/product-2.jpg';
import image6 from '../../../public/home/product-3.jpg';
export default function Nosotros() {
  return (
    <>
      <div className="gap-4 px-4 sm:px-8 md:px-16 lg:px-40 mt-8 sm:mt-16">
        <div className=" bg-blue-400 p-4 flex flex-col sm:flex-row">
          <div className="relative w-full sm:w-80 h-60 sm:h-96 mb-4 sm:mb-0 sm:mr-4 rounded-lg">
            <Image
              src={image1}
              alt="Taza de café"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="w-full sm:w-2/3 flex flex-col items-center justify-center">
            <div className="md:text-left sm:text-left text-center">
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
            </div>
          </div>
        </div>
        <div className="bg-green-400 p-4 md:flex md:mt-8 sm:mt-8 mt-8">
          <div className=" md:text-left sm:text-center text-center md:flex p-4 ">
            <div className="flex items-center justify-center">
              <Image src={image2} alt="Localización" className="w-28 md:w-56" />
            </div>
            <div className=" items-center justify-center ml-3">
              <h2 className="text-[#EE8E11] text-xl font-semibold mt-4">
                Origen Local Priorizamos
              </h2>
              <p className="text-black text-md mt-2">
                Los productos locales, colaborando estrechamente con
                agricultores del país para garantizar la frescura y calidad en
                cada taza.
              </p>
            </div>
          </div>
          <div className="md:flex p-4 md:text-left sm:text-center text-center">
            <div className="flex items-center justify-center">
              <Image src={image3} alt="Ubicación" className="w-28 md:w-56" />
            </div>
            <div className=" items-center justify-center ml-3">
              <h2 className="text-[#EE8E11] text-xl font-semibold mt-4">
                Enfoque Holístico
              </h2>
              <p className="text-black text-md mt-2">
                Consideramos cada aspecto del proceso de producción con cuidado
                y respeto hacia la naturaleza, promoviendo prácticas sostenibles
                en cada etapa.
              </p>
            </div>
          </div>
        </div>
        <div className="p-4 md:mt-10 sm:mt-10 mt-16">
          <div className="items-center justify-center ml-5">
            <h2 className="text-4xl text-[#171717] font-semibold mt-4">
              Nuestros Servicios
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            <div className="p-4">
              <div className="relative w-full h-80">
                <Image
                  src={image4}
                  alt="Café con galletas"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-black mt-2 text-center">
                <b>Cafetería especializada:</b> Probá nuestra panedería fresca y
                emparejala con una bebidita caliente
              </p>
            </div>
            <div className="p-4">
              <div className="relative w-full h-80">
                <Image
                  src={image5}
                  alt="Batido de café"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-black mt-2 text-center">
                <b>¿Tenés calor?:</b> Refrescate con nuestra línea de productos
                heladitos
              </p>
            </div>
            <div className="p-4">
              <div className="relative w-full h-80">
                <Image
                  src={image6}
                  alt="Bisto de carne"
                  layout="fill"
                  objectFit="cover"
                  className="rounded-2xl"
                />
              </div>
              <p className="text-black mt-2 text-center">
                <b>Bistro pa’ esa hambre:</b> A cualquier hora del día, tenemos
                antojitos que te dan energía para seguir el día
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
