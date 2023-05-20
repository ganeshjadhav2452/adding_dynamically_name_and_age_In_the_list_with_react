import InputForm from "./components/InputForm/InputForm";
import Element from "./components/Element/Element";
import { useState } from "react";
 
let data = [{name:'ganesh',age:21}]

function App() {
  const [updatedData,setData] = useState(data);

  const getInputs = (receivedData)=>{
    setData(prevArray=>{
      return [...prevArray,receivedData]
    })
  }
  return (
   <div>
    <InputForm sendDataInThisFunction={getInputs}></InputForm>
    <Element items={updatedData}></Element>
   </div>
  );
}

export default App;
