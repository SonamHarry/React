import React from "react";
import { useState } from "react";
// import BtnDisplay from "./Components/BtnDisplay";
// import Modal from "./Components/Modal";
// import Parent from "./Practice/parent";
import Button from "./Practice/Button"
import Modalsample from "./Practice/Modalsample";
//import Header from "./Practice/Header";
// import Form from "./Components/Form";
import { useRef } from "react";


function App() {
  const mainRef = useRef();
//   useEffect(() => {
//     const mainFocus = mainRef.current.querySelectorAll("button");
//     mainFocus[0].focus();
// });
// let show=true;
// let setShow=!show;
  const [show, setShow] = useState(true);
const click = () => {
  setShow(!show);
  // console.log(!setShow);
  // !setShow;
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
