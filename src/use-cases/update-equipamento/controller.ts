import { inject, injectable } from "tsyringe";
import { UpdateEquipamentoUseCase } from "./use-case";
import { Request, Response } from "express";

@injectable()
export class UpdateEquipamentoController {
    constructor(
        @inject("UpdateEquipamentoUseCase")
        private useCase: UpdateEquipamentoUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        const { id } = req.params;
        const { nome } = req.body;

        const result = await this.useCase.execute({
            id: Number(id),
            nome: nome as string
        });

        res.json({
            success: true,
            data: result
        });
    };
}