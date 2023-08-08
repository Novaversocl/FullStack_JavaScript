-- Parte 1: Crear entorno de trabajo

-- - Crear una base de datos
CREATE DATABASE basededatos;

-- - Crear un usuario con todos los privilegios para trabajar con la base de datos recién creada UTILIZANDO Mysql Shell.
CREATE USER 'usuario'@'localhost' IDENTIFIED BY 'usuario';
GRANT ALL PRIVILEGES ON basededatos.* TO 'usuario'@'localhost';
SELECT User, Host FROM mysql.user;

-- Parte 2: Crear tres tablas.

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


-- Parte 3: Creación de registros.
-- - Para cada tabla cree 8 registros.

INSERT INTO usuario (id_usuario, nombre, apellido, contrasena, zona_horaria, genero, telefono_contacto)
VALUES
(1, 'Juan', 'Pérez', '123456', 'UTC-3', 'Masculino', '1234567890'),
(2, 'María', 'González', 'abcdef', 'UTC-3', 'Femenino', '9876543210'),
(3, 'Carlos', 'López', 'qwerty', 'UTC-3', 'Masculino', '4567890123'),
(4, 'Ana', 'Rodríguez', 'zxcvbn', 'UTC-3', 'Femenino', '0123456789'),
(5, 'Pedro', 'Sánchez', 'asdfgh', 'UTC-3', 'Masculino', '9870123456'),
(6, 'Laura', 'Martínez', 'poiuyt', 'UTC-3', 'Femenino', '6549870123'),
(7, 'Miguel', 'Hernández', 'lkjhgf', 'UTC-3', 'Masculino', '1230123456'),
(8, 'Sofía', 'López', 'mnbvcx', 'UTC-3', 'Femenino', '7894560123');


INSERT INTO ingreso (id_ingreso, id_usuario, fecha_ingreso)
VALUES
(1, 1, CURRENT_TIMESTAMP),
(2, 2, CURRENT_TIMESTAMP),
(3, 3, CURRENT_TIMESTAMP),
(4, 1, CURRENT_TIMESTAMP),
(5, 4, CURRENT_TIMESTAMP),
(6, 2, CURRENT_TIMESTAMP),
(7, 5, CURRENT_TIMESTAMP),
(8, 3, CURRENT_TIMESTAMP);


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

-- Parte 4: Elimine una de las tablas creadas.
TRUNCATE TABLE visita;
drop TABLE visita;



