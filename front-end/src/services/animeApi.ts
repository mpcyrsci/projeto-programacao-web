import type { AnimeFormData } from "../types/AnimeForm";
import type { UserAnime } from "../types/User";

const API_URL = "http://localhost:3001/animes";

export const listarAnimes = async (): Promise<UserAnime[]> => {
  const response = await fetch(API_URL, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao listar os animes.");
  }

  return response.json();
};

export const criarAnime = async (anime: AnimeFormData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(anime),
  });

  if (!response.ok) {
    throw new Error("Erro ao criar anime.");
  }
};

export const excluirAnime = async (id: number) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao excluir anime.");
  }
};

export const buscarAnimePorId = async (id: number): Promise<UserAnime> => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "GET",
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Erro ao buscar anime.");
  }

  return response.json();
};

export const editarAnime = async (id: number, anime: AnimeFormData) => {
  const response = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
    body: JSON.stringify(anime),
  });

  if (!response.ok) {
    throw new Error("Erro ao editar anime.");
  }
};
