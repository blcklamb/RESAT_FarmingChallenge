import React, { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import convertMMDDYYYY from "../util/convertFunc";
// css import

function Calendar() {
  const [value, onChange] = useState(new Date());
  const [mark, setMark] = useState([]);

  const fetchMemos = async () => {
    const data = await fetch(
      `${
        process.env.NODE_ENV !== "production"
          ? "http://localhost:80"
          : process.env.REACT_APP_ENDPOINT
      }/memos`
    ).then((res) => res.json());
    setMark(data);
  };

  useEffect(() => {
    fetchMemos();
  }, []);

  return (
    <div>
      <ReactCalendar
        onChange={onChange}
        value={value}
        locale="en-EN"
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (
            mark.find((x) => convertMMDDYYYY(x.date) === convertMMDDYYYY(date))
          ) {
            console.log(date);
            return (
              <div className="flex justify-center items-center">
                <div className="dot"></div>
              </div>
            );
          }
        }}
      />
      <div className="text-gray-500 mt-4">
        <span className="bold">Selected Date:</span> {value.toDateString()}
      </div>
    </div>
  );
}

export default Calendar;
