import { prisma } from "@/lib/prisma";
import { Repository } from "./repository";

export default class EquipamentoService extends Repository<typeof prisma.equipamento> {
    constructor() {
        super(prisma.equipamento);
    }
}