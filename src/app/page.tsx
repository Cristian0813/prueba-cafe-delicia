import Footer from '@/components/Footer';
import Header from '@/components/Header';
import ImagenInicio from '@/components/ImagenInicio';
import Testimonio from './testimonio/page';
import Caenos from './caenos/page';
import Nosotros from './nosotros/page';

export default function Home() {
  return (
    <div>
      <Header />
      <ImagenInicio />
      <Nosotros />
      <Testimonio />
      <Caenos />
      <Footer />
    </div>
  );
}
