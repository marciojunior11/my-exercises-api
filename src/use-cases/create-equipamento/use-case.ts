import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { ICreateEquipamentoDTO } from "./dto";
import { Equipamento } from "@/entities/equipamento";
import { inject, injectable } from "tsyringe";
import { Validate } from "./validator";

@injectable()
export class CreateEquipamentoUseCase {
    constructor(
        @inject("EquipamentoRepository")
        private repository: IEquipamentoRepository
    ) { }

    public async execute(equipamento: ICreateEquipamentoDTO) {
        Validate(equipamento);

        const entity = new Equipamento({
            nome: equipamento.nome
        });

        const result = await this.repository.create(entity);

        return result;
    };
}