import type { UserAnime } from "../types/UserAnime";

let animes: UserAnime[] = [];

export const listarAnimes = () => {
  return animes;
};

export const criarAnime = (anime: Omit<UserAnime, "id">) => {
  const novoAnime: UserAnime = {
    id: Date.now(),
    ...anime,
  };

  animes.push(novoAnime);
};

export const excluirAnime = (id: number) => {
  animes = animes.filter((anime) => anime.id !== id);

  return animes;
};

export const editarAnime = (
  id: number,
  animeAtualizado: Omit<UserAnime, "id">,
) => {
  const index = animes.findIndex((anime) => anime.id === id);

  if (index !== -1) {
    animes[index] = {
      id,
      ...animeAtualizado,
    };
  }

  return animes;
};

export const buscarAnimePorId = (id: number) => {
  return animes.find((anime) => anime.id === id);
};
