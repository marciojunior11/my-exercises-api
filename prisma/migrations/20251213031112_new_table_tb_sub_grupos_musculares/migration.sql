-- CreateTable
CREATE TABLE "tb_sub_grupos_musculares" (
    "id" SERIAL NOT NULL,
    "nome" VARCHAR(255) NOT NULL,
    "idgrupomuscular" INTEGER NOT NULL,

    CONSTRAINT "tb_sub_grupos_musculares_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tb_sub_grupos_musculares" ADD CONSTRAINT "tb_sub_grupos_musculares_idgrupomuscular_fkey" FOREIGN KEY ("idgrupomuscular") REFERENCES "tb_grupos_musculares"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
