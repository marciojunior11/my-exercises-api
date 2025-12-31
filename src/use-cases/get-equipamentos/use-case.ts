import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { inject, injectable } from "tsyringe";
import { IGetEquipamentosDTO } from "./dto";

@injectable()
export class GetEquipamentosUseCase {
    constructor(
        @inject("EquipamentoRepository")
        private equipamentoRepository: IEquipamentoRepository
    ) { }

    public async execute(filtros: IGetEquipamentosDTO) {
        let equipamentos = await this.equipamentoRepository.findAll();

        if (!equipamentos || equipamentos.length === 0) {
            return [];
        }

        if (filtros) {
            if (filtros.nome) {
                equipamentos = equipamentos.filter(item => item.nome?.toLowerCase().includes(filtros.nome!.toLowerCase()));
            }
        }

        return equipamentos;
    }
}