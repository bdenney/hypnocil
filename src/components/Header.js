import React from "react"

function Header({onSearch}) {

    function handleChange(event) {
        event.preventDefault();
        const searchText = event.target.value;
        onSearch(searchText);
    }

    return(
        <header>
            <h1>Hypnocil™️ Clinical Trials</h1>
            <input id="search" type="text" onChange={handleChange} placeholder="Search..."></input>
        </header>
    );
}

export default Header;