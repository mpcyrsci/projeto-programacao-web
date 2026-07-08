import { prisma } from "../prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

export class AuthentService{

    async create(email: string, senha: string){

        const userCheck = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if(userCheck){
            throw new Error(
                "Usuário já existente no servidor"
            );
        }

        const senhaHashed = await bcrypt.hash(senha,10);

        const dados = {
            email,
            senha: senhaHashed
        }

        const user = await prisma.user.create({
            data: dados,
        });

        return {
            id: user.id,
            email: user.email
        }

    }


    async login(email: string, senha: string){

        const userCheck = await prisma.user.findUnique({
            where: {
                email,
            }
        });

        if(!userCheck){
            throw new Error(
                "Usuário não existe"
            );
        }
        
        const senhaCheck = await bcrypt.compare(senha, userCheck.senha);

        if(!senhaCheck){

            throw new Error(
                "Usuário ou senha inválido"
            )

        }

        const token = jwt.sign(
            {
            id: userCheck.id
            },
            process.env.JWT_SECRET!,
            {
                expiresIn: '1d'
            }
        );
        return{
            token,
        }

    } 

}