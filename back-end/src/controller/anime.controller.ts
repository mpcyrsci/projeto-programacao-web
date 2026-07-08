import { Request, Response } from "express";
import { AnimeService } from "../services/anime.service";
import { AuthentPayload } from "../tipos/auth.payload";

const AnimeServiceObj = new AnimeService();

/*As tres primeiras funções acessam o banco de dados para fazer alguma operação e mandam uma resposta HTTP 
sem nada de importante no body dela já as duas ultimas funções RETORNAM para o frontend (ou usuário) os dados 
dos filmes para fazer o "reading" do CRUD
*/

export class AnimeController{

    async create(req: Request,res: Response)
    {
        const dados = req.body;
        const user = res.locals.user as AuthentPayload;
        await AnimeServiceObj.create(dados,user.id);
        res.status(200).send();
    }

    async update(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const user = res.locals.user as AuthentPayload;
        const dados = req.body;
        await AnimeServiceObj.update(id,user.id,dados);
        res.status(200).send();
    }

    async delete(req: Request, res: Response)
    {
        const id = Number(req.params.id);
        const user = res.locals.user as AuthentPayload;
        await AnimeServiceObj.delete(id, user.id);
        res.status(200).send();
    }

    // Função que manda os dados de todos os filmes de volta pro frontend
    async listAll(req:Request, res:Response)
    {
        const user = res.locals.user as AuthentPayload;
        const animes = await AnimeServiceObj.listAll(user.id);
        res.status(200).json(animes);
    }

    // Função que retorna um filme especifico do banco de dados
    async searchId(req:Request, res:Response)
    {
        const id = Number(req.params.id);
        const user = res.locals.user as AuthentPayload;
        const anime = await AnimeServiceObj.searchId(id,user.id);
        res.status(200).json(anime);
    }

}