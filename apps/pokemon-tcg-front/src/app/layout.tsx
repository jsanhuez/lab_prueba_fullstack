import { Footer, NavBar } from '../components';

import './global.css';

export const metadata = {
  title: 'Pokémon TCG | Bienvenido',
  description:
    'Expande tu colección Pokémon TCG con hermosas ilustraciones y construye tu próximo mazo con poderosas cartas',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="relative">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
