import Header from '@/components/header/page';
import Testimonio from '@/app/home/testimonio/page';
import Caenos from '@/app/home/caenos/page';
import Nosotros from '@/app/home/nosotros/page';

export default function Home() {
  return (
    <div>
      <Header />
      <Nosotros />
      <Testimonio />
      <Caenos />
    </div>
  );
}
