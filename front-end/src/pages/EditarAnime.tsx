import { useNavigate, useParams } from "react-router";
import AnimeForm from "../components/AnimeForm";
import { buscarAnimePorId, editarAnime } from "../services/fakeApi";
import type { AnimeFormData } from "../types/Anime";

const EditarAnime = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const anime = buscarAnimePorId(Number(id));

  if (!anime) {
    return <p className="text-white">Anime não encontrado.</p>;
  }

  const handleEditAnime = (animeAtualizado: AnimeFormData) => {
    editarAnime(Number(id), animeAtualizado);

    navigate("/my-animes");
  };

  return <AnimeForm initialData={anime} onSubmit={handleEditAnime} />;
};

export default EditarAnime;
