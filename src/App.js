import React from "react";
import { useState } from "react";
import Button from "./Practice/Button"
import Modalsample from "./Practice/Modalsample";
import { useRef } from "react";


function App() {
  const mainRef = useRef();
//   useEffect(() => {
//     const mainFocus = mainRef.current.querySelectorAll("button");
//     mainFocus[0].focus();
// });
  const [show, setShow] = useState(true);
const click = () => {
  setShow(!show);
  const mainFocus = mainRef.current.querySelectorAll("button");
  mainFocus[0].focus();
  }
  return (
    <div ref={mainRef}>
      <Button buttonName="Add Personal Information" onclick={click} />
      {show || <Modalsample onclick={click} />}
   </div >);
}

export default App;
