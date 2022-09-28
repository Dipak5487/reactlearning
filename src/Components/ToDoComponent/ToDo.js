import React, { useState } from 'react'
const ToDo = () => {
  const [todo, setToDo] = useState([])
  const [input, setInput] = useState("")
  const [isclick, isUpdate] = useState(false)
  const [index, setIndex] = useState(0)

  function filterList(e) {
    var data = todo.filter((x, index) => index !== e)
    setToDo(data)
  }
  function handleChanges(e) {
    setInput(e.target.value)
  }
  function addItem(e) {
    if (input.trim()) {
      setToDo([...todo, input])
      setInput("")
    }
  }
  function EditList(e) {
    var data = todo[e]
    setInput(data)
    setIndex(e)
  }
  function Update(e) {
    console.log("Update value", e.target.value)
    todo[index] = e.target.value
    setInput("")
  }

  return (
    <>
      <input type="text" name="listname" value={input} onChange={handleChanges}></input>
      <button style={{ margin: "10px" }} onClick={addItem}>Add Item</button>
      <button style={{ margin: "20px" }} onClick={Update} value={input}>Update</button>
      <br />
      <br />
      {
        todo.map((item, index) => {
          return (
            <>
              <span>{item}</span>
              <button style={{ margin: "10px" }} onClick={() => filterList(index)}> Delete</button>
              <button style={{ margin: "20px" }} onClick={() => EditList(index)}> Edit</button>
              <br />
            </>
          )
        })
      }
    </>
  )
}

export default ToDo