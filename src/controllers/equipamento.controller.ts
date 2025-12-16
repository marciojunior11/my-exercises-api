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
        const { id } = req.params;
        const data: IEquipamento = req.body;

        const bean = await service.findUnique({ where: { id: Number(id) } });

        if (!!!bean)
            return res.status(404).json({ message: "Equipamento não encontrado" });

        const result = await service.update({
            data: { nome: data.nome },
            where: { id: Number(id) }
        });

        return res.json(result);
    };

    deleteEquipamento = async (req: Request, res: Response) => {
        const { id } = req.params;

        const bean = await service.findUnique({ where: { id: Number(id) } });

        if (!!!bean)
            return res.status(404).json({ message: "Equipamento não encontrado" });

        const result = await service.delete({
            where: { id: Number(id) },
        });

        return res.json(result);
    };
}