import React from "react";
import { Box } from "@mui/material";
import MUIList from "@mui/material/List";
import ListItem from "./ListItem";

function List({ data, refetch }) {
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
          return <ListItem singleItem={ele} key={ele.id} refetch={refetch} />;
        })}
      </MUIList>
    </Box>
  );
}

export default List;
