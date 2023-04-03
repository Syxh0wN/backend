import { DataSource } from "typeorm";
import "dotenv/config";
import { Users } from "./entities/user";
import { Contact } from "./entities/contact";
import { hash1680543119227 } from "../migrations/1680543119227-hash";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [Users, Contact],
  migrations: [hash1680543119227],
});
