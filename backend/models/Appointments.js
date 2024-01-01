import mongoose from "mongoose";

const AppointmentsSchema = new mongoose.Schema({
  slotId: { type: Number, required: true },
  name: { type: String, required: true },
  email: { type: String, required: true },
});

const Appointments = mongoose.model("Appointments", AppointmentsSchema);

export default Appointments;
