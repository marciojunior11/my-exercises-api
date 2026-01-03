import { GetEquipamentoController } from "@/use-cases/get-equipamento/controller";
import { GetEquipamentosController } from "@/use-cases/get-equipamentos/controller";
import { CreateEquipamentoController } from "@/use-cases/create-equipamento/controller";
import { UpdateEquipamentoController } from "@/use-cases/update-equipamento/controller";
import { DeleteEquipamentoController } from "@/use-cases/delete-equipamento/controller";

import { GetEquipamentoUseCase } from "@/use-cases/get-equipamento/use-case";
import { GetEquipamentosUseCase } from "@/use-cases/get-equipamentos/use-case";
import { CreateEquipamentoUseCase } from "@/use-cases/create-equipamento/use-case";
import { UpdateEquipamentoUseCase } from "@/use-cases/update-equipamento/use-case";
import { DeleteEquipamentoUseCase } from "@/use-cases/delete-equipamento/use-case";

import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { PrismaEquipamentoRepository } from "@/repositories/equipamento-repository.prisma";
import { container } from "tsyringe";

//#region CONTROLLERS
container.registerSingleton(
    "GetEquipamentoController",
    GetEquipamentoController
);

container.registerSingleton(
    "GetEquipamentosController",
    GetEquipamentosController
);

container.registerSingleton(
    "CreateEquipamentoController",
    CreateEquipamentoController
);

container.registerSingleton(
    "UpdateEquipamentoController",
    UpdateEquipamentoController
);

container.registerSingleton(
    "DeleteEquipamentoController",
    DeleteEquipamentoController
);
//#endregion

//#region USE CASES
container.registerSingleton(
    "GetEquipamentoUseCase",
    GetEquipamentoUseCase
);

container.registerSingleton(
    "GetEquipamentosUseCase",
    GetEquipamentosUseCase
);

container.registerSingleton(
    "CreateEquipamentoUseCase",
    CreateEquipamentoUseCase
);

container.registerSingleton(
    "UpdateEquipamentoUseCase",
    UpdateEquipamentoUseCase
);

container.registerSingleton(
    "DeleteEquipamentoUseCase",
    DeleteEquipamentoUseCase
);
//#endregion


//#region REPOSITORIES
container.registerSingleton<IEquipamentoRepository>(
    "EquipamentoRepository",
    PrismaEquipamentoRepository
);
//#endregion

export { container };
