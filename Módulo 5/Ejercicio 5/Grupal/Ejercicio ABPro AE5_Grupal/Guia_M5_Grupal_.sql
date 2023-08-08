/* Parte 1: Crear entorno de trabajo --*/
-- Crear una base de datos
CREATE DATABASE basededatos;
-- - Crear un usuario con todos los privilegios para trabajar con la base de datos recién creada UTILIZANDO Mysql Shell.
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
GRANT ALL PRIVILEGES ON basededatos.* TO 'usuario'@'localhost';
SELECT User, Host FROM mysql.user;
/*Parte 2: Crear  tablas.*/
-- - La primera almacena a los usuarios de la aplicación (id_usuario, nombre, apellido, contraseña,
-- zona horaria (por defecto UTC-3), género y teléfono de contacto).
CREATE TABLE usuario (
  id_usuario INT PRIMARY KEY,
  nombre VARCHAR(15),
  apellido VARCHAR(15),
  contrasena VARCHAR(8),
  zona_horaria VARCHAR(5) DEFAULT 'UTC-3',
  genero VARCHAR(9),
  telefono_contacto VARCHAR(12)
	
);
-- - La segunda tabla almacena información relacionada a la fecha-hora de ingreso de los usuarios a
-- la plataforma (id_ingreso, id_usuario y la fecha-hora de ingreso (por defecto la fecha-hora
-- actual)).
CREATE TABLE ingreso (
  id_ingreso INT PRIMARY KEY,
  id_usuario INT,
  fecha_ingreso DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);
-- - La tercera tabla almacena información sobre la cantidad de veces que los usuarios han visitado
-- la aplicación. Piense en una estructura de columnas que permita entregar esta información y cree
-- la tabla.
CREATE TABLE visita (
  id_ingreso INT,
  id_usuario INT,
  cantidad_visitas INT,
  FOREIGN KEY (id_ingreso) REFERENCES ingreso(id_ingreso),
  FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario)
);


/*Parte 3: Modificación de la tabla
- Modifique el UTC por defecto.Desde UTC-3 a UTC-2.
*/

ALTER TABLE usuario
ALTER COLUMN zona_horaria SET DEFAULT 'UTC-2';

/*Parte 4: Creación de registros.
- Para cada tabla crea 8 registros.*/
INSERT INTO usuario (id_usuario, nombre, apellido, contrasena, genero, telefono_contacto)
VALUES
(1, 'Juan', 'Pérez', '123456', 'Masculino', '1234567890'),
(2, 'María', 'González', 'abcdef', 'Femenino', '9876543210'),
(3, 'Carlos', 'López', 'qwerty','Masculino', '4567890123'),
(4, 'Ana', 'Rodríguez', 'zxcvbn','Femenino', '0123456789'),
(5, 'Pedro', 'Sánchez', 'asdfgh','Masculino', '9870123456'),
(6, 'Laura', 'Martínez', 'poiuyt','Femenino', '6549870123'),
(7, 'Miguel', 'Hernández', 'lkjhgf','Masculino', '1230123456'),
(8, 'Sofía', 'López', 'mnbvcx','Femenino', '7894560123');
select * from usuario;


INSERT INTO ingreso (id_ingreso, id_usuario)
VALUES
(1, 1),
(2, 2),
(3, 3),
(4, 1),
(5, 4),
(6, 2),
(7, 5),
(8, 3);

INSERT INTO visita (id_ingreso, id_usuario, cantidad_visitas)
VALUES
(1, 1, 5),
(2, 2, 3),
(3, 3, 2),
(4, 1, 1),
(5, 4, 4),
(6, 2, 2),
(7, 5, 6),
(8, 3, 3);


/*Parte 6: Creen una nueva tabla llamada Contactos (id_contacto, id_usuario, número de teléfono,
correo electrónico).*/

CREATE TABLE Contactos (

id_contacto INT AUTO_INCREMENT PRIMARY KEY,
id_usuario INT,
telefono_contacto VARCHAR(12),
mail VARCHAR(20)
)

DESCRIBE Contactos

/*Parte 7: Modifique la columna teléfono de contacto, para crear un vínculo entre la tabla Usuarios y la tabla Contactos*/

ALTER TABLE Contactos
ADD FOREIGN KEY (id_usuario) REFERENCES usuario(id_usuario);


-- ALTER TABLE `basededatos`.`usuario`ADD INDEX(`telefono_contacto`);
-- ALTER TABLE `basededatos`.`contactos` 
-- ADD CONSTRAINT `telefono_contacto` FOREIGN KEY (`telefono_contacto`) REFERENCES `basededatos`.`usuario` (`telefono_contacto`);




