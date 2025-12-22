import { prisma } from "@/lib/prisma";
import { Repository } from "./repository";

export class EquipamentoRepository extends Repository<typeof prisma.equipamento> {
    constructor() {
        super(prisma.equipamento);
    }
}