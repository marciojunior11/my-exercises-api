import SubGrupoMuscularRepository from "@/repositories/sub-grupo-muscular.repository";
import { Request, Response } from "express"

const repository = new SubGrupoMuscularRepository();

export default class SubGrupoMuscularController {
    getSubGruposMusculares = async (req: Request, res: Response) => {
        const subGruposMusculares = await repository.findMany({
            include: {
                GrupoMuscular: true
            }
        });

        return res.json(subGruposMusculares);
    };
}