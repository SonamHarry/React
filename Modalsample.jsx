import React from "react";
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";

function Modalsample({ abc }) {
    // const [show, setShow] = useState(false);
    // function click(show) {
    //     setShow(!show);
    // }
    return (
        <div>
            <Header head="My Modal" />
            <Content main="This my modal content" />
            <Button buttonName="Close" abc={abc} />
        </div>
    );
}
export default Modalsample;
