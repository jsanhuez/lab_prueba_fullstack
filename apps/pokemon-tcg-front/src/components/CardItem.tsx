'use client';

import { useState } from 'react';
import Image from 'next/image';

import { CardProps } from '../types';
import CustomButton from './CustomButton';
import CardItemDetails from './CardItemDetails';

interface CardItemProps {
  card: CardProps;
  symbolSet: string;
}

const CardItem = ({ card, symbolSet }: CardItemProps) => {
  const { name, image } = card;
  const imageSmall = image.filter((img) => {
    return img.type === 'small';
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="car-card group">
      <div className="car-card__content">
        <h2 className="car-card__content-title">{name}</h2>
        <Image
          loader={() => symbolSet}
          src={symbolSet}
          alt="Series"
          width={40}
          height={40}
          priority
          className="object-contain"
        />
      </div>

      <div className="relative w-full h-80 my-3 object-contain">
        <Image
          loader={() => imageSmall[0].url}
          src={imageSmall[0].url}
          alt="car model"
          fill
          priority
          className="object-contain"
          unoptimized
        />
      </div>

      <div className="relative flex w-full mt-2">
        <div className="car-card__btn-container">
          <CustomButton
            title="Ver Detalles"
            containerStyles="w-full py-[16px] rounded-full bg-primary-blue"
            textStyles="text-white text-[14px] leading-[17px] font-bold"
            rightIcon="/right-arrow.svg"
            handleClick={() => setIsOpen(true)}
          />
        </div>
      </div>

      <CardItemDetails
        isOpen={isOpen}
        closeModal={() => setIsOpen(false)}
        card={card}
      />
    </div>
  );
};

export default CardItem;
