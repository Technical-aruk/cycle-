import React, { useState } from 'react'

const Arrayadd=()=>{
    const[inputvalue,setInputvalue]=useState("");
    const[submittedvalue,setsubmittedvalue]=useState(["red"]);
    const handlesubmit=()=>{
    setsubmittedvalue([...submittedvalue,inputvalue])
    setInputvalue("");
    }
  return (
    <div>
        <ul>
            {submittedvalue.map((users)=>(
                <li>{users}</li>
            ))}
        </ul>
        <input
        type="text"
        value={inputvalue}
        onChange={(e)=>setInputvalue(e.target.value)}
        />
        <button onClick={handlesubmit}>add</button>
    </div>
  );
};

export default Arrayadd