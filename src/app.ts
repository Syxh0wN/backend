import "express-async-errors";
import express from "express";
import cors from "cors";

import { handleError } from "./errors/handleErrors";
import { userRoutes } from "./routes/user/routes";
import { loginRoutes } from "./routes/login/routes";
import { contactRouters } from "./routes/contact/routes";

export const app = express();

app.use(cors());
app.use(express.json());

app.use("/user", userRoutes);
app.use("/login", loginRoutes);
app.use("/contact", contactRouters);

app.use(handleError);
