import Footer from '@/components/footer/page';
import Header from '@/components/header/page';
import ImagenInicio from '@/components/ImagenInicio';
import Testimonio from '@/app/home/testimonio/page';
import Caenos from '@/app/home/caenos/page';
import Nosotros from '@/app/home/nosotros/page';
import Contacto from '@/app/home/contacto/page';

export default function Home() {
  return (
    <div>
      <Header />
      <ImagenInicio />
      <Nosotros />
      <Testimonio />
      <Caenos />
    </div>
  );
}
