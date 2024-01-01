import React from "react";

const dummyDataTimeSlot = [
  { startTime: "4:00", endTime: "7:00" },
  { startTime: "3:00", endTime: "1:00" },
  { startTime: "6:00", endTime: "3:00" },
];

function AvailableTimeSlot({ setCurStartTS, setCurEndTS }) {
  return (
    <div>
      <div>
        <h1 className="text-4xl ">Available Time Slots</h1>

        <div>
          {dummyDataTimeSlot.map((item) => (
            <div className="text-4xl">
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
