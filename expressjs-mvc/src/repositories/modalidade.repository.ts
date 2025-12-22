import { prisma } from "@/lib/prisma";
import { IModalidade } from "@/models/modalidade.models";
import { Repository } from "./repository";

export class ModalidadeRepository extends Repository<typeof prisma.modalidade> {
    constructor() {
        super(prisma.modalidade)
    }
}