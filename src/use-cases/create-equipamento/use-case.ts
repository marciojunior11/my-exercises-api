import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { ICreateEquipamentoDTO } from "./dto";
import { Equipamento } from "@/entities/equipamento";
import { inject, injectable } from "tsyringe";
import { EquipamentoRepository } from "@/repositories/equipamento-repository.prisma";

@injectable()
class CreateEquipamentoUseCase {
    constructor(
        @inject(EquipamentoRepository)
        private repository: IEquipamentoRepository
    ) { }

    public async execute(equipamento: ICreateEquipamentoDTO) {
        if (!equipamento.nome || equipamento.nome.trim().length === 0) {
            throw new Error("Nome do equipamento é obrigatório.");
        }

        const entity = new Equipamento({
            nome: equipamento.nome
        });

        const result = await this.repository.create(entity);

        return result;
    };
}

export { CreateEquipamentoUseCase };