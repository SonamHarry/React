import { useState } from "react";
import React from "react";
import Modalsample from "./Modalsample";

function Button({ abc, buttonName }) {
    return (
        <div>
            <button onClick={abc}>{buttonName}</button>
        </div>
    );
}
export default Button;
