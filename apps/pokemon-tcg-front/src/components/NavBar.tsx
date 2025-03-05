import Link from 'next/link';
import Image from 'next/image';
import CustomButton from './CustomButton';

const NavBar = () => (
  <header className="w-full  absolute z-10">
    <nav className="mx-auto flex justify-between items-center sm:px-16 px-6 py-4 bg-black">
      <Link href="/" className="flex justify-center items-center">
        <Image
          src="/tcg-logo-2x.png"
          alt="Pokémon TCG"
          width={118}
          height={18}
          className="object-contain"
        />
      </Link>

      <CustomButton
        title="Dónde comprar"
        btnType="button"
        containerStyles="text-primary-blue rounded-full bg-white min-w-[130px]"
      />
    </nav>
  </header>
);

export default NavBar;
