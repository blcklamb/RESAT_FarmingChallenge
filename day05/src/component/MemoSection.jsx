import React, { useState } from "react";
import MemoItem from "./MemoItem";

function MemoSection({ date, memoList, refetchFunc }) {
  const [todo, setTodo] = useState("");
  const onChangeTodo = (event) => {
    setTodo(event.target.value);
  };

  const onClickSendButton = async () => {
    await postTodo();
    await refetchFunc();
  };

  const postTodo = async () => {
    const data = {
      id: Date.now(),
      date: date.getTime(),
      memo: todo,
    };
    await fetch(`${process.env.REACT_APP_ENDPOINT}/memos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setTodo("");
    });
    await refetchFunc();
  };
  return (
    <div className="memo-section mx-auto w-full">
      <div className="memo-section-header flex justify-center align-center">
        {date.toDateString()}
      </div>
      <div>
        <ul>
          {memoList.map((ele) => {
            return (
              <MemoItem key={ele.id} singleItem={ele} refetch={refetchFunc} />
            );
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
