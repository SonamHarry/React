import React from "react";
import { useState } from "react";
import BtnDisplay from "./Components/BtnDisplay";
// import Modal from "./Components/Modal";
import Parent from "./Practice/parent";
import Button from "./Practice/Button"
import Modalsample from "./Practice/Modalsample";
import Header from "./Practice/Header";


function App() {
  const [show, setShow] = useState(false);
  function click() {

    setShow(!show);
  }
  return (
    <div>

      {/* <BtnDisplay text="open modal" onClick={click} />
      {show || < Modal xyz="My Modal" onClick={click} />} */}
      <Parent />
      <BtnDisplay />
      <Button buttonName="Open" abc={click} />
      {show || <Modalsample abc={click} />}
    </div >);
}

export default App;
