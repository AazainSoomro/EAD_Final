import { Timestamp } from "mongodb";
import mongoose from "mongoose";

const Time_slotsSchema = new mongoose.Schema({
  startTime: { type: Timestamp, required: true },
  endTime: { type: Timestamp, required: true },
  isBooked: { type: Boolean, required: true },
});

const Time_slots = mongoose.model("Time_slots", Time_slotsSchema);

export default Time_slots;
