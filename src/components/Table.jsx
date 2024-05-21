import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import {Data }from "../data/Data";
import Newtable from "./Newtable";


const TableComponent = ({ array }) => {
  const [Array, setArray] = useState(array);
  const[data,setData]=useState(Data)
  const navigate = useNavigate()
  const edithandler = (record) => {
    // Update the data state with the record data
    const updatedData = data.map((item) =>
      Object.keys(record).includes(item.name) ? { ...item, value: record[item.name] } : item
    );
    setData(updatedData);
  
    // Navigate to the login form with the updated data
    navigate("/loginform", { state: updatedData });
  };
  


  const deletehandler = (record) => {

    let index = array.findIndex((x) => x.Email === record.Email);
    const newArray = [...Array];
    newArray.splice(index, 1);
    setArray(newArray);
    
  };

  const columns = [
    {
      key: "1",
      title: "firstname",
      dataIndex: "firstname",
    },
    {
      key: "2",
      title: "lastname",
      dataIndex: "lastname",
    },
    {
      key: "3",
      title: "Email",
      dataIndex: "Email",
    },
    {
      key: "4",
      title: "action",
      dataIndex: "action",
      render: (_,record) => {
        return (
          <div className="d-flex gap-1">
            <EditOutlined onClick={() => edithandler(record)} />
            <DeleteOutlined onClick={() => deletehandler(record)}/>
          </div>
        );
      },
    },
  ];
  return (
    <>
    <Newtable dataSource={Array} columns={columns}/>
      
    </>
  );
};

export default TableComponent;
