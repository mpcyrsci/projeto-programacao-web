import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { AuthentPayload } from "../tipos/auth.payload";

export function authentMiddleware(req: Request, res: Response, next: NextFunction){

    const token = req.cookies.token;

    if(!token){

        res.status(400).json({
        
            message: "Token não encontrado"

        });

    }

    try{

        const payload = jwt.verify(token, process.env.JWT_SECRET!) as AuthentPayload

        res.locals.user = payload;

        next();
    } catch (erro) {

        res.status(400).json({
        
            message: "Token inválido"

        });

    }

}