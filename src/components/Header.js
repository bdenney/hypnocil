import React from "react"

function Header() {
    return(
        <header>
            <img src="./images/hypnocil-logo.png"/>
            <h1>Hypnocil™️ Clinical Trials</h1>
            <input id="search" type="text" placeholder="Search..."></input>
        </header>
    );
}

export default Header;