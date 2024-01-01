import React from "react";

const dummyData = [
  {
    startTime: "4:00",
    endTime: "7:00",
    name: "Aazain",
    email: "asdasdsd@gmail.com",
  },
  {
    startTime: "3:00",
    endTime: "1:00",
    name: "Aazain",
    email: "asdasdsd@gmail.com",
  },
  {
    startTime: "6:00",
    endTime: "3:00",
    name: "Aazain",
    email: "asdasdsd@gmail.com",
  },
];

function BookedAppointments() {
  return (
    <div>
      <h1>Booked Appointments</h1>
      {dummyData.map((item) => (
        <div>
          <div>
            <h1>{item.name}</h1>
            <h1>{item.email}</h1>
          </div>
          <h1>
            {item.startTime} - {item.endTime}
          </h1>
          <button>book</button>
        </div>
      ))}
    </div>
  );
}

export default BookedAppointments;
