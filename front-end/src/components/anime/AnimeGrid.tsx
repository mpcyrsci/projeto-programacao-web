import { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";
import { buscarAnimes } from "../../services/jikanApi";
import type { Anime } from "../../types/Anime";

const AnimeGrid = () => {
  const [animes, setAnimes] = useState<Anime[]>([]);

  useEffect(() => {
    buscarAnime();
  }, []);

  const buscarAnime = async () => {
    const dados = await buscarAnimes();
    setAnimes(dados);
  };

  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-4">
      {animes.map((anime) => (
        <AnimeCard key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default AnimeGrid;
