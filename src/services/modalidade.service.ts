import { prisma } from "@/lib/prisma";
import { IModalidade } from "@/models/modalidade.model";

export default class ModalidadeService {
    public getModalidades = async (): Promise<IModalidade[]> => {
        const modalidades = (await prisma.modalidade.findMany()).map(u => ({ id: u.id, nome: u.nome }));

        return modalidades;
    };
}