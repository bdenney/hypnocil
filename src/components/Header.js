import React from "react"

function Header() {
    return(
        <header>
            <h1>Hypnocil™️ Clinical Trials</h1>
            <form>
                <input id="search" type="text"></input>
                <input type="submit" value="Search"></input>
            </form>
        </header>
    );
}

export default Header;