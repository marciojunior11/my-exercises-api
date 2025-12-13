import { IGrupoMuscular } from "./grupo-muscular.model";

export interface ISubGrupoMuscular {
    id?: number;
    nome: string;
    grupoMuscular: IGrupoMuscular
}