import React, { useState } from "react";

function MemoSection({ date, memoList, refetchFunc }) {
  const [todo, setTodo] = useState("");
  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onClickSendButton = () => {
    postTodo();
    refetchFunc();
  };

  const postTodo = async () => {
    const data = {
      id: Date.now(),
      date: date.getTime(),
      memoList: [
        {
          id: 0,
          content: todo,
        },
      ],
    };
    await fetch(
      `${
        process.env.NODE_ENV !== "production"
          ? "http://localhost:80"
          : process.env.REACT_APP_ENDPOINT
      }/memos`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    ).then(() => {
      setTodo("");
    });
  };
  return (
    <div className="memo-section mx-auto w-full">
      <div className="memo-section-header flex justify-center align-center">
        {date.toDateString()}
      </div>
      <div>
        <ul>
          {memoList.map((ele) => {
            return <li key={ele.id}>{ele.content}</li>;
          })}
        </ul>
      </div>
      <div className="input-wrapper w-full flex justify-center align-center">
        <input value={todo} onChange={(e) => onChangeTodo(e)} />
        <button
          className="memo-add-btn w-full"
          onClick={() => onClickSendButton()}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default MemoSection;
