import axios from 'axios';
import { uppercase } from '../utils';

const BASE_URL = 'https://dog.ceo/api';

export const getRandomImage = async () => {
  const { data } = await axios.get(`${BASE_URL}/breeds/image/random`);
  const { message: randomImageUrl, status } = data || {};
  if (status !== 'success') return '';
  return randomImageUrl;
};

export const getRandomByBreed = async fullBreed => {
  const { data } = await axios.get(
    `${BASE_URL}/breed/${fullBreed}/images/random`
  );
  const { message: randomImageUrl, status } = data || {};
  if (status !== 'success') return '';
  return randomImageUrl;
};

export const getAllBreeds = async () => {
  const { data } = await axios.get(`${BASE_URL}/breeds/list/all`);
  const { message: breeds, status } = data || {};
  if (status !== 'success') return [];

  const parsedBreeds = Object.entries(breeds).map(breed => {
    const hasSubBreeds = breed[1]?.length;
    return {
      name: breed[0],
      label: uppercase(breed[0]),
      ...(hasSubBreeds && {
        subBreeds: breed[1].map(subBreed => ({
          name: subBreed,
          label: uppercase(subBreed),
        })),
      }),
    };
  });
  return parsedBreeds;
};

export const getSubBreedsByBreed = async breed => {
  if (!breed) return [];
  const { data } = await axios.get(`${BASE_URL}/breed/${breed}/list`);
  const { message: subBreeds, status } = data || {};
  if (status !== 'success') return [];
  return subBreeds;
};
