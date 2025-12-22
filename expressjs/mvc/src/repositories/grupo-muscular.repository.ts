import { prisma } from "@/lib/prisma";
import { Repository } from "./repository";

export class GrupoMuscularRepository extends Repository<typeof prisma.grupoMuscular> {
    constructor() {
        super(prisma.grupoMuscular);
    }
}