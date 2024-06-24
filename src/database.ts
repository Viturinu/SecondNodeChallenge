import {knex as setupKnex, Knex}  from "knex";
import { env } from "./env";


const config:Knex.Config = {
    client: env.DATABASE_CLIENT, // or 'better-sqlite3'
    connection:
      env.DATABASE_CLIENT === "sqlite3"
      ? {
            filename: env.DATABASE_URL
        } 
      : env.DATABASE_URL,
};

export const knex = setupKnex(config);