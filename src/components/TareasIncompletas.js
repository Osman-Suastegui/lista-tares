import { Fragment } from 'react';

import InputTodo from './InputTodo';
import ListTodos from './ListTodos';

const TareasIncompletas = ({tareas,setTareas}) => {
    return (
        <Fragment>
            <div className="container">
                <InputTodo tareas={tareas} setTareas={setTareas} />
                <ListTodos titulo="Tareas incompletas" tareas={tareas} setTareas={setTareas} />
            </div>
        </Fragment>
    )
}
export default TareasIncompletas;