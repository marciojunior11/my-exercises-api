import { PrismaEquipamentoRepository } from "@/repositories/equipamento-repository.prisma";
import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { CreateEquipamentoController } from "@/use-cases/create-equipamento/controller";
import { CreateEquipamentoUseCase } from "@/use-cases/create-equipamento/use-case";
import { GetEquipamentosController } from "@/use-cases/get-equipamentos/controller";
import { GetEquipamentosUseCase } from "@/use-cases/get-equipamentos/use-case";
import { container } from "tsyringe";

//#region CONTROLLERS
container.registerSingleton(
    "CreateEquipamentoController",
    CreateEquipamentoController
);

container.registerSingleton(
    "GetEquipamentosController",
    GetEquipamentosController
);
//#endregion

//#region USE CASES
container.registerSingleton(
    "CreateEquipamentoUseCase",
    CreateEquipamentoUseCase
);

container.registerSingleton(
    "GetEquipamentosUseCase",
    GetEquipamentosUseCase
);
//#endregion


//#region REPOSITORIES
container.registerSingleton<IEquipamentoRepository>(
    "EquipamentoRepository",
    PrismaEquipamentoRepository
);
//#endregion

export { container };
