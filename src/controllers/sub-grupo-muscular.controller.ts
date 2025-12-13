import SubGrupoMuscularService from "@/services/sub-grupo-muscular.service";
import { Request, Response } from "express"

const service = new SubGrupoMuscularService();

export default class SubGrupoMuscularController {
    getSubGruposMusculares = async (req: Request, res: Response) => {
        const subGruposMusculares = await service.findMany({
            include: {
                GrupoMuscular: true
            }
        });

        return res.json(subGruposMusculares);
    };
}