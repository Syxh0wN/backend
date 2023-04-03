import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";
import { loginValidation } from "../../schemas";
import { createLoginController } from "../../controllers/login/login";

export const loginRoutes = Router();

loginRoutes.post(
  "",
  validateSchemaMiddleware(loginValidation),
  createLoginController
);
