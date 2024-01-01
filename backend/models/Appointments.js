import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const AppointmentsSchema = new mongoose.Schema({
  startTime: { type: Timestamp, required: true },
  endTime: { type: Timestamp, required: true },
  isBooked: { type: Boolean, required: true },
});

const Appointments = mongoose.model("Appointments", recipeSchema);

export default Appointments;
