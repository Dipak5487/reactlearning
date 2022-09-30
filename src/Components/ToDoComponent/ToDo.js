import React, { useState } from 'react'

const ToDo = () => {
  const [todo, setToDo] = useState([])
  const [input, setInput] = useState("")
  const [chieldInput, setChieldInput] = useState("")
  const [index, setIndex] = useState(0)
  const [show, setShow] = useState(false)
  const [isDisable, setDisable] = useState(false)

  function filterList(e) {
    var data = todo.filter((x, index) => index !== e)
    setToDo(data)
    setShow(false)
    setInput("")
    setChieldInput("")
    console.log("remove Input", input)
    console.log("remove input", chieldInput)
  }
  function handleChanges(e) {
    setInput(e.target.value)
  }
  function handleChieldChanges(e) {
    setChieldInput(e.target.value)
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
    setInput("")
  }
  function Update(e, ind) {

    console.log("Update value", e)
    console.log("Update ind", ind)
    todo[index] = e.target.value
    console.log("Input update value", show)
    setChieldInput("")
    setInput("")
    setShow(false)
    setDisable(false)

  }
  function OpneInputBox(value, indx) {
    console.log("Input value", value)
    console.log("Input value", indx)

    setChieldInput(value)
    setIndex(indx)
    setShow(true)
    setInput("")
    setDisable(true)


  }
  return (
    <>
      
      <span><input type="text" name="listname" value={input} onChange={handleChanges}></input>
      <button className="btn btn-success" style={{ margin: "10px" }} disabled ={isDisable === false ? false : true} onClick={addItem}>Add Item</button>
      </span><br />
      <br />
      {
        
          todo.map((item, index) => {
            return (
              <>
                <table>
                  <tr>                  
                      <span className="text-secondary mb-2" onClick={() => OpneInputBox(item, index)} value={item} style={{ fontSize: '1rem', width: "10px" }}>{item} </span>
                      <button className="btn btn-danger" style={{ margin: "20px" }} onClick={() => filterList(index)}> Delete</button>
                    
                  </tr>
                </table>
              </>
            )
          })          
      }
      {show?(<span>
              <input type="text" name="listname" value={chieldInput} onChange={handleChieldChanges}></input>
              <button className="btn btn-warning" outline style={{ margin: "20px" }} onClick={Update} value={chieldInput}>Update</button>
            </span>) : (<br/>)}
    </>
  )
}

export default ToDo