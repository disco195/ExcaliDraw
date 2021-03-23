import React, { useState } from "react";
import Excalidraw from "excalidraw";
import InitialData from "./initialData";

import "excalidraw/dist/excalidraw.min.css";
import "./styles.css";

export default function App() {
  const onChange = (elements, state) => {
    console.log("Elements :", elements, "State : ", state);
  };

  const onUsernameChange = username => {
    console.log("current username", username);
  };
  const [dimensions, setDimensions] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  });

  const onResize = () => {
    setDimensions({
      width: window.innerWidth,
      height: window.innerHeight
    });
  };
  const { width, height } = dimensions;
  const options = { zenModeEnabled: true, viewBackgroundColor: "#FFFFFF" };
  return (
    <div className="App">
      <Excalidraw
        width={width}
        height={height}
        onResize={onResize}
        initialData={InitialData}
        onChange={onChange}
        user={{ name: "Excalidraw User" }}
        onUsernameChange={onUsernameChange}
        options={options}
      />
    </div>
  );
}
