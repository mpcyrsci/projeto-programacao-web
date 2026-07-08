import type { Anime } from "../../types/Anime"

interface CardProps {
  anime: Anime;
}

const AnimeCard = ({ anime }: CardProps) => {
  return (
    <div className="overflow-hidden rounded-xl bg-white shadow-lg transition hover:scale-105">
      <img
        src={anime.images.jpg.image_url}
        alt={anime.title}
        className="h-80 w-full object-cover"
      />

      <div className="p-4">
        <h2 className="line-clamp-2 text-lg font-bold">{anime.title}</h2>

        <div className="mt-3 flex justify-between text-sm">
          <span>⭐ {anime.score ?? "-"}</span>
          <span>{anime.episodes ?? "?"} eps</span>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;
