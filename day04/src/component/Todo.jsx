import React, { useEffect, useState } from "react";
import Input from "./Input";
import Sort from "./Sort";
import List from "./List";
import { Container } from "@mui/material";

function Todo() {
  const [listData, setListData] = useState([]);
  const [refetch, setRefetch] = useState(true);
  const fetchData = async () => {
    const data = await fetch("http://localhost:80/posts").then((res) =>
      res.json()
    );
    setListData(data);
  };

  const triggerRefetch = () => {
    setRefetch(true);
  };

  const onChangeSortBy = async (isDone) => {
    let sortedData = await fetch("http://localhost:80/posts").then((res) =>
      res.json()
    );
    if (isDone === "전체") {
      sortedData = listData;
    } else if (isDone === "완료") {
      sortedData = sortedData.filter((ele) => ele.done);
    } else {
      sortedData = sortedData.filter((ele) => !ele.done);
    }
    setListData(sortedData);
  };

  useEffect(() => {
    if (refetch) {
      fetchData();
      setRefetch(false);
    }
  }, [refetch]);

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
      <Input refetch={triggerRefetch} />
      <Sort sortBy={onChangeSortBy} />
      {listData && <List data={listData} refetch={triggerRefetch} />}
    </Container>
  );
}

export default Todo;
