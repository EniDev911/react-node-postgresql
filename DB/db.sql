-- GRANT ALL PRIVILEGES ON database "characters-starwars-api" to tu-usuario;
-- GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA public TO tu_usuario;
\c postgres
DROP DATABASE "characters-starwars-api";
CREATE DATABASE "characters-starwars-api";
\c characters-starwars-api

CREATE TABLE IF NOT EXISTS characters(
    id SERIAL PRIMARY KEY,
    name VARCHAR(60)
);

-- \d characters

INSERT INTO characters (name) 
VALUES
('dart vader'),
('palpatine'),
('kylo ren'),
('han solo'),
('qui-gon jinn');


SELECT * FROM characters;