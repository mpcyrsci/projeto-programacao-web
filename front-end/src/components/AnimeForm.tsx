import { useState } from "react";
import Input from "./Input";
import Button from "./Button";
import { Link } from "react-router";
import type { AnimeFormData } from "../types/Anime";

interface AnimeFormProps {
  onSubmit: (anime: AnimeFormData) => void;
  initialData?: AnimeFormData;
}

const AnimeForm = ({ onSubmit, initialData }: AnimeFormProps) => {
  const [title, setTitle] = useState(initialData?.title ?? "");
  const [imageUrl, setImageUrl] = useState(initialData?.imageUrl ?? "");
  const [score, setScore] = useState(initialData?.score?.toString() ?? "");
  const [episodes, setEpisodes] = useState(
    initialData?.episodes?.toString() ?? "",
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      title,
      imageUrl,
      score: Number(score),
      episodes: Number(episodes),
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex h-screen items-center justify-center bg-[#030101]"
    >
      <div className="flex max-w-md flex-col items-center gap-2 rounded-xl border border-[#D7D8D9] bg-[#D7D8D9] p-4">
        <Link to="/">
          <img
            src="/logo.png"
            alt="Logo do site."
            className="mb-4 h-50 w-58.25"
          />
        </Link>

        <p className="text-lg font-bold">Novo Anime</p>

        <Input
          placeholder="Título"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          placeholder="URL da imagem"
          type="text"
          value={imageUrl}
          onChange={(e) => setImageUrl(e.target.value)}
        />
        <Input
          placeholder="Nota"
          type="number"
          value={score}
          onChange={(e) => setScore(e.target.value)}
        />
        <Input
          placeholder="Número de episódios"
          type="number"
          value={episodes}
          onChange={(e) => setEpisodes(e.target.value)}
        />

        <Button title="Salvar Anime" />
      </div>
    </form>
  );
};

export default AnimeForm;
