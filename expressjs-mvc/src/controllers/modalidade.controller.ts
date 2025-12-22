import { ModalidadeRepository } from "@/repositories";
import { Request, Response } from "express";

const repository = new ModalidadeRepository();

export class ModalidadeController {
    getModalidades = async (req: Request, res: Response) => {
        const modalidades = await repository.findMany();

        return res.json(modalidades);
    };
}