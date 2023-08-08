
-- Parte 1: Crear entorno de trabajo
-- - Crear una base de datos
CREATE DATABASE ABP_Ejercicio_Individual_4

-- - Crear un usuario con todos los privilegios para trabajar con la base de datos recién creada.

CREATE USER 'usuario_Individual_4'@'localhost' IDENTIFIED BY 'usuario_Individual_4';
GRANT ALL PRIVILEGES ON ABP_Ejercicio_Individual_4.* TO 'usuario_Individual_4'@'localhost';

-- verificar el usuario
SELECT User, Host FROM mysql.user;
SHOW GRANTS FOR 'usuario_Individual_4'@'localhost';

-- Parte 2: Crear tablas.
-- Crea dos tablas en la base de datos. La primera almacena todos los usuarios sin una
-- participación activa en tu aplicación y la segunda agrupa a los usuarios que son considerados
-- especiales, debido a su alta participación en tu aplicación web.
-- Ambas tablas deben tener la siguiente información de cada usuario: id, nombre, apellido, correo
-- electrónico telefono y género

CREATE TABLE usuarios_sin_participacion_activa (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(75) NOT NULL,
  apellido VARCHAR(75) NOT NULL, -- Según explican en el Registro Civil, todos los nombres sumados a los apellidos no pueden superar los 150 caracteres
  correo_electronico VARCHAR(40) NOT NULL, -- En Gmail puede tener hasta un máximo de 30 caracteres de longitud.Esta limitación se aplica al nombre que aparece antes de la arroba (@).
  telefono VARCHAR(12) NOT NULL,
  genero VARCHAR(9) NOT NULL
);

SELECT *from usuarios_sin_participacion_activa


CREATE TABLE usuarios_especiales (
  id INT PRIMARY KEY AUTO_INCREMENT,
  nombre VARCHAR(75) NOT NULL,
  apellido VARCHAR(75) NOT NULL, -- Según explican en el Registro Civil, todos los nombres sumados a los apellidos no pueden superar los 150 caracteres
  correo_electronico VARCHAR(40) NOT NULL, -- En Gmail puede tener hasta un máximo de 30 caracteres de longitud.Esta limitación se aplica al nombre que aparece antes de la arroba (@).
  telefono VARCHAR(12) NOT NULL,
  genero VARCHAR(9) NOT NULL
);

SELECT *from usuarios_especiales



-- - La primera tabla debe tener 5 usuarios en un comienzo.

START TRANSACTION;
-- Inserción de usuarios
INSERT INTO usuarios_sin_participacion_activa (nombre, apellido, correo_electronico, telefono, genero)
VALUES ('Juan', 'Pérez', 'juanperez@gmail.com', '+56912345678', 'Masculino');

INSERT INTO usuarios_sin_participacion_activa (nombre, apellido, correo_electronico, telefono, genero)
VALUES ('María', 'Gómez', 'mariagomez@gmail.com', '+56998765432', 'Femenino');

INSERT INTO usuarios_sin_participacion_activa (nombre, apellido, correo_electronico, telefono, genero)
VALUES ('Carlos', 'Rodríguez', 'carlosrodriguez@gmail.com', '+56924681357', 'Masculino');

INSERT INTO usuarios_sin_participacion_activa (nombre, apellido, correo_electronico, telefono, genero)
VALUES ('Laura', 'Sánchez', 'laurasanchez@gmail.com', '+56913579246', 'Femenino');

INSERT INTO usuarios_sin_participacion_activa (nombre, apellido, correo_electronico, telefono, genero)
VALUES ('Pedro', 'López', 'pedrolopez@gmail.com', '+56986420937', 'Masculino');

COMMIT;


-- - La segunda tabla no debe tener usuarios.
-- ya que no pide realizar insert no se ingresa, de todas formas adicional se aplica un truncate
--  en la tabla para que nos aseguremos que no debe tener nada esto no lo pide en la guia solo fue iniciativa grupal.

START TRANSACTION;
TRUNCATE TABLE usuarios_especiales;
COMMIT;


-- - Transfiera tres usuarios desde la primera tabla a la segunda.
-- - Anule la transferencia del tercer usuario.



START TRANSACTION;
INSERT INTO usuarios_especiales (nombre, apellido, correo_electronico, telefono, genero)
SELECT nombre, apellido, correo_electronico, telefono, genero
FROM usuarios_sin_participacion_activa
ORDER BY id
LIMIT 2;
COMMIT;

START TRANSACTION;
DELETE FROM usuarios_sin_participacion_activa
ORDER BY id
LIMIT 2;
COMMIT;

START TRANSACTION;
INSERT INTO usuarios_especiales (nombre, apellido, correo_electronico, telefono, genero)
SELECT nombre, apellido, correo_electronico, telefono, genero
FROM usuarios_sin_participacion_activa
ORDER BY id
LIMIT 1;
ROLLBACK

--  -------------------------------------------------------------------------------------------
















