import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import '../../style/globals.css';
import NavBar from '@/components/NavBar';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  weight: '400',
});

export const metadata: Metadata = {
  title: 'Café Delicia',
  description: 'El mejor lugar para compartir con tus a llegados',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={poppins.className}>
        <NavBar />
        <main>{children}</main>
      </body>
    </html>
  );
}
