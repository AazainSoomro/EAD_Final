import { Formik } from "formik";
import AvailableTimeSlot from "./components/AvailableTimeSlot";
import BookTimeSLot from "./components/BookTimeSLot";
import TimeSlotForm from "./components/TimeSlotForm";
import CreateTimeSlot from "./components/CreateTimeSlot";
import { Router, Routes } from "react-router-dom";

function App() {
  return (
    <div className="">
      <CreateTimeSlot />
    </div>
  );
}

export default App;
