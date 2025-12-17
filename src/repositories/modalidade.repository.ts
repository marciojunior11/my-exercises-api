import { prisma } from "@/lib/prisma";
import { IModalidade } from "@/models/modalidade.model";
import { Repository } from "./repository";

export default class ModalidadeRepository extends Repository<typeof prisma.modalidade> {
    constructor() {
        super(prisma.modalidade)
    }
}