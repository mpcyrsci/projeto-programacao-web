export interface Anime {
  mal_id: number;
  title: string;
  score: number;
  episodes: number;
  images: {
    jpg: {
      image_url: string;
    };
  };
}

const api = "https://api.jikan.moe/v4/";

export const buscarAnimes = async () => {
  const resposta = await fetch(`${api}top/anime?limit=24`);

  if (!resposta.ok) {
    throw new Error("Erro ao buscar animes.");
  }

  const dados = await resposta.json();

  console.log(dados);

  return dados.data;
};
