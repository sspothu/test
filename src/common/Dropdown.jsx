import React, { useState } from "react";
import Data from "../data/Data";

const Dropdown = ({ item }) => {
  const changehandler = (e) => {
    const { name, value } = e.target.value;
    const index = Data.findIndex((x) => x.name === name);
    
    Data[index].value = value;
  };
  return (
    <>
      <label htmlFor={item.name}>{item.label} : </label>
      <select name={item.name} onChange={changehandler}>
        {item.options.map((ele, index) => (
          <option key={index}>
            {ele}
          </option>
        ))}
      </select>
    </>
  );
};

export default Dropdown;
