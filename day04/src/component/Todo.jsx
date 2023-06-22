import React, { useEffect, useState } from "react";
import Input from "./Input";
import Sort from "./Sort";
import List from "./List";
import { Container } from "@mui/material";

function Todo() {
  const [listData, setListData] = useState([]);
  const fetchData = async () => {
    const data = await fetch("http://localhost:80/posts").then((res) =>
      res.json()
    );
    console.log(data);
    setListData(data);
  };
  useEffect(() => {
    fetchData();
  }, []);
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
      {listData && <List data={listData} />}
    </Container>
  );
}

export default Todo;
