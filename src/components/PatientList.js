import React from "react"
import Patient from "./Patient"

function PatientList({patients}) {

    return (
      <table>
          <tbody>
            <tr>
                <th></th>
                <th>Patient ID</th>
                <th>Patient Name</th>
                <th>Noted Side Effects</th>
            </tr>
          </tbody>
          {
              patients.map(patient => {
                  return <Patient patient={patient}/>
              })
          }
      </table> 
    )
}

export default PatientList;