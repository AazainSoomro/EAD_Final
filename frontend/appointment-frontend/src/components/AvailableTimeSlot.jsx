import React from "react";

// const dummyDataTimeSlot = [
//   { startTime: "4:00", endTime: "7:00" },
//   { startTime: "3:00", endTime: "1:00" },
//   { startTime: "6:00", endTime: "3:00" },
// ];

function AvailableTimeSlot() {
  const [AllTimeSlots, setAllTimeSlots] = useState();

  useEffect(() => {
    const getTimeSlots = async () => {
      const data = await fetch("http://localhost:3001/timeslots", {});
      const timeSlotsData = await data.json();
      console.log(timeSlotsData.time_slots);
      setAllTimeSlots(timeSlotsData.time_slots);
    };

    getTimeSlots();
  }, []);

  return (
    <div>
      <div>
        <h1 className="text-4xl ">Available Time Slots</h1>

        <div>
          {AllTimeSlots.map((item) => (
            <div>
              <h1>
                {item.startTime} - {item.endTime}
              </h1>
              <button
                onClick={() => {
                  setCurStartTS(item.startTime), setCurEndTS(item.endTime);
                }}
              >
                Book
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AvailableTimeSlot;
