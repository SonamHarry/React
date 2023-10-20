import React from "react";
//import logo from './logo.svg';
// import './App.css';
// import Text from "./Components/Text";
import { useState } from "react";
import BtnDisplay from "./Components/BtnDisplay";
import Modal from "./Components/Modal";
import Header from "./Components/Header";
// import { useState } from "react";
// import Modal from ".Components/Modal"
function App() {
  const [show, setShow] = useState(false);
  const click = () => {
    setShow(!show)
    return (
      <div>
        <BtnDisplay text="open modal" />
        <Modal xyz="My Modal" />
        <Header header="This is my modal content" />

        {/* {console.log(show)} */}
        <BtnDisplay text="close modal" />
        {/* <Modal /> */}
        {/* <BtnDisplay text="close modal" /> */}
      </div>

    );
  }
}

export default App;
