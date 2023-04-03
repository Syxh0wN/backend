import "express-async-errors";
import express from "express";
import cors from "cors";

import { handleError } from "./errors/handleErrors";

export const app = express();

app.use(cors());
app.use(express.json());

app.use(handleError);
