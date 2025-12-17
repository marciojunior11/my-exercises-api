import APIError from "@/errors/api-error";
import { IEquipamento } from "@/models/equipamento.models";
import EquipamentoRepository from "@/repositories/equipamento.repository";

const repository = new EquipamentoRepository();

export default class EquipamentoService {
    getEquipamentos = async () => {
        const equipamentos = await repository.findMany();

        return equipamentos;
    };

    createEquipamento = async (data: IEquipamento) => {
        const result = await repository.create({
            data: { nome: data.nome }
        });

        return result;
    };

    updateEquipamento = async (data: IEquipamento) => {
        const bean = await repository.findUnique({ where: { id: data.id } });

        if (!!!bean)
            throw new APIError("Equipamento não encontrado.", 404);

        const result = await repository.update({
            data: { nome: data.nome },
            where: { id: data.id }
        });

        return result;
    };

    deleteEquipamento = async (id: number) => {
        const bean = await repository.findUnique({ where: { id: id } });

        if (!!!bean)
            throw new APIError("Equipamento não encontrado.", 404);

        const result = await repository.delete({
            where: { id: id },
        });

        return result;
    };
}