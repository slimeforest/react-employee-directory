import React, {useState} from 'react';

import './App.css';
import NavBar from "./components/NavBar/NavBar"
import Table from "./components/Table/Table"
import { EmployeeContext } from "./components/EmployeeContext/EmployeeContext"

function App() {
  const [employees, setEmployees] = useState([]);
  const [displayedEmployees, setDisplayedEmployees] = useState([])

  return (
    <div className="App">
      <EmployeeContext.Provider value={{employees, setEmployees, displayedEmployees, setDisplayedEmployees}}>
        <NavBar />
        <Table />
      </EmployeeContext.Provider>
    </div>
  );
}

export default App;