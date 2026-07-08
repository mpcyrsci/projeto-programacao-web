import { useEffect, useState } from "react";
import { Link } from "react-router";
import Button from "../components/Button";
import UserAnimeCard from "../components/UserAnimeCard";
import { listarAnimes } from "../services/fakeApi";
import type { UserAnime } from "../types/UserAnime";
import { excluirAnime } from "../services/fakeApi";
import Header from "../components/Header";

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
    <div className="min-h-screen w-full bg-[#030101]">
      <div className="mx-auto flex flex-col items-center bg-[#030101] p-4 sm:p-6">
        <Header title="Sair" route="/" />

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-10">
          <div className="my-4 w-full max-w-md rounded-xl bg-white p-2 text-center text-2xl font-bold text-[#030101] shadow-[0px_4px_1px_#EE363C] sm:text-3xl">
            Meus Animes
          </div>

          <Link className="w-full sm:w-28" to="/novo-anime">
            <Button title="+ Novo Anime" />
          </Link>
        </div>

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
    </div>
  );
};

export default MyAnimes;
