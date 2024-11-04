import * as React from "react";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";
import { Card, CardContent, Stack, Switch, Typography } from "@mui/material";
import AcIcon from "../../assets/ar-condicionado.png";

const marks = [
  {
    value: 16,
    label: "16°C",
  },
  {
    value: 32,
    label: "32°C",
  },
];

function valuetext(value: number) {
  return `${value}°C`;
}

const AcCard = () => {
  return (
    <Card sx={{ background: "#F5F5F5" }}>
      <CardContent sx={{ marginX: 5, marginY: 5 }}>
        <Box display={"flex"} alignItems={"center"} flexDirection={"column"}>
          <img
            src={AcIcon}
            alt="Water Icon"
            width={60}
            style={{
              border: "2px solid #E65100",
              borderRadius: "12px",
              marginBottom: "10px",
            }}
          />
          <Typography color={"#E65100"}>Ar-Condicionado</Typography>
        </Box>
        <Box>
          <Stack direction="row" spacing={1} alignItems="center">
            <Typography>Off</Typography>
            <Switch defaultChecked inputProps={{ "aria-label": "ant design" }} />
            <Typography>On</Typography>
          </Stack>
          <Slider
            defaultValue={20}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            marks={marks}
            min={16}
            max={32}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default AcCard;
