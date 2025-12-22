import APIError from "@/errors/api-error";
import { prisma } from "@/lib/prisma";
import { IEquipamento } from "@/models/equipamento.models";
import EquipamentoService from "@/services/equipamento.service";
import { Request, Response } from "express";

const service = new EquipamentoService();

export class EquipamentoController {
    getEquipamentos = async (req: Request, res: Response) => {
        const equipamentos = await service.getEquipamentos();

        return res.json(equipamentos);
    };

    createEquipamento = async (req: Request, res: Response) => {
        const data: IEquipamento = req.body;

        const result = await service.createEquipamento(data);

        return res.json(result);
    };

    updateEquipamento = async (req: Request, res: Response) => {
        const { id } = req.params;

        const data: IEquipamento = req.body;
        data.id = Number(id);

        const result = await service.updateEquipamento(data);

        return res.json(result);
    };

    deleteEquipamento = async (req: Request, res: Response) => {
        const { id } = req.params;

        const result = await service.deleteEquipamento(Number(id));

        return res.json(result);
    };
}