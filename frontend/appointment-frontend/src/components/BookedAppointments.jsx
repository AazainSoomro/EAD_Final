import React from "react";
import { useState, useEffect } from "react";

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
  const [AllAppointments, setAllAppointments] = useState();

  useEffect(() => {
    const getAppointment = async () => {
      const data = await fetch("http://localhost:3001/appointments", {});
      const appointmentData = await data.json();
      console.log(appointmentData.appointment);
      setAllAppointments(appointmentData.appointment);
    };

    getAppointment();
  }, []);

  //   return (
  //     <div>
  //       <h1>Booked Appointments</h1>
  //       {dummyData.map((item) => (
  //         <div>
  //           <div>
  //             <h1>{item.name}</h1>
  //             <h1>{item.email}</h1>
  //           </div>
  //           <h1>
  //             {item.startTime} - {item.endTime}
  //           </h1>
  //           <button>book</button>
  //         </div>
  //       ))}
  //     </div>
  //   );

  return (
    <div>
      <h1>Booked Appointments</h1>
      {AllAppointments.map((item) => (
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
