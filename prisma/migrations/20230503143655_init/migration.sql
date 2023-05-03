-- CreateTable
CREATE TABLE `Task` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `descricao` VARCHAR(191) NULL,
    `dataDeCadastro` DATETIME(3) NOT NULL,
    `dataDeInicio` DATETIME(3) NOT NULL,
    `status` INTEGER NOT NULL,
    `dataPrevista` DATETIME(3) NOT NULL,
    `dataDeConclusao` DATETIME(3) NOT NULL,
    `detalhes` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
