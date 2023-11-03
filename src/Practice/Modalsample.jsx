import React from "react";
import Header from "./Header";
import Content from "./Content";
import Button from "./Button";
import { useRef } from "react";
import { useEffect } from "react";
import { click } from "@testing-library/user-event/dist/click";

function Modalsample({ onclick }) {
    const modalRef = useRef(null);

    useEffect(() => {
        const interactiveElement = modalRef.current.querySelectorAll("button");
        interactiveElement[0].focus();
    });
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
                        click();
                    }
                    //  modal's <div> element.
                    const modal = modalRef.current;
                    const modalitems = modal.querySelectorAll("button");
                    const firstmodalitem = modalitems[0];
                    const lastmodalitem = modalitems[modalitems.length - 1];

                    //  the key that triggered the event is the "Tab" key (e.key === "Tab").
                    if (e.key === "Tab") {
                        // it checks if the "Shift" key is also being held down
                        if (e.shiftKey) {
                            // This is used to determine if the first modal item is the currently focused element.
                            if (document.activeElement === firstmodalitem) {
                                lastmodalitem.focus();
                                e.preventDefault();
                            }
                        } else {
                            if (document.activeElement === lastmodalitem) {
                                firstmodalitem.focus();
                                e.preventDefault();
                            }
                        }
                    }
                }}
            >
                <Button arialabel="close" buttonName="X" onclick={onclick} />
              
                <Header  id="modal" head="My Modal" />
                <Content main="This is my modal content" />
                <Button buttonName="submit" onclick={onclick} />
                <Button buttonName="cancel" onclick={onclick} />
            </div>
        </>
    );
}
export default Modalsample;
