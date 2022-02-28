import React from "react";

function Patient({patient}) {

    let effectString = '';
    patient.side_effects.forEach((sideEffect, index) => {
        effectString += sideEffect;
        if (index != (patient.side_effects.length - 1)) {
            effectString += ", ";
        }
    });

    function handleDeleteClick(event) {
        // TODO: Delete the patient.
    }

    return(
        <tr className="">
            <td><button onClick={handleDeleteClick}>Delete</button></td>
            <td>{patient.id}</td>
            <td>{patient.name}</td>
            <td>{effectString}</td>
        </tr>
    )
}

export default Patient;