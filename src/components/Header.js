import React from "react"

function Header({onSearch}) {

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        onSearch(searchText);
    }

    return(
        <header>
            <div>
                <img src="./images/hypnocil-logo.png"/>
                <h1>Clinical Trials</h1>
            </div>
            <input id="search" type="text" onChange={handleChange} placeholder="Search..."></input>
        </header>
    );
}

export default Header;