import { useState } from "react";
import "./darkmode.css";
export const Darkmode = () => {
  const [on, setOn] = useState(false);
  const handleClick = () => {
    setOn(!on);
  };
  return (
    <>
      <span>darkmode</span>
      <div
        className="container"
        style={{ backgroundColor: on ? "black" : "red" }}
      >
        <div
          className={`round" ${on == true ? "on" : "off"}`}
          onClick={handleClick}
        >
          {on == true ? "on" : "off"}
        </div>
      </div>
    </>
  );
};
