import React from "react";
import BtnDisplay from "./BtnDisplay";
import Header from "./Header";

const Form = ({}) => {
    return (
        <div>
            <label id="fname">First Name:</label><br />
            <input type="text" aria-labelledby="fname" autoComplete="" /><br />
            <label id="lname">Last Name:</label><br />
            <input type="text" aria-labelledby="lname" autoComplete="" /><br />
            <label id="email">Email Address:</label><br />
            <input type="text" aria-labelledby="email" autoComplete="" /><br />
            <label id="phone">Phone Number:</label><br />
            <input type="text" aria-labelledby="phone" autoComplete="" /><br />
        </div>
    );
};

export default Form;
