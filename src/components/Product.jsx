import React, { useEffect, useState } from "react";
import {Getproducts} from "../services/Getproducts";
import Newtable from "./Newtable";
const Product = () => {
  const [products, setProducts] = useState();
  useEffect(() => {
    Getdata();
  },[]);
   const Getdata =() => {
     Getproducts().then((res => {
        setProducts(res.data.products)
        

    }));

  };
  const columns = [
    {
      key: "0",
      title: "Title",
      dataIndex: "title",
    },
    {
        key: "1",
        title: "Price",
        dataIndex: "price",
      },
      {
        key: "2",
        title: "Description",
        dataIndex: "description",
      },
      {
        key: "3",
        title: "Stock",
        dataIndex: "stock",
      }

  ];
  return (
    <>
      <Newtable dataSource={products} columns={columns} />
    </>
  );
};

export default Product;
