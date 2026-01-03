import { ValidationError } from "@/errors/validation-error";

export const Validate = (id: number) => {
    if (!id || id === 0) {
        throw new ValidationError("ID do equipamento é obrigatório.");
    }
}