import React, { useState } from 'react'

const Greating = (props) => {
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
            <button onClick={changeName}>Change Name</button>
            <button onClick={revert}>Revers Name</button>
        </>
    )
}

export default Greating