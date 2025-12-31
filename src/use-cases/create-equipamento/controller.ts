import { Request, Response } from "express";
import { CreateEquipamentoUseCase } from "./use-case";
import { inject, injectable } from "tsyringe";

@injectable()
export class CreateEquipamentoController {
    constructor(
        @inject("CreateEquipamentoUseCase")
        private useCase: CreateEquipamentoUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        const { nome } = req.body;

        const result = await this.useCase.execute({
            nome
        });

        res.json({
            success: true,
            data: result
        });
    };
}