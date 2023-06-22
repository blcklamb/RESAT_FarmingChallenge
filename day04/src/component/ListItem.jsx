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

function ListItem({ singleItem }) {
  const [isEditting, setIsEditting] = useState(false);
  const [isDone, setIsDone] = useState(singleItem.done);

  const priorityToColor = (priority) => {
    return Object.entries(colorMapping).filter(
      (_, index) => index === 4 - priority
    )[0][1].default;
  };

  const onClickEditButton = () => {
    setIsEditting((prev) => !prev);
  };

  const onClickDeletedButton = () => {
    window.confirm("정말 삭제할거예요?");
  };

  const onClickCheckedButton = () => {
    setIsDone((prev) => !prev);
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
                  onClick={() => onClickEditButton()}
                >
                  <CheckIcon />
                </IconButton>
                <IconButton
                  edge="end"
                  aria-label="confirm"
                  onClick={() => onClickEditButton()}
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
            defaultValue={singleItem.content}
            sx={{ width: "100%" }}
          />
        )}
        {!isEditting && <ListItemText primary={singleItem.content} />}
      </MUIListItem>
    </>
  );
}

export default ListItem;
