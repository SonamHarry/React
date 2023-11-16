import React from "react";

function Button({ onclick, arialabel, buttonName }) {
    return (
        <div>
            <button  aria-label={arialabel} onClick={onclick}>{buttonName}</button>
        </div>
    );
}
export default Button;
