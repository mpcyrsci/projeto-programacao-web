import { useNavigate } from "react-router";
import AnimeForm from "../components/anime/AnimeForm";
import { criarAnime } from "../services/animeApi";
import type { AnimeFormData } from "../types/AnimeForm";

const NovoAnime = () => {
  const navigate = useNavigate();

  const handleCreateAnime = async (anime: AnimeFormData) => {
    try {
      await criarAnime(anime);

      navigate("/my-animes");
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      } else {
        alert("Erro ao cadastrar anime.");
      }
    }
  };

  return <AnimeForm onSubmit={handleCreateAnime} />;
};

export default NovoAnime;
