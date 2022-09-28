import React, { useState } from 'react'
//import './ToDo.css';


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
    console.log("Input value", show)
    setInput("")
    setShow(true)

  }
  return (
    <>

      <input type="text" name="listname" value={input} onChange={handleChanges}></input>

      {show ? (<button className="btn btn-success" data-bs-toggle="collapse" href="#collapseExample" role="button"
        aria-expanded="false" aria-controls="collapseExample" style={{ margin: "10px" }} onClick={addItem}>Add Item</button>) :
        (<button className="btn btn-warning" data-bs-toggle="collapse" href="#collapseExample" role="button"
          aria-expanded="false" aria-controls="collapseExample" outline style={{ margin: "20px" }} onClick={Update} value={input}>Update</button>)
      }
      <br />
      <br />
      {
        todo.map((item, index) => {
          return (
            <>
              <table className="table" style={{ position: "initial", top: "40px", left: "20px", bordercollapse: "collapse", marginbottom: "20px", margintop: "20px" }}>

                <tbody>
                  <tr style={{ width: "10px", height: "10px" }}>
                    <td style={{ width: "10px", padding: "5px", textAlign: "center", height: "10px" }} className="text-center">
                      <span className="text-secondary mb-2" style={{ fontSize: '1rem', width: "10px" }}>{item}</span>
                      <button className="btn btn-danger" data-bs-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample" style={{ margin: "20px" }} onClick={() => filterList(index)}> Delete</button>

                      <button className="btn btn-primary" data-bs-toggle="collapse" href="#collapseExample" role="button"
                        aria-expanded="false" aria-controls="collapseExample" style={{ margin: "20px" }} onClick={() => EditList(index)}> Edit</button>
                      <br />
                    </td>
                  </tr>
                </tbody>
              </table>
            </>
          )
        })
      }
    </>
  )
}

export default ToDo