import { Link } from "react-router";
import type { UserAnime } from "../types/UserAnime";

interface UserAnimeCardProps {
  anime: UserAnime;
  onDelete: (id: number) => void;
}

const UserAnimeCard = ({ anime, onDelete }: UserAnimeCardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:scale-105">
      <img
        src={anime.imagem}
        alt={anime.titulo}
        className="h-56 w-full object-cover sm:h-72"
      />

      <div className="p-4">
        <h2 className="line-clamp-2 text-base font-bold sm:text-lg">
          {anime.titulo}
        </h2>

        <div className="mt-3 flex justify-between text-sm text-gray-600">
          <span>{anime.genero}</span>
          <span>{anime.ano}</span>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          <span>⭐ {anime.nota ?? "-"}</span>
        </div>

        <div className="mt-5 flex flex-col gap-2 sm:flex-row">
          <Link to={`/editar-anime/${anime.id}`} className="flex-1">
            <button className="w-full cursor-pointer rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
              Editar
            </button>
          </Link>

          <button
            onClick={() => onDelete(anime.id)}
            className="flex-1 cursor-pointer rounded-lg bg-red-600 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAnimeCard;
