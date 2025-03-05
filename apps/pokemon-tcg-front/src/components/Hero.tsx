'use client';

import Image from 'next/image';
import { CustomButton } from '.';

const Hero = ({ currentSet }: any) => {
  const handleScroll = () => {
    const nextSection = document.getElementById('discover');

    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const stats = [
    { id: 1, name: 'Series', value: currentSet.series },
    { id: 2, name: 'Total Impreso', value: currentSet.printed_total },
    { id: 3, name: 'Total', value: currentSet.total },
  ];

  return (
    <div className="hero">
      <div className="flex-1 pt-36 padding-x">
        <h1 className="hero__title">{currentSet.name}</h1>

        <Image
          loader={() => currentSet.symbol_url}
          src={currentSet.symbol_url}
          alt="Series"
          width={40}
          height={40}
          priority
          className="object-contain"
          unoptimized
        />

        <div className="bg-transparent">
          <div className="max-w-lg px-4 lg:px-8">
            <dl className="grid grid-cols-1 text-center lg:grid-cols-3">
              {stats.map((stat) => (
                <div key={stat.id} className="mx-auto flex max-w-xs flex-col">
                  <dt className="text-base/7 text-gray-600">{stat.name}</dt>
                  <dd className="order-first text-2xl font-semibold tracking-tight text-gray-900 sm:text-2xl">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <CustomButton
          title="Ver cartas"
          containerStyles="bg-primary-blue text-white rounded-full mt-10"
          handleClick={handleScroll}
        />
      </div>
      <div className="hero__image-container">
        <div className="hero__image">
          <Image
            loader={() => currentSet.logo_url}
            src={currentSet.logo_url}
            alt="Series"
            fill
            priority
            className="object-contain"
            unoptimized
          />
        </div>

        <div className="hero__image-overlay" />
      </div>
    </div>
  );
};

export default Hero;
