import ModalidadeRepository from "@/repositories/modalidade.repository";
import { Request, Response } from "express";

const repository = new ModalidadeRepository();

export default class ModalidadeController {
    getModalidades = async (req: Request, res: Response) => {
        const modalidades = await repository.findMany();

        return res.json(modalidades);
    };
}
