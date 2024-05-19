import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import Data from "../data/Data";
import Newtable from "./Newtable";


const TableComponent = ({ array }) => {
  const [Array, setArray] = useState(array);
  const[data,setData]=useState(Data)
  const navigate = useNavigate()
  const edithandler = ((record) => {     
    let keys = Object.keys(record)
    keys.forEach((item)=>{
      let updata =[...data]
      let index = updata.findIndex(x=>{x.email===item})
      if(index!==-1){
        updata[index].value=record[item]
        setData(updata)
      }
    })
    navigate("/loginform",{state:data})
  })

  // const edithandler = (record) => {
  //   let dataindex = array.findIndex((x) => x.Email === record.Email);
  //   // table data lo unna mail ki record lo mail ki equal ayina index ki fetch chesam
  //   let keys = Object.keys(record)
  //   // aa record lo keys ni tesukunam so keys =[firstname,lastname,email]
  //   keys.forEach((i)=>{
  //     Data.map((item)=>{
  //       item[dataindex].value = record[i]
  //     })
  //   }) 
  // navigate("/table")

    
  //   navigate("/loginform",{state:dataindex})
    
    
  //   // let keys = Object.keys(record)
    
  //   // keys.forEach((i)=>{
  //   //   Data.forEach((item)=>{
  //   //     item[dataindex].value = record[i]
  //   //   })
  //   // })
    
  // };
  // const edithandler = (record) =>{
  //   navigate(`/loginform`,{state:record})
  // }
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
