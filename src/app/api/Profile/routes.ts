import { Profile } from '@src/interface/types';

const API = async (): Promise<Profile> => {
  const res = await fetch(`${process.env.API_URL}`);
  if (!res.ok) {
    throw new Error('Failed to fetch');
  }
  const data = await res.json();

  return data;
};

export default API;
