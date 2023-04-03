import * as yup from "yup";

export const userRegisterValidation: any = yup.object().shape({
  name: yup
    .string()
    .max(100, "Devem conter no máximo 100 caracteres")
    .required("Deve conter o nome completo"),
  email: yup.string().email("Email inválido").required("Deve conter um email"),
  password: yup.string().required("Deve conter uma senha"),
  phone: yup
    .string()
    .min(12, "Deve conter no minimo 12 caracteres")
    .max(14, "Deve conter no máximo 14 caracteres")
    .required("Deve conter um telefone"),
});

export const userValidationPatch = yup.object().shape({
  name: yup
    .string()
    .max(100, "Devem conter no máximo 100 caracteres")
    .required("Deve conter o nome completo"),
  email: yup.string().email("Email inválido").required("Deve conter um email"),
  password: yup.string().required("Deve conter uma senha"),
  phone: yup
    .string()
    .min(12, "Deve conter no minimo 12 caracteres")
    .max(14, "Deve conter no máximo 14 caracteres")
    .required("Deve conter um telefone"),
});

export const loginValidation = yup.object().shape({
  email: yup.string().email("Email inválido").required("Deve conter um email"),
  password: yup.string().required("Deve conter uma senha"),
});
