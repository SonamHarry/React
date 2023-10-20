import React from "react";
// import { useState } from "react";
// import Text from "./Text";
// import Modal from "./Modal";

// function BtnDisplay() {
//     // <Text />;
//     // Here, the useState hook is used to create a state variable called open with an initial value of false.
//     //  The setOpen function is used to update the open state.
//     const [open, setOpen] = useState(false);
//     function Display() {
//         setOpen(!open);
//     }
//     console.log(setOpen);
//     return (
//         <>
//             <div>
//                 {open ? (
//                     <Text abc="Sonam Harry" />
//                 ) : (
//                     <Text abc="Radha Choudhari" />
//                 )}

//                 <button onClick={Display}>Click</button>
//             </div>
//         </>
//     );
// }
// function BtnDisplay() {
//     const [number, setNumber] = useState(0);
//     function increament() {
//         setNumber(number + 1);
//     }
//     return (
//         <div>
//             Numbers:
//             <Text abc={number} />
//             <button onClick={increament}>Click</button>
//         </div>
//     );
// }
const BtnDisplay = ({ text, click }) => {
    return (
        <>
            <button onClick={click}>{text}</button>
        </>
    );
};
export default BtnDisplay;
