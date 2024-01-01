import mongoose from "mongoose";
import Time_slots from "./models/Time_slots.js";
import Appointments from "./models/Appointments.js";
import express from "express";
import cors from "cors";

const app = express();
const PORT = 3001;
app.use(express.json());
app.use(cors());

try {
  await mongoose.connect(
    "mongodb://aazainsoomro:muhammad234@ac-oqmbtee-shard-00-00.pzn2wcq.mongodb.net:27017,ac-oqmbtee-shard-00-01.pzn2wcq.mongodb.net:27017,ac-oqmbtee-shard-00-02.pzn2wcq.mongodb.net:27017/appointment-database?ssl=true&replicaSet=atlas-czz53f-shard-0&authSource=admin&retryWrites=true&w=majority"
  );
  app.listen(3001, () => {
    "listening...";
  });
  console.log("connected");
} catch (e) {
  console.log(e);
}

//post new time slot

app.post("/new-timeSlot", async (req, res) => {
  const { startTime, endTime, isBooked } = req.body;

  const timeslot = await Time_slots.create({
    startTime: startTime,
    endTime: endTime,
    isBooked: isBooked,
  });
  res.json({ timeslot });
});

// get timeslot

app.get("/timeslots", async (req, res) => {
  const timeSlots = await Time_slots.find();
  res.json({ timeSlots });
});

// post appointment

app.post("/new-appointment", async (req, res) => {
  const { slotId, name, email } = req.body;

  const timeslot = await Time_slots.create({
    slotId: slotId,
    name: name,
    email: email,
  });
  res.json({ timeslot });
});

// get appointment

app.get("/appointments", async (req, res) => {
  const appointments = await Appointments.find();
  res.json({ appointments });
});
