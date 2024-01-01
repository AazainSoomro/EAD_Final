import mongoose from "mongoose";

const Time_slotsSchema = new mongoose.Schema({
  startTime: { type: Number },
  endTime: { type: Number },
  isBooked: { type: Boolean },
});

const Time_slots = mongoose.model("Time_slots", Time_slotsSchema);

export default Time_slots;
