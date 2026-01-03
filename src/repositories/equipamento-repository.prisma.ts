import { Equipamento } from "@/entities/equipamento";
import { IEquipamentoRepository } from "./IEquipamentoRepository";
import { prisma } from "@/lib/prisma";
import { injectable } from "tsyringe";

@injectable()
export class PrismaEquipamentoRepository implements IEquipamentoRepository {
    public async create(equipamento: Equipamento): Promise<Equipamento> {
        const prismaResult = await prisma.equipamento.create({
            data: {
                nome: equipamento.nome ?? "",
            }
        });

        const result = new Equipamento({
            nome: prismaResult?.nome
        }, prismaResult?.id);

        return result;
    }

    public async delete(id: number): Promise<void> {
        await prisma.equipamento.delete({
            where: { id: id }
        });
    }

    public async findAll(): Promise<Equipamento[]> {
        const prismaResult = await prisma.equipamento.findMany();

        const result = prismaResult.map(item => new Equipamento({
            nome: item.nome
        }, item.id));

        return result;
    }

    public async findById(id: number): Promise<Equipamento | null> {
        const prismaResult = await prisma.equipamento.findUnique({
            where: { id: id }
        });

        if (!prismaResult)
            return null;

        const result = new Equipamento({
            nome: prismaResult?.nome
        }, prismaResult?.id);

        return result;
    }

    public async update(equipamento: Equipamento): Promise<Equipamento> {
        const prismaResult = await prisma.equipamento.update({
            data: {
                nome: equipamento.nome ?? ""
            },
            where: { id: equipamento.id }
        });

        const result = new Equipamento({
            nome: prismaResult?.nome
        }, prismaResult?.id);

        return result;
    }
}