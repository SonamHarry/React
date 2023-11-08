import React from "react";
import Header from "./Header";

const BtnDisplay = () => {
    let show = true;
const click = () => {
  show  ? false :true;
 }
    return (
        <div>
      { show === true? <p>simran</p>
      : <p>radha</p>}
       {console.log(!show)}
            <Header />
            <button onClick={click}></button>
        </div>
    );
};

export default BtnDisplay;
