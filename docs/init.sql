CREATE TABLE mamifero (id SERIAL NOT NULL PRIMARY KEY ,
					 nome VARCHAR (50) NOT NULL, 
					 idade INT,
					 genero VARCHAR(12)NOT NULL, 
					 raca VARCHAR (20)  );
					 
CREATE TABLE repitil(id SERIAL NOT NULL PRIMARY KEY ,
					 nome VARCHAR(50) NOT NULL, 
					 idade INT,
					 genero VARCHAR(12)NOT NULL, 
					 tipo_de_escamas VARCHAR(50));
					 
CREATE TABLE ave (id SERIAL NOT NULL PRIMARY KEY ,
					 nome VARCHAR (50) NOT NULL, 
					 idade INT,
					 genero VARCHAR(12)NOT NULL, 
					 envergadura FLOAT);
					 
INSERT INTO mamifero (nome, idade, genero, raca)
	VALUES
('simba',2,'macho','leão'),
('timao',1,'macho','suricato'),
('pumba',10,'macho','javali');

INSERT INTO repitil (nome, idade, genero, tipo_de_escamas)
	VALUES
('zazu',2,'macho','dermica'),
('crush',1,'macho','escudos'),
('kaa',10,'macho','quiliferas');

INSERT INTO ave (nome, idade, genero, envergadura)
	VALUES
('iago',2,'macho', 20),
('scuttle',1,'macho',40);

 --SELECT * FROM mamifero;
 --SELECT * FROM ave;
 --SELECT * FROM repitil;
 
 --ALTER TABLE repitil
 --ALTER COLUMN tipo_de_escamas TYPE VARCHAR (50);