import { Request, Response } from "express";
import { CreateEquipamentoUseCase } from "./use-case";
import { inject, injectable } from "tsyringe";

@injectable()
class CreateEquipamentoController {
    constructor(
        @inject("CreateEquipamentoUseCase")
        private useCase: CreateEquipamentoUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        const { nome } = req.body;

        const result = await this.useCase.execute({
            nome
        });

        return res.json(result);
    }
}

export { CreateEquipamentoController };