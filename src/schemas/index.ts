import * as yup from "yup";

export const userRegisterValidation: any = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
});

export const userValidationPatch = yup.object().shape({
  name: yup.string().required(),
  email: yup.string().email().required(),
  password: yup.string().required(),
  phone: yup.string().required(),
});

export const loginValidation = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});
