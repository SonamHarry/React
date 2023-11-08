import React, { useState } from "react";
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";
import { useRef } from "react";
import { useEffect } from "react";


function Modalsample({ onclick }) {
    const modalRef = useRef(null);
    const [firstName, setfirstName]=useState('');
    const [ firstNameValidation, setFirstNameValidation]= useState(true);
    const [lastname, setLastName]=useState('');
    const [ lastNameValidation, setlastNameValidation]= useState(true);
    const [email, setEmail]=useState('');
    const [ emailValidation, setEmailValidation]= useState(true);
    const [phone, setPhone]=useState('');
    const [ phoneValidation, setphoneValidation]= useState(true);

    useEffect(() => {
        const interactiveElement = modalRef.current.querySelectorAll("button");
        interactiveElement[0].focus();
    }, []);
const onSubmit = (e) =>{
    setfirstName(e.target.value);
    console.log(firstName)
};
const onSubmit1 = (e) =>{
    setLastName(e.target.value);
    console.log(onSubmit1)
};
const onSubmit2 = (e) =>{
    setEmail(e.target.value);
    console.log(onSubmit2)
};
const onSubmit3 = (e) =>{
    setPhone(e.target.value);
    console.log(onSubmit3)
};
const errorMsg = ()=>   {
    if (firstName === "" ){
        setFirstNameValidation(false);
        console.log("hii");
    } else {
        setFirstNameValidation(true);
        console.log("bye");
        //  onclick();
    }
        if (lastname === "" ){
            setlastNameValidation(false);
            console.log("hii");
        } else {
            setlastNameValidation(true);
            console.log("bye");
            //  onclick();
        }
       
            if (email === "" ){
                setEmailValidation(false);
                console.log("hii");
            } else {
                setEmailValidation(true);
                console.log("bye");
                //  onclick();
            }
           
                if (phone === "" ){
                    setphoneValidation(false);
                    console.log("hii");
                } else {
                    setphoneValidation(true);
                    console.log("bye");
                    //  onclick();
                }
                }
    return (
        <>
            <div className="modal-wrapper" />
            <div
                ref={modalRef}
                className="dialog_label"
                role="dialog"

                aria-modal="true"
                aria-labelledby="modal"
                onKeyDown={(e) => {
                    if (e.key === "Escape") {
                        onclick();
                    }
                    //  modal's <div> element.
                    const modal = modalRef.current;
                    const modalItems = modal.querySelectorAll("button");
                    const firstModalItem = modalItems[0];
                    const lastModalItem = modalItems[modalItems.length - 1];

                    //  the key that triggered the event is the "Tab" key (e.key === "Tab").
                    if (e.key === "Tab") {
                        // it checks if the "Shift" key is also being held down
                        if (e.shiftKey) {
                            // This is used to determine if the first modal item is the currently focused element.
                            if (document.activeElement === firstModalItem) {
                                lastModalItem.focus();
                                e.preventDefault();
                            }
                        } else {
                            if (document.activeElement === lastModalItem) {
                                firstModalItem.focus();
                                e.preventDefault();
                            }
                        }
                    }
                }}
            >
                <Button arialabel="close" buttonName="X" onclick={onclick} />
                <Header id="modal" head="Personal Information" />
                <Content main="Please fill in your personal details below" />
               
                <form>
                <label id="fname">First Name:<br />
                <input type="text" value={firstName} onChange={onSubmit}  aria-labelledby="fname" placeholder="Enter your first name" autoComplete="given-name" required/><br />
                <span hidden={firstNameValidation}  style={{ color: 'red' }}>Please Enter Your Firstname</span><br />
                </label>
                <label id="lname">Last Name:<br />
                <input type="text" value={lastname} onChange={onSubmit1} aria-labelledby="lname" placeholder="Enter your last name" autoComplete="additional-name" required="P"/><br />
                <span hidden={lastNameValidation}  style={{ color: 'red' }}>Please Enter Your Lastname</span><br />
                </label>
                <label id="email">Email Address:<br />
                <input type="text" value={email} onChange={onSubmit2} aria-labelledby="email" placeholder="Enter your email address" autoComplete="email" required/><br />
                <span hidden={emailValidation}  style={{ color: 'red' }}>Please Enter Your Email Address</span><br />
                </label>
                <label id="phone">Phone Number:<br />
                <input type="text" value={phone} onChange={onSubmit3} aria-labelledby="phone" placeholder="Enter your phone number" autoComplete="tel" required/><br />
                <span hidden={phoneValidation}  style={{ color: 'red' }}>Please Enter Your phone number</span><br />
                </label>
                </form> 
             
                {/* </div> */}
                <button type="submit" onClick={errorMsg}>Sumbit</button>
                <Button buttonName="cancel" onclick={onclick} />
                {/* <span hidden={validation}  style={{ color: 'red' }}>Please fill email field</span> */}
            </div>      
        </>
    );
}
export default Modalsample;
