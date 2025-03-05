import { MouseEventHandler } from 'react';

export interface CardProps {
  name: string;
  supertype: string;
  subtypes: string[];
  types: string[];
  number: number;
  rarity: string;
  image: {
    card_id: string;
    url: string;
    type: string;
  }[];
  market: {
    card_id: string;
    url: string;
    market: string;
  }[];
}

export interface FilterProps {
  set?: string;
  limit?: number;
}

export interface HomeProps {
  searchParams: FilterProps;
}

export interface CustomButtonProps {
  isDisabled?: boolean;
  btnType?: 'button' | 'submit';
  containerStyles?: string;
  textStyles?: string;
  title: string;
  rightIcon?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface OptionProps {
  title: string;
  value: string;
}

export interface CustomFilterProps {
  title: string;
  options: OptionProps[];
}

export interface ShowMoreProps {
  pageNumber: number;
  isNext: boolean;
}
