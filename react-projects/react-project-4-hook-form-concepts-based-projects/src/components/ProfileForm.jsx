// src/components/ProfileForm.jsx
import React from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { profileSchema } from "../utils/validationSchema";
import InputField from "./InputField";
import SelectField from "./SelectField";

const ProfileForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(profileSchema),
    defaultValues: {
      name: "Tanish",
      email: "tanish@example.com",
      age: 21,
      gender: "Male",
      bio: "",
      password: "",
      skill: "React",
    },
  });

  const gender = watch("gender");
  const name = watch("name");
  const email = watch("email");

  const onSubmit = async (data) => {
    console.log("✅ Submitted Data:", data);
    alert("Form submitted successfully!");
    reset();
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h1 className="text-2xl font-bold mb-6 text-center">
        User Profile Form
      </h1>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <InputField
          label="Full Name"
          name="name"
          register={register}
          errors={errors}
        />

        <InputField
          label="Email Address"
          name="email"
          register={register}
          errors={errors}
        />

        <InputField
          label="Password"
          type="password"
          name="password"
          register={register}
          errors={errors}
        />

        <InputField
          label="Age"
          type="number"
          name="age"
          register={register}
          errors={errors}
        />

        <SelectField
          label="Gender"
          name="gender"
          options={["Male", "Female", "Other"]}
          register={register}
          errors={errors}
        />

        {gender === "Other" && (
          <InputField
            label="Specify Gender"
            name="customGender"
            register={register}
            errors={errors}
            rules={{ required: "Please specify gender" }}
          />
        )}

        <div className="flex flex-col">
          <label className="font-medium mb-1">Skills</label>
          <Controller
            name="skill"
            control={control}
            render={({ field }) => (
              <select
                {...field}
                className="border rounded-lg p-2 focus:ring-2 focus:ring-blue-400"
              >
                <option value="React">React</option>
                <option value="Node.js">Node.js</option>
                <option value="MongoDB">MongoDB</option>
              </select>
            )}
          />
        </div>

        <div className="flex flex-col">
          <label className="font-medium mb-1">Bio</label>
          <textarea
            {...register("bio")}
            className="border rounded-lg p-2 h-24 focus:ring-2 focus:ring-blue-400"
          />
          {errors.bio && (
            <p className="text-red-500 text-sm mt-1">{errors.bio.message}</p>
          )}
        </div>

        <div className="flex justify-between mt-6">
          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
          >
            {isSubmitting ? "Submitting..." : "Submit"}
          </button>
          <button
            type="button"
            onClick={() => reset()}
            className="bg-gray-200 px-4 py-2 rounded-lg hover:bg-gray-300"
          >
            Reset
          </button>
        </div>
      </form>

      {/* Watch Preview */}
      <div className="mt-6 bg-gray-50 p-4 rounded-lg">
        <h2 className="font-semibold mb-2">Live Preview</h2>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
      </div>
    </div>
  );
};

export default ProfileForm;
