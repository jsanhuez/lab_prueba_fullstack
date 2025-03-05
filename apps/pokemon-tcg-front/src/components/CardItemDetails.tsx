import { Fragment } from 'react';
import Image from 'next/image';

import {
  Dialog,
  DialogPanel,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { CardProps } from '../types';
import Link from 'next/link';

interface CardItemDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  card: CardProps;
}

const CardItemDetails = ({
  isOpen,
  closeModal,
  card,
}: CardItemDetailsProps) => {
  const imageLarge = card.image.filter((img) => img.type === 'large');
  const tcgplayerMarket = card.market.filter((m) => m.market === 'tcgplayer');
  const cardmarketMarket = card.market.filter((m) => m.market === 'cardmarket');

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <TransitionChild
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-out duration-300"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <DialogPanel className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto transform rounded-2xl bg-white p-6 text-left shadow-xl transition-all flex flex-col gap-5">
                  <button
                    type="button"
                    className="absolute top-2 right-2 z-10 w-fit p-2 bg-primary-blue-100 rounded-full"
                    onClick={closeModal}
                  >
                    <Image
                      src="/close.svg"
                      alt="close"
                      width={20}
                      height={20}
                      className="object-contain"
                    />
                  </button>

                  <div className="flex-1 flex flex-col gap-3">
                    <div className="relative w-full h-80 bg-pattern bg-cover bg-center rounded-lg">
                      <Image
                        loader={() => imageLarge[0].url}
                        src={imageLarge[0].url}
                        alt="card model"
                        fill
                        priority
                        className="object-contain"
                        unoptimized
                      />
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col gap-2">
                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Nombre:
                      </h2>
                      <p>{card.name}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Supertipo:
                      </h2>
                      <p>{card.supertype}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Tipos:
                      </h2>
                      <p>{JSON.stringify(card.types)}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Subtipos:
                      </h2>
                      <p>{JSON.stringify(card.subtypes)}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Número:
                      </h2>
                      <p>{card.number}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Rareza:
                      </h2>
                      <p>{card.rarity}</p>
                    </div>

                    <div className="mt-3 flex flex-wrap gap-4">
                      <h2 className="font-semibold text-xl capitalize">
                        Mercados:
                      </h2>

                      <Link href={tcgplayerMarket[0]?.url || ''}>
                        {tcgplayerMarket[0]?.market}
                      </Link>
                      <p>|</p>
                      <Link href={cardmarketMarket[0]?.url || ''}>
                        {cardmarketMarket[0]?.market}
                      </Link>
                    </div>
                  </div>
                </DialogPanel>
              </TransitionChild>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default CardItemDetails;
