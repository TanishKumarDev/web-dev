// File: /src/components/RegisterForm.jsx

import React from "react";
import { useForm } from "react-hook-form";

const RegisterForm = ({ onSubmit }) => {
  // Initialize the form
  const {
    register,            // for registering inputs
    handleSubmit,        // function to wrap submit
    watch,                // for watching field values
    reset,                // to reset form
    formState: { errors, isSubmitting }  // errors & submission state
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: ""
    }
  });

  // Function called when form is valid
  const submitHandler = (data) => {
    // data contains values of all registered fields
    console.log("Validated Data:", data);
    onSubmit(data);
    reset();  // reset form after submit
  };

  return (
    <form onSubmit={handleSubmit(submitHandler)} className="space-y-4">
      <div>
        <label className="block mb-1">First Name</label>
        <input
          {...register("firstName", { required: "First name is required" })}
          className="border rounded p-2 w-full"
        />
        {errors.firstName && (
          <p className="text-red-500 text-sm">{errors.firstName.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Email</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Invalid email address"
            }
          })}
          className="border rounded p-2 w-full"
        />
        {errors.email && (
          <p className="text-red-500 text-sm">{errors.email.message}</p>
        )}
      </div>

      <div>
        <label className="block mb-1">Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            minLength: { value: 6, message: "Minimum length is 6" }
          })}
          className="border rounded p-2 w-full"
        />
        {errors.password && (
          <p className="text-red-500 text-sm">{errors.password.message}</p>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white px-4 py-2 rounded"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
};

export default RegisterForm;
