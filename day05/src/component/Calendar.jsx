import React, { useState, useEffect } from "react";
import ReactCalendar from "react-calendar";
import convertMMDDYYYY from "../util/convertFunc";
import MemoSection from "./MemoSection";
// css import

function Calendar() {
  const [value, onChange] = useState(new Date());
  const [memo, setMemo] = useState([]);
  const [selectedMemo, setSelectedMemo] = useState([]);
  const [refetch, setRefetch] = useState(true);

  const triggerRefetch = () => {
    setRefetch(true);
  };

  const fetchMemos = async () => {
    const data = await fetch(
      `${
        process.env.NODE_ENV !== "production"
          ? "http://localhost:80"
          : process.env.REACT_APP_ENDPOINT
      }/memos`
    ).then((res) => res.json());
    setMemo(data);
  };

  const findMemoByDate = (date, memos) => {
    if (memos.length > 0) {
      const filteredMemo = memos.filter(
        (ele) => convertMMDDYYYY(ele.date) === convertMMDDYYYY(date)
      );
      console.log(filteredMemo.map((ele) => ele.memoList).flat());
      if (filteredMemo.length > 0) {
        return filteredMemo.map((ele) => ele.memoList).flat();
      }
    }
  };

  useEffect(() => {
    const selectedMemoByDate = findMemoByDate(value, memo);
    if (selectedMemoByDate) {
      setSelectedMemo(selectedMemoByDate);
    } else {
      setSelectedMemo([]);
    }
  }, [memo, value]);

  useEffect(() => {
    if (refetch) {
      fetchMemos();
      setRefetch(false);
    }
  }, [refetch]);

  return (
    <div>
      <ReactCalendar
        onChange={onChange}
        value={value}
        locale="en-EN"
        className="mx-auto w-full text-sm border-b"
        tileContent={({ date, view }) => {
          if (
            memo.find((x) => convertMMDDYYYY(x.date) === convertMMDDYYYY(date))
          ) {
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
      <MemoSection
        date={value}
        memoList={selectedMemo}
        refetchFunc={triggerRefetch}
      ></MemoSection>
    </div>
  );
}

export default Calendar;
