import { prisma } from "@/lib/prisma";
import { Repository } from "./repository";

export default class GrupoMuscularService extends Repository<typeof prisma.grupoMuscular> {
    constructor() {
        super(prisma.grupoMuscular);
    }
}