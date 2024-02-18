import Image from 'next/image';
import contact1 from '../../../public/home/contact-1.jpg';
import contact2 from '../../../public/home/contact-2.jpg';
import Link from 'next/link';

export default function Caenos() {
  return (
    <>
      <div className=" gap-4 px-4 sm:px-8 md:px-16 lg:px-40 mt-16 sm:mt-24">
        <div className="p-4 flex flex-col sm:flex-row">
          <div className=" relative w-full sm:w-1/2 h-36 sm:h-screen mb-4 sm:mb-0 sm:mr-4 rounded-lg">
            <Image
              src={contact1}
              alt="Lugar 1"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
          </div>
          <div className="w-3/4 sm:w-11/12 flex flex-col justify-center px-8 mt-24 ">
            <div className="text-center md:text-start">
              <h2 className="text-3xl font-bold mb-2 text-[#5F3907]">
                ¡Caénos!
              </h2>
              <p className="text-black mb-6 text-sm">
                Estamos en el barrio Granada, al lado de Container Park y
                diagonal a 1975.
              </p>
            </div>
            <div>
              <Link href="/contacto" legacyBehavior>
                <a className="inline-flex items-center px-4 py-2 text-sm font-semibold rounded-2xl text-[#5F3907] border border-[#5F3907] border-rounded shadow-sm hover:bg-[#F5BB70] hover:border-[#F5BB70] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2">
                  Contáctanos
                </a>
              </Link>
            </div>
            <div className="mt-8 sm:mt-20 relative w-full sm:w-[800] h-96 sm:h-[600] mb-4 sm:mb-0 sm:mr-4 rounded-lg">
              <Image
                src={contact2}
                alt="Lugar 2"
                layout="fill"
                objectFit="cover"
                className="rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
