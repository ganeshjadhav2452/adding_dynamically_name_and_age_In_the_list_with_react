import { useState } from "react";

let symbolArray = ["!",'@','#','$','%','%','^','&','*','(',')','-','_','=','+','[',']','{','}',';',':','"',"'"]
let mySet = new Set(symbolArray)
const InputForm = (props) => {
  

  const [updatedState, setUpdatedState] = useState({
    enteredName: "",
    enteredAge: "",
  });

  const enteredName = (e)=>{
   
   
    setUpdatedState({
        ...updatedState,
        enteredName:e.target.value
    })
  }

  const enteredAge = (e)=>{
  
    setUpdatedState({
        ...updatedState,
        enteredAge:e.target.value
    })
  }

  const allInputs = (e)=>{
    e.preventDefault()
   

  

   let myInputs ={
       name:updatedState.enteredName,
       age:updatedState.enteredAge
    }
    props.sendDataInThisFunction(myInputs)
  }

  return (
    <form className="container w-50 mt-5 border border-primary p-4 rounded " onSubmit={allInputs}>
      <div className=" row mb-3">
        <input
          placeholder="Please Enter Name..."
          type="text"
          className="col-11 form-control fw-bold"
          id="exampleInputEmail1"
          onChange={enteredName}
        />
      </div>
      <div className="row mb-3">
        <input
          placeholder="Please Enter Age..."
          type="number"
          className="col-11  form-control fw-bold"
          onChange={enteredAge}
        />
      </div>
      <button type="submit" className={`btn btn-primary`}>
        Submit
      </button>
    </form>
  );
};

export default InputForm;
