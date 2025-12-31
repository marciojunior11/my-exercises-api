import { ICreateEquipamentoDTO } from "./dto";

const Validate = (data: ICreateEquipamentoDTO) => {
    if (!data.nome || data.nome.trim().length === 0) {
        throw new Error("Nome do equipamento é obrigatório.");
    }
};

export { Validate };