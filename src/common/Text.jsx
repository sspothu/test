import React, { useState } from "react";
import Data from "../data/Data";
const Text = ({ item}) => {
  const [jsondata, Setjsondata] = useState(Data);
  const changehandler = (e) => {
    const { name, value } = e.target;
    const index = jsondata.findIndex((x) => x.name === name);
    const updatedData = [...jsondata];
    updatedData[index].value = value;
    Setjsondata(updatedData);
  };

  return (
    <>
    
    <div className="mb-3">
      <label htmlFor={item.name} className="form-label">
        {item.name} :
      </label>
      <input
        autoComplete="false"
        type={item.type}
        value={item.value}
        id={item.name} 
        placeholder={item.placeholder}
        name={item.name}
        onChange={changehandler}
      />
      {item.error ? <span style={{ color: "red" }}>{item.errorMessage}</span>:''}
    </div>
    </>
    
    
  );
};

export default Text;




// import React, { useState } from 'react'
// const Text = ({obj,handle,errors}) => {
//   const er=errors
//     let {type,placeholder,name,value,label}=obj;
//     let [val,setVal]=useState(value);
   
//     let handleChange=(e)=>{
     
//       setVal(e.target.value)
//     }
//     handle(val,obj)
//   return (
//     <>
//     <label className='mt-2' htmlFor={name}>{label}</label>
//     <input className='form-control' type={type} placeholder={placeholder} name={name} value={val} onChange={(e)=>handleChange(e)} id={name}/><br/>
//     {er[name]&&<span style={{color:"red"}}>{er[name]}</span>}    
    
//     </>
//   )
// }
 
// export default Text
