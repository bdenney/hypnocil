import './App.css';
import Header from './components/Header';
import PatientList from './components/PatientList';

function App() {
  return (
    <div className="root">
      <Header/>
      <PatientList />
    </div>
  );
}

export default App;
