import React from "react"

function PatientList() {
    return(
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
            {/* Create <Patient/> components here. */}
          </tbody>
      </table>  
    );
}

export default PatientList;