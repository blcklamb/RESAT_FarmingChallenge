import React, { useState } from "react";
import MUIListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { colorMapping } from "./Input";
import TextField from "@mui/material/TextField";

import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

function ListItem({ singleItem, refetch }) {
  const [isEditting, setIsEditting] = useState(false);
  const [isDone, setIsDone] = useState(singleItem.done);
  const [postData, setPostData] = useState(singleItem.content);

  const priorityToColor = (priority) => {
    return Object.entries(colorMapping).filter(
      (_, index) => index === priority
    )[0][1].default;
  };

  const onClickEditButton = () => {
    setIsEditting(true);
  };

  const onClickDeletedButton = () => {
    if (window.confirm("정말 삭제할거예요?")) {
      deleteTodo();
      refetch();
    }
  };

  const onClickCheckedButton = async () => {
    await setIsDone((prev) => !prev);
    await updateTodoChecked();
    await refetch();
  };

  const onClickEditConfirmButton = () => {
    updateTodoChecked();
    refetch();
  };

  const onEditTodo = (event) => {
    setPostData(event.target.value);
  };

  const onClickCancelButton = () => {
    setIsEditting(false);
  };

  const deleteTodo = async () => {
    await fetch(`${process.env.REACT_APP_ENDPOINT}/posts` + singleItem.id, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    }).then((res) => res.json());
  };

  const updateTodoChecked = async () => {
    const edittedData = {
      id: singleItem.id,
      content: postData,
      priority: singleItem.priority,
      done: !isDone,
    };
    await fetch(`${process.env.REACT_APP_ENDPOINT}/posts` + singleItem.id, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(edittedData),
    })
      .then((res) => res.json())
      .then(() => {
        setIsEditting(false);
        setIsDone(!isDone);
        setPostData(postData);
      });
  };

  return (
    <>
      <MUIListItem
        key={singleItem.id}
        secondaryAction={
          <>
            {isEditting && (
              <>
                <IconButton
                  edge="end"
                  aria-label="confirm"
                  onClick={() => onClickEditConfirmButton()}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="confirm"
                  onClick={() => onClickCancelButton()}
                >
                  <CloseIcon />
                </IconButton>
              </>
            )}
            {!isEditting && (
              <>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onClickEditButton()}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="delete"
                  onClick={() => onClickDeletedButton()}
                >
                  <DeleteIcon />
                </IconButton>
              </>
            )}
          </>
        }
      >
        <ListItemAvatar>
          <Avatar
            sx={{ backgroundColor: priorityToColor(singleItem.priority) }}
            onClick={() => onClickCheckedButton()}
          >
            {isDone && <CheckBoxIcon />}
            {!isDone && <CheckBoxOutlineBlankIcon />}
          </Avatar>
        </ListItemAvatar>
        {isEditting && (
          <TextField
            multiline
            maxRows={4}
            variant="standard"
            defaultValue={postData}
            onChange={(e) => onEditTodo(e)}
            sx={{ width: "100%" }}
          />
        )}
        {!isEditting && <ListItemText primary={postData} />}
      </MUIListItem>
    </>
  );
}

export default ListItem;
