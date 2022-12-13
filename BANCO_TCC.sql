CREATE DATABASE `sistema_tcc`;
USE `sistema_tcc` ;

CREATE TABLE `modalidades` (
  `modalidades_id` INT NOT NULL AUTO_INCREMENT,
  `tipo` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`modalidades_id`)
);

CREATE TABLE `curso` (
  `curso_id` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `quantidades_periodos` INT NOT NULL,
  `tipos_periodos` INT NOT NULL,
  `modalidades_id` INT NOT NULL,
  PRIMARY KEY (`curso_id`),
    FOREIGN KEY (`modalidades_id`)
    REFERENCES `modalidades`(`modalidades_id`)
);

CREATE TABLE `telefones` (
  `telefones_id` INT NOT NULL AUTO_INCREMENT,
  `numero` INT NOT NULL,
  PRIMARY KEY (`telefones_id`)
  );

CREATE TABLE `aluno` (
  `aluno_id` INT NOT NULL AUTO_INCREMENT,
  `aluno_matricula` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `ano_ingresso` DATE NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `endereco` VARCHAR(45) NOT NULL,
  `telefones` VARCHAR(45) NOT NULL,
  `curso_id` INT NOT NULL,
  `telefones_id` INT NOT NULL,
  PRIMARY KEY (`aluno_id`),
    FOREIGN KEY (`curso_id`)
    REFERENCES `curso` (`curso_id`),
    FOREIGN KEY (`telefones_id`)
    REFERENCES `telefones` (`telefones_id`)
);


CREATE TABLE `TCC` (
  `idTCC` INT NOT NULL,
  `titulo` VARCHAR(45) NOT NULL,
  `resumo` VARCHAR(45) NOT NULL,
  `palavras_chave` VARCHAR(45) NOT NULL,
  `link_documento` VARCHAR(45) NOT NULL,
  `aluno_id` INT NOT NULL,
  `professor_matricula` INT NOT NULL,
  PRIMARY KEY (`idTCC`),
    FOREIGN KEY (`aluno_id`)
    REFERENCES `aluno` (`aluno_id`)
);

CREATE TABLE `professor` (
  `professor_matricula` INT NOT NULL,
  `nome` VARCHAR(60) NOT NULL,
  `telefone` INT NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `titulacoes` INT NOT NULL,
  `areas_atuacao` VARCHAR(45) NOT NULL,
  `idTCC` INT NOT NULL,
  PRIMARY KEY (`idTCC`),
  FOREIGN KEY (`idTCC`)
    REFERENCES `TCC` (`idTCC`)
);


CREATE TABLE `turnos` (
  `turnos_id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(10) NOT NULL,
  `curso_id` INT NOT NULL,
  PRIMARY KEY (`turnos_id`),
    FOREIGN KEY (`curso_id`)
    REFERENCES `curso` (`curso_id`)
);

CREATE USER 'grupo'@'localhost' IDENTIFIED BY '12345678';

GRANT ALL PRIVILEGES ON *.* TO
'grupo'@'localhost';

FLUSH PRIVILEGES;
