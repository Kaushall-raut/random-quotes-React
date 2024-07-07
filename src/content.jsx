import { Button } from "./Button";
import "./content.css";
// import { Darkmode } from "./darkmode";
import { Quote } from "./quote";

export const ParentContainer = () => {
  return (
    <>
      {/* <Darkmode /> */}
      <img src="../images/React-icon.svg.png" />
      <div id="Parent">
        <div>
          <h3>Random Quote</h3>
        </div>
        <Quote />
        <Button />
      </div>
    </>
  );
};
