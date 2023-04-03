import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";
import { createLoginController } from "../../controllers/login/login";
import { loginValidation } from "../../schemas/user";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  validateSchemaMiddleware(loginValidation),
  createLoginController
);
