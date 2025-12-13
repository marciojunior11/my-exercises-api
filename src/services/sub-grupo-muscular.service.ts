import { prisma } from "@/lib/prisma";
import { Repository } from "./repository";

export default class SubGrupoMuscularService extends Repository<typeof prisma.subGrupoMuscular> {
    constructor() {
        super(prisma.subGrupoMuscular);
    }
}