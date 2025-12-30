import { EquipamentoRepository } from "@/repositories/equipamento-repository.prisma";
import { IEquipamentoRepository } from "@/repositories/IEquipamentoRepository";
import { CreateEquipamentoController } from "@/use-cases/create-equipamento/controller";
import { CreateEquipamentoUseCase } from "@/use-cases/create-equipamento/use-case";
import { container } from "tsyringe";

container.registerSingleton(CreateEquipamentoController);
container.registerSingleton(CreateEquipamentoUseCase);
container.registerSingleton<IEquipamentoRepository>(EquipamentoRepository);

export { container };
