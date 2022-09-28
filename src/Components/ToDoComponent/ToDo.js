import React, { useState } from 'react'
const ToDo = () => {
  const [todo, setToDo] = useState([])
  const [input, setInput] = useState("")
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(true)

  function filterList(e) {
    var data = todo.filter((x, index) => index !== e)
    setToDo(data)
    setShow(true)
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
    setShow(false)
  }
  function Update(e) {    
    
    console.log("Update value", e.target.value)
    todo[index] = e.target.value    
    console.log("Input value",show)
    setInput("")
    setShow(true)

  }

  return (
    <>
      <input type="text" name="listname" value={input} onChange={handleChanges}></input>
      {show ? (<button style={{ margin: "10px" }} onClick={addItem}>Add Item</button>) :
        (<button style={{ margin: "20px" }} onClick={Update} value={input}>Update</button>)
      }
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