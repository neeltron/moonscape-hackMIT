import * as React from 'react';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import "./slider.scss"

function valuetext(value) {
  return `${value}°C`;
}

export default function DiscreteSlider() {
  return (
    <div className="increse">  
    <h3>Increase efficinecy</h3>
    <div className="my-box">
    <Box sx={{ width: 300 }}>
      <Slider
        aria-label="Temperature"
        defaultValue={30}
        getAriaValueText={valuetext}
        valueLabelDisplay="auto"
        step={10}
        marks
        min={10}
        max={110}
      />
    </Box>
    </div>
    </div>

  );
}