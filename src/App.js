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

  return (
    <div className="root">
      <Header/>
      <PatientList patients={patients}/>
      <NewPatientForm />
      <PatientList />
    </div>
  );
}

export default App;
