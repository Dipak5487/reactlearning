import React, { useState } from 'react'

const Greating = (props) => {
    //Register Variable , Method, JavaScript Work Here! 
    const [name, setName] = useState("Learning React App")
    const [input, setInput] = useState("")

    function changeName() {
        if(input)
        {
            setName(input)
        }        
        setInput("")

    }
    function revert() {
        setName("Learning React App")
    }
    function handleChanges(e) {
        setInput(e.target.value)
        console.log("Handle Changes", e)

    }
    return (
        <>
            <p>Hello {name}</p>
            <input type="text" name="FirstName" value={input} onChange={handleChanges} />
            <button style={{ margin: "10px" }} onClick={changeName}>Change Name</button>
            <button style={{ margin: "20px" }}onClick={revert}>Revers Name</button>
        </>
    )
}
export default Greating