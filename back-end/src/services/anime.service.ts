import { prisma } from "../prisma/client";

export class AnimeService {
  async create(
    dados: {
      titulo: string;
      imagem: string;
      genero: string;
      ano: string;
      nota: number;
    },
    userId: number,
  ) {
    await prisma.anime.create({
      data: {
        ...dados,
        userId,
      },
    });
  }

  async update(
    id: number,
    userId: number,
    dados: {
      titulo: string;
      imagem: string;
      genero: string;
      ano: string;
      nota: number;
    },
  ) {
    await prisma.anime.update({
      where: {
        id,
        userId,
      },

      data: dados,
    });
  }

  async delete(id: number, userId: number) {
    await prisma.anime.delete({
      where: {
        id,
        userId,
      },
    });
  }

  async listAll(userId: number) {
    return await prisma.anime.findMany({
      where: {
        userId,
      },
    });
  }

  async searchId(id: number, userId: number) {
    return await prisma.anime.findUnique({
      where: {
        id,
        userId,
      },
    });
  }
}
