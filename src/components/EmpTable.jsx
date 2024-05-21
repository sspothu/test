import { DeleteOutlined, EditOutlined, MinusCircleFilled, PlusCircleFilled } from '@ant-design/icons'
import React from 'react'
import Newtable from './Newtable'

import Modal from "../common/Modal"

const EmpTable = ({array}) => {

    const colums = [{
        key:"0",
        title:<input type='checkbox'/>,
        render : (record)=>{
            return(
                <input type='checkbox'/>
            )
        }
    },
        {
        key:"1",
        title:"Name",
        dataIndex :"Name"
    },
    {
        key:"2",
        title:"Email",
        dataIndex :"Email"
    },
    
    {
        key:"3",
        title:"Address",
        dataIndex :"Address"
    },
    {
        key:"4",
        title:"Phone",
        dataIndex :"Phone"
    },
    {
        key:"5",
        title:"Action",
        render: (_,record) => {
            return (
              <div className="d-flex gap-1">
                <EditOutlined/>
                <DeleteOutlined/>
              </div>
            );
          },
    },
]
  return (
    <>
    
    <div className='d-flex justify-content-between p-4 text-white m-3' style={{backgroundColor:"#3b5066"}}>
        <div ><h4>Manage Employees</h4></div>
        <div className="d-flex gap-2">
            <button className='btn btn-danger '><MinusCircleFilled />Delete</button>
            <button className='btn btn-success'><PlusCircleFilled /><Modal/></button>
        </div>
    </div>
    <Newtable dataSource={array} columns={colums}/>
    </>
  )
}

export default EmpTable