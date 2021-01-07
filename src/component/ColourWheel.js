import React, { Component } from "react";

import ReactColorPicker from "@radial-color-picker/react-color-picker";
import "@radial-color-picker/react-color-picker/dist/react-color-picker.min.css";

export default function ColourWheel() {
  const [color, setColor] = React.useState({
    hue: 200,
    saturation: 100,
    luminosity: 50,
    alpha: 1,
  });

  const onInput = (hue) => {
    setColor({ color, hue });
  };

  return (
    <div className="color-cricle">
      <ReactColorPicker onInput={onInput} />
    </div>
  );
}
