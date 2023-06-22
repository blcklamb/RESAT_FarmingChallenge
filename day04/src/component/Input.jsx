import React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import DirectionsIcon from "@mui/icons-material/Directions";
import { Box, Container, Grid } from "@mui/material";
import { Button } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";

import { green, grey, orange, purple, red } from "@mui/material/colors";

import { styled } from "@mui/material/styles";

function Input() {
  return (
    <Box
      container
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
          <IconButton sx={{ p: "10px" }} aria-label="menu">
            <MenuIcon />
          </IconButton>
          <InputBase
            sx={{ ml: 1, flex: 1 }}
            placeholder="Search Google Maps"
            inputProps={{ "aria-label": "search google maps" }}
          />

          <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
          <IconButton
            color="primary"
            sx={{ p: "10px" }}
            aria-label="directions"
          >
            <DirectionsIcon />
          </IconButton>
        </Paper>
      </Grid>
      <Grid
        item
        sx={{ display: "flex", justifyContent: "space-between", gap: "10px" }}
      >
        <ColorButton customColor="grey">낮음</ColorButton>
        <ColorButton customColor="green">보통</ColorButton>
        <ColorButton customColor="orange">높음</ColorButton>
        <ColorButton customColor="red">!!</ColorButton>
      </Grid>
    </Box>
  );
}

export default Input;

const colorMapping = {
  grey: {
    default: grey[500],
    hover: grey[700],
  },
  green: {
    default: green[500],
    hover: green[700],
  },
  orange: {
    default: orange[500],
    hover: orange[700],
  },
  red: {
    default: red[500],
    hover: red[700],
  },
};

const ColorButton = styled(Button)(({ theme, customColor }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: `${colorMapping[customColor].default}`,
  borderRadius: 28,
  width: "100%",
  "&:hover": {
    backgroundColor: `${colorMapping[customColor].hover}`,
  },
}));
