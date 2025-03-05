import { FilterProps } from '../types';

export const updateSearchParams = (type: string, value: string) => {
  const searchParams = new URLSearchParams(window.location.search);
  searchParams.set(type, value);
  const newPathname = `${window.location.pathname}?${searchParams.toString()}`;

  return newPathname;
};

export const deleteSearchParams = (type: string) => {
  const newSearchParams = new URLSearchParams(window.location.search);
  newSearchParams.delete(type.toLocaleLowerCase());

  const newPathname = `${
    window.location.pathname
  }?${newSearchParams.toString()}`;

  return newPathname;
};

export async function fetchSets() {
  const response = await fetch(`${process.env.TCG_API_URL}/sets`);
  const result = await response.json();
  return result;
}

export async function fetchCardsBySet(filters: FilterProps) {
  const { set } = filters;

  const response = await fetch(`${process.env.TCG_API_URL}/sets/${set}/cards`);
  const result = await response.json();
  return result;
}
