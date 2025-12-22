import { GrupoMuscularRepository } from "@/repositories";
import { Request, Response } from "express";

const repository = new GrupoMuscularRepository();

export class GrupoMuscularController {
    getGruposMusculares = async (req: Request, res: Response) => {
        const gruposMusculares = await repository.findMany();

        return res.json(gruposMusculares);
    };
}