import React from "react";

function Button({ abc, buttonName }) {
    return (
        <div>
            <button onClick={abc}>{buttonName}</button>
        </div>
    );
}
export default Button;
