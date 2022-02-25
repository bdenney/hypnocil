import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {

  const [patients, setPatients] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/patients')
    .then(response => response.json())
    .then(json => {
      setPatients(json);
    });
  }, [])

  function handleNewPatient(patient) {
    fetch('http://localhost:3000/patients', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(patient)
    })
    .then(response => response.json())
    .then(json => { 
      setPatients([...patients, json]);
    })
    .catch(err => console.error(err))
  }

  return (
    <div className="root">
      <Header/>
      <PatientList patients={patients}/>
      <NewPatientForm onNewPatient={handleNewPatient}/>
    </div>
  );
}

export default App;
