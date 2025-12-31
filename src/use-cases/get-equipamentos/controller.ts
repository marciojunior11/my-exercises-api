import { inject, injectable } from "tsyringe";
import { GetEquipamentosUseCase } from "./use-case";
import { Request, Response } from "express";
import { IGetEquipamentosDTO } from "./dto";

@injectable()
export class GetEquipamentosController {
    constructor(
        @inject("GetEquipamentosUseCase")
        private useCase: GetEquipamentosUseCase
    ) { }

    public handle = async (req: Request, res: Response) => {
        const { nome } = req.query;

        const filtros: IGetEquipamentosDTO = { nome: nome as string };

        const result = await this.useCase.execute(filtros);

        res.json({
            success: true,
            data: result
        });
    };
}