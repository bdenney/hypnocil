import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {

  const [patients, setPatients] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  function handleSearch(searchText) {
    setSearchText(searchText);
  }

  const filteredPatientData = patients.filter((patient) => {

    const upperSearchText = searchText.toUpperCase();

    return patient.name.toUpperCase().includes(upperSearchText) 
          || patient.side_effects.find(sideEffect => {
              return sideEffect.toUpperCase().includes(upperSearchText);
             });
  });

  return (
    <div className="root">
      <Header onSearch={handleSearch}/>
      <div className="content">
        <NewPatientForm onNewPatient={handleNewPatient}/>
        <PatientList patients={filteredPatientData}/>
      </div>
    </div>
  );
}

export default App;
