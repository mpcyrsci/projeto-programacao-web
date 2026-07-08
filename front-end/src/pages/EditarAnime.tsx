import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import AnimeForm from "../components/anime/AnimeForm";
import { buscarAnimePorId, editarAnime } from "../services/animeApi";
import type { AnimeFormData } from "../types/AnimeForm";
import type { UserAnime } from "../types/User";

const EditarAnime = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [anime, setAnime] = useState<UserAnime | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const carregarAnime = async () => {
      try {
        const dados = await buscarAnimePorId(Number(id));
        setAnime(dados);
      } catch {
        alert("Erro ao buscar anime.");
      } finally {
        setLoading(false);
      }
    };

    carregarAnime();
  }, [id]);

  const handleEditAnime = async (animeAtualizado: AnimeFormData) => {
    try {
      await editarAnime(Number(id), animeAtualizado);

      navigate("/my-animes");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao editar anime.");
      }
    }
  };

  if (loading) {
    return <p className="text-white">Carregando...</p>;
  }

  if (!anime) {
    return <p className="text-white">Anime não encontrado.</p>;
  }

  return <AnimeForm initialData={anime} onSubmit={handleEditAnime} />;
};

export default EditarAnime;
