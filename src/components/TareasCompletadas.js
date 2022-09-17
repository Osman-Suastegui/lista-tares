import { Fragment,useState,useEffect } from 'react';

import ListTodos from './ListTodos';

const TareasCompletadas = ({tareas,setTareas}) => {
    
   

    return (
        <Fragment>
            <div className="container">
                <ListTodos titulo="Tareas completadas" tareas={tareas} setTareas={setTareas} />
            </div>
        </Fragment>
    )
}
export default TareasCompletadas;