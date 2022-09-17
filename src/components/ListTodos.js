import React, { Fragment, useEffect, useState } from 'react';
import EditTodo from './EditTodo';

const ListTodos = ({ titulo, tareas, setTareas }) => {

    

    const deleteTodo = (id) => {

        if (window.confirm("¿Estas seguro de que quieres eliminar esta tarea?")) {

            setTareas(tareas.filter(todo => todo.id !== id));
        }
        console.log(tareas)
    }
    const completedTodo = (evt, id) => {
        evt.preventDefault();
        setTareas(tareas.map(todo => {
            if (todo.id === id) {
                todo.completado = evt.target.checked;
            }
            return todo;
        }));
        console.log(tareas) 

    }



    return (
        <div className="container-list-todos">
            <h1>{titulo} </h1>
            <table className="list-todos">
                <tr>
                    <th>Descripción</th>
                    <th>Editar</th>
                    <th>Eliminar</th>
                    <th>Completar</th>

                </tr>

                {
                   titulo === "Tareas incompletas" ?(


                    // muestra las tareas incompletas
                    tareas.filter(todo => todo.completado ==false).map(todo => (
                        <tr key={todo.id}>
                            <td>{todo.descripcion}</td>
                            <td>
                                <EditTodo todo={todo} tareas={tareas} setTareas={setTareas} />
                            </td>
                            <td>
                                <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Eliminar</button>
                            </td>
                            <td>
                                <input type="checkbox" checked={todo.completado} onChange={(evt) => completedTodo(evt, todo.id)} />
                            </td>
                        </tr>
                    ))
                    ):
                    (
                        tareas.filter(todo => todo.completado == true).map(todo => (
                            <tr key={todo.id}>
                                <td>{todo.descripcion}</td>
                                <td>
                                    <EditTodo todo={todo} tareas={tareas} setTareas={setTareas} />
                                </td>
                                <td>
                                    <button onClick={() => deleteTodo(todo.id)} className="btn btn-danger">Eliminar</button>
                                </td>
                                <td>
                                    <input type="checkbox" checked={todo.completado} onChange={(evt) => completedTodo(evt, todo.id)} />
                                </td>
                            </tr>
                        )))


                
                }

            </table>
        </div>
    )
}

export default ListTodos;