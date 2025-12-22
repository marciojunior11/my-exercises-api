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
CREATE TABLE "tb_modalidades" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,

    CONSTRAINT "tb_modalidades_pkey" PRIMARY KEY ("id")
);
