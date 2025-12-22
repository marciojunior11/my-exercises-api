import { IGrupoMuscular } from "./grupo-muscular.models";

export interface ISubGrupoMuscular {
    id?: number;
    nome: string;
    grupoMuscular: IGrupoMuscular
}