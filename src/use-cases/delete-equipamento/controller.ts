import { inject, injectable } from "tsyringe";
import { DeleteEquipamentoUseCase } from "./use-case";
import { Request, Response } from "express";

@injectable()
export class DeleteEquipamentoController {
    constructor(
        @inject("DeleteEquipamentoUseCase")
        private useCase: DeleteEquipamentoUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        const { id } = req.params;

        await this.useCase.execute(Number(id));

        res.json({
            success: true,
        });
    };
}