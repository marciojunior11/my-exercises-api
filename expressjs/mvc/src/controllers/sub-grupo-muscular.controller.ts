import { SubGrupoMuscularRepository } from "@/repositories";
import { Request, Response } from "express"

const repository = new SubGrupoMuscularRepository();

export class SubGrupoMuscularController {
    getSubGruposMusculares = async (req: Request, res: Response) => {
        const subGruposMusculares = await repository.findMany({
            include: {
                GrupoMuscular: true
            }
        });

        return res.json(subGruposMusculares);
    };
}