interface Profile {
  id: string;
  name: string;
  email: string;
  // adicione outras propriedades conforme necessário
}

const API = async (): Promise<Profile> => {
  const res = await fetch(`${process.env.API_URL}`);
  console.log(res);
  if (!res.ok) {
    throw new Error("Failed to fetch");
  }
  const data = await res.json();

  return data;
};

export default API;
