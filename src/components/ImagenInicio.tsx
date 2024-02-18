import Image from 'next/image';
import imag1 from '../../public/home/hero-background.jpg';
export default function ImagenInicio() {
  return (
    <div>
      <Image
        src={imag1}
        className="card-img"
        alt="Cafeteria"
        height={550}
      />
    </div>
  );
}
