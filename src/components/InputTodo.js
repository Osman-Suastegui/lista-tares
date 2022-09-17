import React, { Fragment, useState } from 'react'


const InputTodo = ({tareas,setTareas}) => {

  const [description, setDescription] = useState("")

  const onSubimit = async e => {
    e.preventDefault()
    if (description == "") {
      alert("Por favor ingrese una descripcion")
    } else {
      const newTodo = {
        id: new Date().getTime(),
        descripcion: description,
        completado: false
      }
      setTareas([...tareas, newTodo])
      setDescription('')

    }

  }

  return (
    <Fragment>
      <h1>Lista de tareas</h1>
      <form onSubmit={onSubimit}  >
        <input className="todo-input" type="text" placeholder="Ingresa la descripción" value={description} onChange={e => setDescription(e.target.value)} />
        <button className="btn-agregar" >Agregar</button>
      </form>
    </Fragment>
  )
}
export default InputTodo