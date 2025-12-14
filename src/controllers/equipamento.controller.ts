import { prisma } from "@/lib/prisma";
import { IEquipamento } from "@/models/equipamento.model";
import EquipamentoService from "@/services/equipamento.service";
import { Request, Response } from "express";

const service = new EquipamentoService();

export default class EquipamentoController {
    getEquipamentos = async (req: Request, res: Response) => {
        const equipamentos = await service.findMany();

        return res.json(equipamentos);
    };

    createEquipamento = async (req: Request, res: Response) => {
        const data: IEquipamento = req.body;

        const result = await service.create({
            data: { nome: data.nome }
        });

        return res.json(result);
    };

    updateEquipamento = async (req: Request, res: Response) => {
        const data: IEquipamento = req.body;

        const result = await service.update({
            data: { nome: data.nome },
            where: { id: data.id }
        });

        return res.json(result);
    };

    deleteEquipamento = async (req: Request, res: Response) => {
        const id = req.body;

        const result = await service.delete({
            where: { id: id }
        });

        return res.json(result);
    };
}