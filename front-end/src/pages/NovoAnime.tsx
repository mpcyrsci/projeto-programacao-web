import { useNavigate } from "react-router";
import AnimeForm from "../components/AnimeForm";
import { criarAnime } from "../services/fakeApi";
import type { AnimeFormData } from "../types/Anime";

const NovoAnime = () => {
  const navigate = useNavigate();

  const handleCreateAnime = (anime: AnimeFormData) => {
    criarAnime(anime);
    navigate("/my-animes");
  };

  return <AnimeForm onSubmit={handleCreateAnime} />;
};

export default NovoAnime;