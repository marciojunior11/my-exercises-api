import { ValidationError } from "@/errors/validation-error";
import { IUpdateEquipamentoDTO } from "./dto";

export const Validate = (data: IUpdateEquipamentoDTO) => {
    if (!data.id || data.id === 0) {
        throw new ValidationError("ID do equipamento é obrigatório.");
    }

    if (!data.nome || data.nome.trim().length === 0) {
        throw new ValidationError("Nome do equipamento é obrigatório.");
    }
};