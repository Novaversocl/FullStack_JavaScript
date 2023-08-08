-- - Crear una base de datos-----------------------------------------------------------------
CREATE DATABASE ABPro_Ejercicio_Grupal_4

-- - Crear un usuario con todos los privilegios para trabajar con la base de datos recién creada.
CREATE USER 'usuario_Grupal_4'@'localhost' IDENTIFIED BY 'usuario_Grupal_4';
GRANT ALL PRIVILEGES ON ABPro_Ejercicio_Grupal_4.* TO 'usuario_Grupal_4'@'localhost';

-- verificar el usuario
SELECT User, Host FROM mysql.user;
SHOW GRANTS FOR 'usuario_Grupal_4'@'localhost';

-- Creación tablas ---------------------------------------------------------------------------
CREATE TABLE usuario (
  id INT PRIMARY KEY,
  nombre VARCHAR(75) NOT NULL,
  correo VARCHAR(40) NOT NULL
);

SELECT * FROM usuario;

-- Creación de la tabla Cuenta
CREATE TABLE cuenta (
  id INT PRIMARY KEY,
  saldo INT NOT NULL CHECK (saldo >= 0),
  id_usuario INT NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES usuario(id)
);

SELECT * FROM cuenta;


-- Creación de la tabla Transacción
CREATE TABLE transaccion (
  id INT AUTO_INCREMENT PRIMARY KEY,
  fecha DATETIME DEFAULT CURRENT_TIMESTAMP,
  monto INT NOT NULL,
  id_cuenta INT NOT NULL,
  FOREIGN KEY (id_cuenta) REFERENCES cuenta(id)
);

SELECT * FROM transaccion;

-- ------------------------------------------------------------------------------------------

-- insertar registros a los usuarios antes de las trx

START TRANSACTION;
-- Insertar registros en la tabla "usuario"
INSERT INTO usuario (id, nombre, correo) VALUES
(1, 'usuario_a_id_1', 'correo_a@example.com'),
(2, 'usuario_b_id_2', 'correo_b@example.com'),
(3, 'usuario_c_id_3', 'correo_c@example.com'),
(4, 'usuario_d_id_4', 'correo_d@example.com');

COMMIT;

SELECT * FROM usuario;

-- Antes de tranferir se debe ingresar los saldos iniciales 
-- Insertar registros en la tabla "cuenta" con saldo inicial de 1000

START TRANSACTION;
INSERT INTO cuenta (id, saldo, id_usuario)
VALUES 
    (1, 1000, 1), -- Cuenta 1 con saldo inicial de 1000 para el usuario 1
    (2, 1000, 2), -- Cuenta 2 con saldo inicial de 1000 para el usuario 2
    (3, 1000, 3), -- Cuenta 3 con saldo inicial de 1000 para el usuario 3
    (4, 1000, 4); -- Cuenta 4 con saldo inicial de 1000 para el usuario 4

COMMIT;

SELECT * FROM cuenta;



-- - Transfiera 200 TLV Coins desde un usuario A un usuario B.

START TRANSACTION;
-- Verificar saldo en la cuenta de origen (usuario A)
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 1 and cuenta.saldo > 0;

-- Verificar si la cuenta de destino (usuario B) existe
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 2 and cuenta.saldo > 0;

-- Actualizar saldo en la cuenta de origen (usuario A)
UPDATE cuenta SET saldo = saldo - 200 WHERE id_usuario = 1;

-- Registrar la transacción de usuario A
INSERT INTO transaccion (monto, id_cuenta) VALUES (-200, 1);

-- Actualizar saldo en la cuenta de destino (usuario B)
UPDATE cuenta SET saldo = saldo + 200 WHERE id_usuario = 2;

-- Registrar la transacción de usuario B
INSERT INTO transaccion (monto, id_cuenta) VALUES (200, 2);

-- Verificar que se haya actualizado la cuenta de origen
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 1 and cuenta.saldo > 0;

-- Verificar que se haya modificado la cuenta de destino
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 2 and cuenta.saldo > 0;

ROLLBACK;




-- - Transfiera 150 TLV Coins desde un usuario B un usuario C.

START TRANSACTION;
-- Verificar saldo en la cuenta de origen (usuario B)
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 2 and cuenta.saldo > 0;

-- Verificar si la cuenta de destino (usuario C) existe
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 3 and cuenta.saldo > 0;

-- Actualizar saldo en la cuenta de origen (usuario B)
UPDATE cuenta SET saldo = saldo - 150 WHERE id_usuario = 2;

-- Registrar la transacción de usuario B
INSERT INTO transaccion (monto, id_cuenta) VALUES (-150, 2);

-- Actualizar saldo en la cuenta de destino (usuario C)
UPDATE cuenta SET saldo = saldo + 150 WHERE id_usuario = 3;

-- Registrar la transacción de usuario C
INSERT INTO transaccion (monto, id_cuenta) VALUES (150, 3);

-- Verificar que se haya actualizado la cuenta de origen
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 2 and cuenta.saldo > 0;

-- Verificar que se haya modificado la cuenta de destino
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 3 and cuenta.saldo > 0;

ROLLBACK;



-- - Transfiera 500 TLV Coins desde un usuario C un usuario D.  TEST OK


START TRANSACTION;
-- Verificar saldo en la cuenta de origen (usuario C)
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 3 and cuenta.saldo > 0;

-- Verificar si la cuenta de destino (usuario D) existe
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 4 and cuenta.saldo > 0;

-- Actualizar saldo en la cuenta de origen (usuario C)
UPDATE cuenta SET saldo = saldo - 500 WHERE id_usuario = 3;

-- Registrar la transacción de usuario C
INSERT INTO transaccion (monto, id_cuenta) VALUES (-500, 3);

-- Actualizar saldo en la cuenta de destino (usuario D)
UPDATE cuenta SET saldo = saldo + 500 WHERE id_usuario = 4;

-- Registrar la transacción de usuario D
INSERT INTO transaccion (monto, id_cuenta) VALUES (500, 4);

-- Verificar que se haya actualizado la cuenta de origen
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 3 and cuenta.saldo > 0;

-- Verificar que se haya modificado la cuenta de destino
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 4 and cuenta.saldo > 0;

COMMIT;





-- - Transfiera 200 TLV Coins desde un usuario D un usuario A.-  TEST OK

START TRANSACTION;
-- Verificar saldo en la cuenta de origen (usuario D)
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 4 and cuenta.saldo > 0;

-- Verificar si la cuenta de destino (usuario A) existe
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 1 and cuenta.saldo > 0;

-- Actualizar saldo en la cuenta de origen (usuario D)
UPDATE cuenta SET saldo = saldo - 200 WHERE id_usuario = 4;

-- Registrar la transacción de usuario D
INSERT INTO transaccion (monto, id_cuenta) VALUES (-200, 4);

-- Actualizar saldo en la cuenta de destino (usuario A)
UPDATE cuenta SET saldo = saldo + 200 WHERE id_usuario = 1;

-- Registrar la transacción de usuario A
INSERT INTO transaccion (monto, id_cuenta) VALUES (200, 1);

-- Verificar que se haya actualizado la cuenta de origen
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 4 and cuenta.saldo > 0;

-- Verificar que se haya modificado la cuenta de destino
SELECT usuario.nombre, cuenta.saldo 
FROM usuario
INNER JOIN cuenta ON cuenta.id_usuario = usuario.id
WHERE usuario.id = 1 and cuenta.saldo > 0;

COMMIT;





-- Historial Trx 

START TRANSACTION;
SELECT transaccion.id, transaccion.fecha, transaccion.monto, transaccion.id_cuenta, usuario.nombre as nombre_usuario
FROM transaccion 
INNER JOIN cuenta ON transaccion.id_cuenta = cuenta.id
INNER JOIN usuario ON cuenta.id_usuario = usuario.id ORDER BY transaccion.fecha  asc;
COMMIT;








