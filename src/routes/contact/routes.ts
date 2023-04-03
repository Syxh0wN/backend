import { Router } from "express";
import { authValidationMiddleware } from "../../middlewares/auth";
import { validateSchemaMiddleware } from "../../middlewares/validated";
import {
  schemaCreateContact,
  schemaUpdateContact,
} from "../../schemas/contact";
import { addContactController } from "../../controllers/contact/create";
import { listmyContactsUserController } from "../../controllers/contact/show";
import { updateContactController } from "../../controllers/contact/update";
import { removeContactController } from "../../controllers/contact/delete";

export const contactRouters = Router();

contactRouters.post(
  "",
  authValidationMiddleware,
  validateSchemaMiddleware(schemaCreateContact),
  addContactController
);

contactRouters.get("", authValidationMiddleware, listmyContactsUserController);

contactRouters.patch(
  "/:id",
  authValidationMiddleware,
  validateSchemaMiddleware(schemaUpdateContact),
  updateContactController
);

contactRouters.delete(
  "/:id",
  authValidationMiddleware,
  removeContactController
);
