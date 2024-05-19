import React from 'react';
import { Table } from "antd";

const Newtable = ({dataSource,columns}) => {
  return (
    <Table dataSource={dataSource} columns={columns} />
  )
}

export default Newtable;