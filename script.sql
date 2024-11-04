CREATE SCHEMA IF NOT EXISTS `conte_comigo` DEFAULT CHARACTER SET utf8 ;
USE `conte_comigo` ;

CREATE TABLE IF NOT EXISTS `conte_comigo`.`usuario`
(
    `user_id`    INT PRIMARY KEY AUTO_INCREMENT,
    `user_nome`  VARCHAR(60)  NULL,
    `user_email` VARCHAR(256) NULL,
    `user_senha` VARCHAR(256) NULL,
    UNIQUE INDEX (`user_email`)
);

CREATE TABLE IF NOT EXISTS `conte_comigo`.`historia`
(
    his_id          INT PRIMARY KEY AUTO_INCREMENT,
    his_titulo      VARCHAR(96) NOT NULL,
    his_sinopse     VARCHAR(255),
    his_descricao   VARCHAR(255),
    his_enredo      VARCHAR(255),
    his_user_fk     INT NOT NULL,
CONSTRAINT FOREIGN KEY (`his_user_fk`) REFERENCES `conte_comigo`.`usuario` (`user_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);

CREATE TABLE IF NOT EXISTS `conte_comigo`.`cenario`
(
    cen_id          INT PRIMARY KEY AUTO_INCREMENT,
    cen_cultura     VARCHAR(255),
    cen_descricao   VARCHAR(255),
    cen_fauna       VARCHAR(255),
    cen_his_fk      INT NOT NULL,
CONSTRAINT FOREIGN KEY (`cen_his_fk`) REFERENCES `conte_comigo`.`historia` (`his_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION

);

CREATE TABLE IF NOT EXISTS `conte_comigo`.`personagem`
(
    pers_id INT PRIMARY KEY AUTO_INCREMENT,
    pers_nome           VARCHAR(96) NOT NULL,
    pers_personalidade  VARCHAR(64),
    pers_idade          SMALLINT,
    pers_aparencia      VARCHAR(255),
    pers_sonhos         VARCHAR(255),
    pers_defeitos       VARCHAR(255),
    pers_his_fk         INT,
CONSTRAINT FOREIGN KEY (`pers_his_fk`) REFERENCES `conte_comigo`.`historia` (`his_id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION
);