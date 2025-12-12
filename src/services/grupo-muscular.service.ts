import { prisma } from "@/lib/prisma";
import { IGrupoMuscular } from "@/models/grupo-muscular.model";

export default class GrupoMuscularService {
    public getGruposMusculares = async (): Promise<IGrupoMuscular[]> => {
        const gruposMusculares = (await prisma.grupoMuscular.findMany()).map(u => ({ id: u.id, nome: u.nome }));

        return gruposMusculares;
    };
}