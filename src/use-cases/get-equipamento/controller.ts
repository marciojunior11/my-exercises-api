import { inject, injectable } from "tsyringe";
import { GetEquipamentoUseCase } from "./use-case";
import { Request, Response } from "express";

@injectable()
export class GetEquipamentoController {
    constructor(
        @inject("GetEquipamentoUseCase")
        private useCase: GetEquipamentoUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        const { id } = req.params;

        const equipamento = await this.useCase.execute(Number(id));

        res.json({
            success: true,
            data: equipamento
        });
    };
}