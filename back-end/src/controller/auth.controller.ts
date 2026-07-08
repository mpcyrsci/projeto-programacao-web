import { Request, Response } from "express";
import { AuthentService } from "../services/auth.services";

const userServiceObj = new AuthentService();

export class AuthentController{

    async create(req: Request, res: Response){

        try{

            const {email,senha} = req.body;

            const user = await userServiceObj.create(email, senha);

            res.json(user);

        } catch (erro) {

            res.status(400).json({
                message:
                erro instanceof Error
                ? erro.message
                :  "Error"
            });
            
        }

    }


    async login(req: Request, res: Response){

        try{

            const {email,senha} = req.body;

            const retorno = await userServiceObj.login(email, senha);

            res.cookie("token", retorno.token,{
                httpOnly: true,
                secure: false,
                sameSite: "lax"
            });

            res.json({
                sucess: true
            })

        } catch (erro) {

            res.status(400).json({
                message:
                erro instanceof Error
                ? erro.message
                :  "Error"
            });

        }

    }


    async logout(req: Request, res: Response){

        res.clearCookie("token")
        res.json({
            sucess: true,
        })

    }

}