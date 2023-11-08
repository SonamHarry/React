import React from "react";
import Header from "./Header";

const BtnDisplay = () => {
    let show=true;
const click = () => {
  show=(!show);
  console.log(!show);}
    return (
        <div>
      { show ?<p>sonam</p>
      : <p>radha</p>}
            <Header />
            <button onClick={click}></button>
        </div>
    );
};

export default BtnDisplay;
