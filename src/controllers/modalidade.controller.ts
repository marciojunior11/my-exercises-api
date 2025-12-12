import ModalidadeService from "@/services/modalidade.service";
import { Request, Response } from "express";

const service = new ModalidadeService();

export default class ModalidadeController {
    public getModalidades = async (req: Request, res: Response) => {
        const modalidades = await service.getModalidades();

        return res.json(modalidades);
    };
}
