import React, { useState } from "react";
import { Box } from "@mui/material";
import MUIList from "@mui/material/List";
import { colorMapping } from "./Input";
import ListItem from "./ListItem";

function List({ data }) {
  return (
    <Box
      container="true"
      sx={{
        display: "flex",
        justifyContent: "right",
        maxWidth: "580px",
        width: "100%",
      }}
    >
      <MUIList sx={{ width: "100%" }}>
        {data.map((ele) => {
          return <ListItem singleItem={ele} />;
        })}
      </MUIList>
    </Box>
  );
}

export default List;
