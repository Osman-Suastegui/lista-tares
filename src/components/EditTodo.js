import React, { Fragment } from 'react';

const EditTodo = ({ todo,tareas,setTareas }) => {
    const updateTodo = () => {
        let texto = prompt('Ingresa el nuevo texto ', todo.description);
        if (texto) {
                const newTodo = {
                ...todo,
                descripcion: texto,
            }
            // actualizamos en el arreglo
            setTareas(tareas.map(t => t.id === todo.id ? newTodo : t))
        }
    }

    return (
        <Fragment>
            <button className="btn-editar" onClick={updateTodo}>Editar</button>
        </Fragment>
    );
};

export default EditTodo;