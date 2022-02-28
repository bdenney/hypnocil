import './App.css';
import Header from './components/Header';
import NewPatientForm from './components/NewPatientForm';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="root">
      <Header/>
      <div class="content">
        <NewPatientForm />
        <PatientList />
      </div>
    </div>
  );
}

export default App;
