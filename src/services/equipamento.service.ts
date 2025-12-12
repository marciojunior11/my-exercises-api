import { prisma } from "@/lib/prisma";
import { IEquipamento } from "@/models/equipamento.model";

export default class EquipamentoService {
    public getEquipamentos = async (): Promise<IEquipamento[]> => {
        const equipamentos = (await prisma.equipamento.findMany()).map(u => ({ id: u.id, nome: u.nome }));

        return equipamentos;
    };
}