CREATE DATABASE `sistema_tcc`;
USE `sistema_tcc` ;

CREATE TABLE `modalidades` (
  `modalidades_id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`modalidades_id`)
);

CREATE TABLE `curso` (
  `curso_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(60) NOT NULL,
  `quantidades_periodos` INT NULL,
  `tipos_periodos` INT NULL,
  `modalidades_id` INT NOT NULL,
  PRIMARY KEY (`curso_id`),
    FOREIGN KEY (`modalidades_id`)
    REFERENCES `modalidades`(`modalidades_id`)
);

CREATE TABLE `telefones` (
  `telefones_id` INT NOT NULL AUTO_INCREMENT,
  `numero` INT NULL,
  PRIMARY KEY (`telefones_id`)
  );

CREATE TABLE `aluno` (
  `aluno_id` INT NOT NULL AUTO_INCREMENT,
  `aluno_matricula` INT NOT NULL,
  `nome` VARCHAR(60) NULL,
  `ano_ingresso` DATE NULL,
  `email` VARCHAR(45) NULL,
  `endereco` VARCHAR(45) NULL,
  `telefones` VARCHAR(45) NULL,
  `curso_id` INT NOT NULL,
  `telefones_id` INT NOT NULL,
  PRIMARY KEY (`aluno_id`),
  INDEX `fk_TCC_aluno` (`aluno_matricula`),
    FOREIGN KEY (`curso_id`)
    REFERENCES `curso` (`curso_id`),
    FOREIGN KEY (`telefones_id`)
    REFERENCES `telefones` (`telefones_id`)
) ENGINE = innoDB;

CREATE TABLE `TCC` (
  `idTCC` INT NOT NULL,
  `titulo` VARCHAR(45) NULL,
  `resumo` VARCHAR(45) NULL,
  `palavras_chave` VARCHAR(45) NULL,
  `link_documento` VARCHAR(45) NULL,
  `aluno_matricula` INT NOT NULL,
  `professor_matricula` INT NOT NULL,
  PRIMARY KEY (`idTCC`),
  INDEX `fk_TCC_idTCC` (`professor_matricula`),
  CONSTRAINT `fk_TCC_aluno`
    FOREIGN KEY (`aluno_matricula`)
    REFERENCES `aluno` (`aluno_matricula`)
) ENGINE = InnoDB;


CREATE TABLE `professor` (
  `professor_matricula` INT NOT NULL,
  `nome` VARCHAR(60) NULL,
  `telefone` INT NULL,
  `email` VARCHAR(45) NULL,
  `titulacoes` INT NULL,
  `areas_atuacao` VARCHAR(45) NULL,
  `TCC_idTCC` INT NOT NULL,
  PRIMARY KEY (`TCC_idTCC`),
  CONSTRAINT `fk_TCC_idTCC`
    FOREIGN KEY (`TCC_idTCC`)
    REFERENCES `TCC` (`TCC_idTCC`)
) ENGINE = InnoDB;

CREATE TABLE `turnos` (
  `turnos_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(10) NULL,
  `curso_id` VARCHAR(60) NOT NULL,
  PRIMARY KEY (`turnos_id`),
    FOREIGN KEY (`curso_id`)
    REFERENCES `curso` (`curso_id`)
);

CREATE USER 'gleison'@'localhost' IDENTIFIED
WITH mysql_native_password BY '12345678';

GRANT ALL PRIVILEGES ON *.* TO
'gleison'@'localhost';

FLUSH PRIVILEGES;