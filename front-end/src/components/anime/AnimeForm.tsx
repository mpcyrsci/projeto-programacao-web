import { useState } from "react";
import Input from "../ui/Input";
import Button from "../ui/Button";
import { Link } from "react-router";
import type { AnimeFormData } from "../../types/AnimeForm";

interface AnimeFormProps {
  onSubmit: (anime: AnimeFormData) => void;
  initialData?: AnimeFormData;
}

const AnimeForm = ({ onSubmit, initialData }: AnimeFormProps) => {
  const [titulo, setTitulo] = useState(initialData?.titulo ?? "");
  const [imagem, setImagem] = useState(initialData?.imagem ?? "");
  const [genero, setGenero] = useState(initialData?.genero ?? "");
  const [ano, setAno] = useState(initialData?.ano ?? "");
  const [nota, setNota] = useState(initialData?.nota?.toString() ?? "");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    onSubmit({
      titulo,
      imagem,
      genero,
      ano,
      nota: Number(nota),
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
          value={titulo}
          onChange={(e) => setTitulo(e.target.value)}
        />

        <Input
          placeholder="URL da imagem"
          type="text"
          value={imagem}
          onChange={(e) => setImagem(e.target.value)}
        />

        <Input
          placeholder="Gênero"
          type="text"
          value={genero}
          onChange={(e) => setGenero(e.target.value)}
        />

        <Input
          placeholder="Ano"
          type="text"
          value={ano}
          onChange={(e) => setAno(e.target.value)}
        />

        <Input
          placeholder="Nota"
          type="number"
          value={nota}
          onChange={(e) => setNota(e.target.value)}
        />

        <Button title="Salvar Anime" />
      </div>
    </form>
  );
};

export default AnimeForm;
