import React from "react";
import BtnDisplay from "./BtnDisplay";
import Header from "./Header";

const Modal = ({ xyz, onClick }) => {
    return (
        <div>
            <h1>{xyz}</h1>
            <Header header="This is my modal content" />
            <BtnDisplay onClick={onClick} text="Close modal" />

            {/* <h1>My Modal</h1>
            <p>This is my Modal content</p> */}
        </div>
    );
};

export default Modal;
