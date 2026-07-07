import { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import UserAnimeCard from "../components/UserAnimeCard";
import { listarAnimes } from "../services/fakeApi";
import type { UserAnime } from "../types/UserAnime";
import { excluirAnime } from "../services/fakeApi";

const MyAnimes = () => {
  const [animes, setAnimes] = useState<UserAnime[]>([]);

  useEffect(() => {
    const dados = listarAnimes();
    setAnimes(dados);
  }, []);

  const handleDeleteAnime = (id: number) => {
    const novosAnimes = excluirAnime(id);
    setAnimes(novosAnimes);
  };

  return (
    <div className="mx-auto flex max-w-7xl flex-col items-center p-6">
      <Link to="/novo-anime">
        <Button title="+ Novo Anime" />
      </Link>

      <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {animes.map((anime) => (
          <UserAnimeCard
            key={anime.id}
            anime={anime}
            onDelete={handleDeleteAnime}
          />
        ))}
      </div>
    </div>
  );
};

export default MyAnimes;
