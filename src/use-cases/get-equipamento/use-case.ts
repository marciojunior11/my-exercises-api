import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { inject, injectable } from "tsyringe";
import { Validate } from "./validator";
import { NotFoundError } from "@/errors/not-found-error";

@injectable()
export class GetEquipamentoUseCase {
    constructor(
        @inject("EquipamentoRepository")
        private repository: IEquipamentoRepository
    ) { }

    public async execute(id: number) {
        Validate(id);

        const entity = await this.repository.findById(id);

        if (!entity) {
            throw new NotFoundError("Equipamento não encontrado");
        }

        return entity;
    }
}