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
        src={anime.imageUrl}
        alt={anime.title}
        className="h-72 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-bold">{anime.title}</h2>

        <div className="mt-3 flex justify-between text-sm text-gray-600">
          <span>⭐ {anime.score ?? "-"}</span>
          <span>{anime.episodes ?? "?"} episódios</span>
        </div>

        <div className="mt-5 flex gap-2">
          <Link to={`/editar-anime/${anime.id}`} className="flex-1">
            <button className="w-full rounded-lg bg-blue-600 py-2 font-medium text-white transition hover:bg-blue-700">
              Editar
            </button>
          </Link>

          <button
            onClick={() => onDelete(anime.id)}
            className="flex-1 rounded-lg bg-red-600 py-2 font-medium text-white transition hover:bg-red-700"
          >
            Excluir
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserAnimeCard;
