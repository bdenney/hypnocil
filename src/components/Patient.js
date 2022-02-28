import React from "react";

function Patient({patient}) {
    return(
        <tr className="">
            <td><button>Delete</button></td>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{patient.side_effects}</td>
        </tr>
    )
}

export default Patient;