import * as yup from "yup";

export const schemaCreateContact = yup.object().shape({
  name: yup.string().max(100).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(12).max(14).required(),
});

export const schemaUpdateContact = yup.object().shape({
  name: yup.string().max(100).required(),
  email: yup.string().email().required(),
  phone: yup.string().min(12).max(14).required(),
});
