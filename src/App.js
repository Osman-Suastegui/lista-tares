import './App.css';
import {
  BrowserRouter as Router,
  NavLink,
  Route, Routes
} from "react-router-dom";
import React, { Fragment,useState,useEffect } from 'react';


import TareasIncompletas from './components/TareasIncompletas';
import TareasCompletadas from './components/TareasCompletadas';


function App() {
  const [tareas, setTareas] = useState([
    {
      id: 1,
      descripcion: 'Hacer la tarea',
        completado: false
    },
    {
        id: 2,
        descripcion: 'Hacer la compra',
        completado: true
    },
    {
        id: 3,
      descripcion: 'Barrer',
      completado: false
  },
  {
    id: 4,
    descripcion: 'Cortar el césped',
    completado: false
},
  ]);



  
  return (
    <Fragment>
      <Router>
        <nav>
          <ul>
            <li>

              <NavLink to="/" style={({ isActive }) => {
                return {

                  color: isActive ? "#001a57" : "",
                  borderBottom: isActive ? "1px solid #001a57" : "",
                };
              }}>Tareas incompletas</NavLink>
            </li>
          </ul>
          <ul>
            <li>
              <NavLink to="/tareas-completadas" style={({ isActive }) => {
                return {
                  color: isActive ? "#001a57" : "",
                  borderBottom: isActive ? "1px solid #001a57" : "",
                  
                };
              }}>Tareas Completadas</NavLink>
            </li>
          </ul>

        </nav>
        <div className="App">
          <Routes >
            <Route path="/" element={<TareasIncompletas tareas={tareas} setTareas={setTareas}/>} />
            <Route  path="/tareas-completadas" element={<TareasCompletadas tareas={tareas} setTareas={setTareas} />} />
          </Routes>
        </div>
      </Router>
    </Fragment>


  );
}

export default App;
