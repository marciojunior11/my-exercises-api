-- CreateEnum
CREATE TYPE "TipoSubGrupoMuscular" AS ENUM ('AGONISTA', 'ANTAGONISTA', 'SINERGISTA');

-- CreateTable
CREATE TABLE "tb_equipamentos" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_equipamentos_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_grupos_musculares" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_grupos_musculares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_sub_grupos_musculares" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "idgrupomuscular" INTEGER NOT NULL,

    CONSTRAINT "tb_sub_grupos_musculares_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_modalidades" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_modalidades_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_exercicios" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_exercicios_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "tb_exercicios_sub_grupos_musculares" (
    "idexercicio" INTEGER NOT NULL,
    "idsubgrupomuscular" INTEGER NOT NULL,
    "tipo" "TipoSubGrupoMuscular" NOT NULL,

    CONSTRAINT "tb_exercicios_sub_grupos_musculares_pkey" PRIMARY KEY ("idexercicio","idsubgrupomuscular")
);

-- CreateTable
CREATE TABLE "tb_exercicios_modalidades" (
    "idexercicio" INTEGER NOT NULL,
    "idmodalidade" INTEGER NOT NULL,

    CONSTRAINT "tb_exercicios_modalidades_pkey" PRIMARY KEY ("idexercicio","idmodalidade")
);

-- AddForeignKey
ALTER TABLE "tb_sub_grupos_musculares" ADD CONSTRAINT "tb_sub_grupos_musculares_idgrupomuscular_fkey" FOREIGN KEY ("idgrupomuscular") REFERENCES "tb_grupos_musculares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_exercicios_sub_grupos_musculares" ADD CONSTRAINT "tb_exercicios_sub_grupos_musculares_idexercicio_fkey" FOREIGN KEY ("idexercicio") REFERENCES "tb_exercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_exercicios_sub_grupos_musculares" ADD CONSTRAINT "tb_exercicios_sub_grupos_musculares_idsubgrupomuscular_fkey" FOREIGN KEY ("idsubgrupomuscular") REFERENCES "tb_sub_grupos_musculares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_exercicios_modalidades" ADD CONSTRAINT "tb_exercicios_modalidades_idexercicio_fkey" FOREIGN KEY ("idexercicio") REFERENCES "tb_exercicios"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "tb_exercicios_modalidades" ADD CONSTRAINT "tb_exercicios_modalidades_idmodalidade_fkey" FOREIGN KEY ("idmodalidade") REFERENCES "tb_modalidades"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
