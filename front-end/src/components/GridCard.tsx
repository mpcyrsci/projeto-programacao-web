import { useEffect, useState } from "react";
import Card from "./Card";
import { buscarAnimes } from "../services/api";
import type { Anime } from "../types/Anime";

const GridCard = () => {
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
        <Card key={anime.mal_id} anime={anime} />
      ))}
    </div>
  );
};

export default GridCard;
