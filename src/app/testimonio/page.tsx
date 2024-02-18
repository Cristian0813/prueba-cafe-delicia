import Image from 'next/image';
import imagTesty from '../../../public/home/testimonial.jpg';

export default function Testimonio() {
  return (
    <>
      <div className="relative h-96 w-full overflow-hidden rounded-t-lg mt-20">
        <Image
          src={imagTesty}
          className="object-cover object-center h-full w-full"
          alt="Testimonio"
          layout="fill"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <p className="text-xl font-medium text-[#F9E49F] text-center px-6 sm:text-xl sm:leading-8 leading-10">
            En Café Delicia, tomamos la vida con calma. Servimos con cuidado,
            sabores únicos y todo lo necesario para tu taza de cada día.
          </p>
        </div>
      </div>
    </>
  );
}
