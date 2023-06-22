import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import { Box, Grid } from "@mui/material";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import SendIcon from "@mui/icons-material/Send";

import { green, grey, orange, purple, red } from "@mui/material/colors";

import { styled } from "@mui/material/styles";

function Input({ refetch }) {
  const [priorityColor, setIsPriorityColor] = useState("grey");
  const [postContent, setPostContent] = useState("");

  const onClickPriorityColor = (priority) => {
    setIsPriorityColor(
      Object.entries(colorMapping).filter(
        (_, index) => index === priority
      )[0][0]
    );
  };

  const onChangeTodoContent = (event) => {
    setPostContent(event.target.value);
  };

  const onClickSendButton = () => {
    postTodo();
    refetch();
  };

  const postTodo = async () => {
    const data = {
      id: Date.now(),
      content: postContent,
      priority: Object.keys(colorMapping).findIndex(
        (ele) => ele === priorityColor
      ),
      done: false,
    };
    await fetch(`${process.env.REACT_APP_ENDPOINT}/posts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(() => {
      setIsPriorityColor("grey");
      setPostContent("");
    });
  };

  return (
    <Box
      container="true"
      sx={{
        display: "flex",
        flexDirection: "column",
        maxWidth: "580px",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <Grid item paddingBottom={2} display="flex">
        <Paper
          component="form"
          sx={{
            p: "2px 4px",
            display: "flex",
            alignItems: "center",
            width: "100%",
          }}
        >
          <IconButton
            sx={{
              p: "10px",
              backgroundColor: `${colorMapping[priorityColor].default}`,
            }}
            aria-label="menu"
          >
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="할 일을 입력해요"
            value={postContent}
            onChange={(e) => onChangeTodoContent(e)}
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
            onClick={() => onClickSendButton()}
          >
            <SendIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
      >
        <ColorButton customcolor="grey" onClick={() => onClickPriorityColor(3)}>
          낮음
        </ColorButton>
        <ColorButton
          customcolor="green"
          onClick={() => onClickPriorityColor(2)}
        >
          보통
        </ColorButton>
        <ColorButton
          customcolor="orange"
          onClick={() => onClickPriorityColor(1)}
        >
          높음
        </ColorButton>
        <ColorButton customcolor="red" onClick={() => onClickPriorityColor(0)}>
          !!
        </ColorButton>
      </Grid>
    </Box>
  );
}

export default Input;

export const colorMapping = {
  red: {
    default: red[500],
    hover: red[700],
  },
  orange: {
    default: orange[500],
    hover: orange[700],
  },
  green: {
    default: green[500],
    hover: green[700],
  },
  grey: {
    default: grey[500],
    hover: grey[700],
  },
};

const ColorButton = styled(Button)(({ theme, customcolor }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: `${colorMapping[customcolor].default}`,
  borderRadius: 28,
  width: "100%",
  "&:hover": {
    backgroundColor: `${colorMapping[customcolor].hover}`,
  },
}));
