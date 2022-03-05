import React from "react";
import ReactIconSmall from "../images/react-icon-small.png"

export default function Navbar() {
    return (
        <nav>
            <img src={ReactIconSmall} className={"nav--icon"}/>
            <h3 className={"nav--logo_text"}>ReactInfo</h3>
            <h4 className={"nav--title"}>Project1</h4>
        </nav>
    );
}
