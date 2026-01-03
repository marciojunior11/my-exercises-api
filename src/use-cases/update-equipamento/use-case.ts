import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { inject, injectable } from "tsyringe";
import { IUpdateEquipamentoDTO } from "./dto";
import { Validate } from "./validator";
import { NotFoundError } from "@/errors/not-found-error";
import { Equipamento } from "@/entities/equipamento";

@injectable()
export class UpdateEquipamentoUseCase {
    constructor(
        @inject("EquipamentoRepository")
        private repository: IEquipamentoRepository
    ) { }

    public async execute(equipamento: IUpdateEquipamentoDTO) {
        Validate(equipamento);

        const entity = await this.repository.findById(equipamento.id);

        if (!entity) {
            throw new NotFoundError("Equipamento não encontrado.");
        }

        const updatedEntity = new Equipamento({ nome: equipamento.nome }, equipamento.id)

        const result = await this.repository.update(updatedEntity);

        return result;
    }
}