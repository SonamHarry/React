import React from "react";

function Button({ abc,arialabel, buttonName }) {
    return (
        <div>
            <button aria-label={arialabel} onClick={abc}>{buttonName}</button>
        </div>
    );
}
export default Button;
