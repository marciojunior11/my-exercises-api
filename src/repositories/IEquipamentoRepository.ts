import { Equipamento } from "@/entities/equipamento";

export interface IEquipamentoRepository {
    create(equipamento: Equipamento): Promise<Equipamento>;
    delete(id: number): Promise<void>;
    findAll(): Promise<Equipamento[]>;
    findById(id: number): Promise<Equipamento | null>;
    update(equipamento: Equipamento): Promise<Equipamento>;
}