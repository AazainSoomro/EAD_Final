import React from "react";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";

const TimeSlotForm = () => {
  const formik = useFormik({
    initialValues: {
      startTime: 0,
      endTime: 0,
    },

    onSubmit: async (values) => {
      const newTimeSlot = await fetch("http://localhost:3001/new-TimeSlot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(values),
      });
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="space-y-8">
        <div className="space-x-4">
          <label className="space-x-4">Start time</label>
          <input
            id="startTime"
            name="startTime"
            onChange={formik.handleChange}
            placeholder="start time..."
          />
        </div>
        <div className="space-x-4">
          <label>End time</label>
          <input
            id="endTime"
            name="endTime"
            onChange={formik.handleChange}
            placeholder="end time..."
          />
        </div>
      </div>
      <button className="bg-indigo-700" type="submit">
        create slot
      </button>
    </form>
  );
};

export default TimeSlotForm;
