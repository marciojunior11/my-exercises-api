import EquipamentoService from "@/services/equipamento.service";
import { Request, Response } from "express";

const service = new EquipamentoService();

export default class EquipamentoController {
    getEquipamentos = async (req: Request, res: Response) => {
        const equipamentos = await service.findMany();

        return res.json(equipamentos);
    };
}