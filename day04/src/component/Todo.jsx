import React from "react";
import Input from "./Input";
import Sort from "./Sort";
import List from "./List";
import { Container } from "@mui/material";

function Todo() {
  return (
    <Container
      sx={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
        maxWidth: "580px",
        width: "100%",
      }}
    >
      <Input />
      <Sort />
      <List />
    </Container>
  );
}

export default Todo;
