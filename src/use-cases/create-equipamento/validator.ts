import { ValidationError } from "@/errors/validation-error";
import { ICreateEquipamentoDTO } from "./dto";

export const Validate = (data: ICreateEquipamentoDTO) => {
    if (!data.nome || data.nome.trim().length === 0) {
        throw new ValidationError("Nome do equipamento é obrigatório.");
    }
};