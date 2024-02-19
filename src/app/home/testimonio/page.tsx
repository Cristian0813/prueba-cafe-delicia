import Image from 'next/image';
import imagTesty from '/public/home/testimonial.jpg';

export default function Testimonio() {
  return (
    <div>
      <div className="relative h-96 w-full overflow-hidden gap-4 px-4 sm:px-8 md:px-16 lg:px-40 md:mt-10 sm:mt-10 mt-16">
        <div>
          <Image
            src={imagTesty}
            className="object-cover object-center h-full w-full"
            alt="Testimonio"
            layout="fill"
          />
        </div>
        <div className="absolute inset-0 z-20 flex items-center justify-center bg-black bg-opacity-50">
          <div className="md:w-1/3">
            <p className="text-2xl font-medium text-[#F9E49F] text-center sm:text-3xl sm:leading-8 leading-10">
              En Café Delicia, tomamos la vida con calma. Servimos con cuidado,
              sabores únicos y todo lo necesario para tu taza de cada día.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
