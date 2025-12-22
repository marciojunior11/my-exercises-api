import APIError from "@/errors/api-error";
import { prisma } from "@/lib/prisma";
import { IEquipamento } from "@/models/equipamento.models";
import EquipamentoService from "@/services/equipamento.service";
import { Request, Response } from "express";

const service = new EquipamentoService();

export class EquipamentoController {
    getEquipamentos = async (req: Request, res: Response) => {
        try {
            const equipamentos = await service.getEquipamentos();

            return res.json(equipamentos);
        } catch (e: unknown) {
            if (e instanceof APIError)
                return res.status(e.statusCode).json({
                    success: false,
                    error: {
                        message: e.message
                    }
                });

            return res.status(500).json({
                success: false,
                error: {
                    message: "Erro interno do servidor"
                }
            })
        }
    };

    createEquipamento = async (req: Request, res: Response) => {
        try {
            const data: IEquipamento = req.body;

            const result = await service.createEquipamento(data);

            return res.json(result);
        } catch (e: unknown) {
            if (e instanceof APIError)
                return res.status(e.statusCode).json({
                    success: false,
                    error: {
                        message: e.message
                    }
                });

            return res.status(500).json({
                success: false,
                error: {
                    message: "Erro interno do servidor"
                }
            })
        }
    };

    updateEquipamento = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const data: IEquipamento = req.body;
            data.id = Number(id);

            const result = await service.updateEquipamento(data);

            return res.json(result);
        } catch (e: unknown) {
            if (e instanceof APIError)
                return res.status(e.statusCode).json({
                    success: false,
                    error: {
                        message: e.message
                    }
                });

            return res.status(500).json({
                success: false,
                error: {
                    message: "Erro interno do servidor"
                }
            })
        }
    };

    deleteEquipamento = async (req: Request, res: Response) => {
        try {
            const { id } = req.params;

            const result = await service.deleteEquipamento(Number(id));

            return res.json(result);
        } catch (e: unknown) {
            if (e instanceof APIError)
                return res.status(e.statusCode).json({
                    success: false,
                    error: {
                        message: e.message
                    }
                });

            return res.status(500).json({
                success: false,
                error: {
                    message: "Erro interno do servidor"
                }
            })
        }
    };
}