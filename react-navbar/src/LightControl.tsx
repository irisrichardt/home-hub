import React, { useState } from "react";
import { Box, Slider, Switch, Typography } from "@mui/material";

function LightControl() {
  const [light, setLight] = useState(false);
  const [intensity, setIntensity] = useState(30);

  const handleLightChange = (event) => {
    setLight(event.target.checked);
  };

  const handleIntensityChange = (event, newValue) => {
    setIntensity(newValue);
  };

  return (
    <Box sx={{ margin: 2 }}>
      <Typography variant="h6">Luzes</Typography>
      <Switch checked={light} onChange={handleLightChange} />
      <Typography>Intensidade</Typography>
      <Slider
        value={intensity}
        onChange={handleIntensityChange}
        aria-labelledby="continuous-slider"
      />
    </Box>
  );
}

export default LightControl;
