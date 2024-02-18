import Image from 'next/image';
import contact1 from '../../../public/home/contact-1.jpg';
import contact2 from '../../../public/home/contact-2.jpg';

export default function Caenos() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto mb-16 gap-8 top-3.5">
      {/* Imagen 1 */}
      <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0">
        <div className="relative -left-4 -top-4 w-96 h-96 overflow-hidden">
          <Image
            src={contact1}
            width={608}
            height={912}
            layout="responsive"
            objectFit="cover"
            alt="Contact-1"
          />
        </div>
      </div>

      {/* Información de contacto */}
      <div className="w-full md:w-2/3 flex flex-col justify-center px-8">
        <div className="">
          <div className="">
            <h2 className="text-3xl font-bold mb-2 text-[#5F3907]">¡Caénos!</h2>
            <p className="text-gray-600 mb-6">
              Estamos en el barrio Granada, al lado de Container Park y diagonal a 1975.
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-2xl text-[#5F3907] border border-[#5F3907] border-rounded shadow-sm hover:bg-[#F5BB70] hover:border-[#F5BB70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
          >
            Contáctanos
          </button>
        </div>
        <div className="w-full md:w-1/3 flex items-center justify-center mb-8 md:mb-0">
          <div className="w-full h-auto relative overflow-hidden">
            <Image
              src={contact2}
              width={320}
              height={240}
              layout="responsive"
              objectFit="cover"
              alt="Contact-2"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
