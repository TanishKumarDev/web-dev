// src/utils/validationSchema.js
import * as yup from "yup";

export const profileSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(3, "Min 3 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Invalid email format"),
  password: yup
    .string()
    .required("Password required")
    .min(6, "At least 6 characters"),
  age: yup
    .number()
    .typeError("Age must be a number")
    .positive("Must be positive")
    .integer("Must be an integer")
    .required("Age is required"),
  gender: yup.string().required("Select gender"),
  bio: yup.string().max(200, "Max 200 characters"),
});
