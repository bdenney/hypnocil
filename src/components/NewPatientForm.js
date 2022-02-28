import React from "react"

function NewPatientForm() {
    return(
        <>
            <form id="new-patient-form">
                <input id="patient-name" type="text" placeholder="Patient Name" />
                <select name="side-effects" id="side-effects" form="new-patient-form">
                    <option value="dizziness">Dizziness</option>
                    <option value="nausea">Nausea</option>
                    <option value="somnambulism">Somnambulism</option>
                    <option value="memory">Memory</option>
                    <option value="allergy">Severe Allergic Reaction</option>
                    <option value="headache">Headache</option>
                </select>
                <input type="submit" value="Add Patient" />
            </form>
        </>
    )
}

export default NewPatientForm;