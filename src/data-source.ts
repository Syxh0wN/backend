import { DataSource } from "typeorm";
import "dotenv/config";
import { Users } from "./entities/user";
import { Contact } from "./entities/contact";
import { defalt1680549523118 } from "../migrations/1680549523118-defalt";

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,

  entities: [Users, Contact],
  migrations: [defalt1680549523118],
});
