import { Router } from "express";
import { validateSchemaMiddleware } from "../../middlewares/validated";
import { userRegisterValidation, userValidationPatch } from "../../schemas";
import { createUserController } from "../../controllers/user/create";
import { authValidationMiddleware } from "../../middlewares/auth";
import {
  getOneUserController,
  showUserController,
} from "../../controllers/user/show";
import { updateUserController } from "../../controllers/user/update";
import { removeUserController } from "../../controllers/user/delete";

export const userRoutes = Router();

userRoutes.post(
  "",
  validateSchemaMiddleware(userRegisterValidation),
  createUserController
);

userRoutes.get("", authValidationMiddleware, showUserController);

userRoutes.get("/:id", authValidationMiddleware, getOneUserController);

userRoutes.patch(
  "/:id",
  validateSchemaMiddleware(userValidationPatch),
  authValidationMiddleware,
  updateUserController
);

userRoutes.delete("/:id", authValidationMiddleware, removeUserController);
