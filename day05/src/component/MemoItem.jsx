import React, { useState } from "react";
import {
  RiDeleteBinLine,
  RiEdit2Line,
  RiCheckLine,
  RiCloseLine,
} from "react-icons/ri";

function MemoItem({ singleItem, refetch }) {
  const [isEditting, setIsEditting] = useState(false);
  const [todoContent, setTodoContent] = useState(singleItem.memo);

  const onChangeTodo = (event) => {
    setTodoContent(event.target.value);
  };

  const onClickEditButton = () => {
    setIsEditting(true);
  };

  const onClickDeletedButton = async () => {
    if (window.confirm("정말 삭제할거예요?")) {
      await deleteTodo();
      await refetch();
    }
  };

  const onClickEditConfirmButton = async () => {
    await updateTodo();
    await refetch();
  };

  const onClickCancelButton = () => {
    setIsEditting(false);
  };

  const deleteTodo = async () => {
    await fetch(`${process.env.REACT_APP_ENDPOINT}/memos/` + singleItem.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
    await refetch();
  };

  const updateTodo = async () => {
    const edittedData = {
      id: singleItem.id,
      date: singleItem.date,
      memo: todoContent,
    };
    await fetch(`${process.env.REACT_APP_ENDPOINT}/memos/` + singleItem.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edittedData),
    })
      .then((res) => res.json())
      .then(() => {
        setIsEditting(false);
        setTodoContent(todoContent);
      });
  };

  return (
    <li className="flex w-full items-center">
      {isEditting && (
        <>
          <input value={todoContent} onChange={(e) => onChangeTodo(e)} />
          <div className="list-btn-wrapper">
            <RiCheckLine onClick={() => onClickEditConfirmButton()} />
            <RiCloseLine onClick={() => onClickCancelButton()} />
          </div>
        </>
      )}
      {!isEditting && (
        <>
          {todoContent}
          <div>
            <div className="list-btn-wrapper">
              <RiEdit2Line onClick={() => onClickEditButton()} />
              <RiDeleteBinLine onClick={() => onClickDeletedButton()} />
            </div>
          </div>
        </>
      )}
    </li>
  );
}

export default MemoItem;
