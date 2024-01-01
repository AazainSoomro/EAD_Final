import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const AppointmentForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
    },

    onSubmit: async (values) => {
      const newAppointment = await fetch(
        "http://localhost:3001/new-appointment",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(values),
        }
      );
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-8">
        <div className="space-x-4">
          <label className="space-x-4">name</label>
          <input
            id="name"
            name="name"
            onChange={formik.handleChange}
            placeholder="name..."
          />
        </div>
        <div className="space-x-4">
          <label>End time</label>
          <input
            id="email"
            name="email"
            onChange={formik.handleChange}
            placeholder="email..."
          />
        </div>
      </div>
      <button className="bg-indigo-700" type="submit">
        submit
      </button>
    </form>
  );
};

export default AppointmentForm;
