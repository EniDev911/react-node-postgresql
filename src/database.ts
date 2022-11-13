import {Pool} from 'pg';

export const pool = new Pool({
    user: "marco911",
    password: "marco911",
    database: "characters-starwars-api",
    host: "localhost"
});

