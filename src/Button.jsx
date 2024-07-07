//!Button component

import { useEffect } from "react";
import "./button.css";

//*Normal fetching data from api
export const Button = () => {
  const handleClick = () => {
    const api = "https://api.quotable.io/random";
    const getQuote = async () => {
      let data = await fetch(api);
      let response = await data.json();
      console.log(response);
      document.getElementById("text").innerText = response.content;
    };
    getQuote();
  };

  useEffect(() => {
    //!Use EFfect  HOOK used as an onload event
    handleClick();
  });

  return (
    <div>
      <button onClick={() => handleClick()}>Next Quote</button>
    </div>
  );
};
