import { prisma } from "@/lib/prisma";
import { Repository } from "./repository";

export default class SubGrupoMuscularRepository extends Repository<typeof prisma.subGrupoMuscular> {
    constructor() {
        super(prisma.subGrupoMuscular);
    }
}