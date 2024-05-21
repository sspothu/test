import React,{ useEffect,useState } from "react";
import { Getproducts } from "../services/Getproducts";
import { MinusCircleFilled, PlusCircleFilled } from "@ant-design/icons";
import NewTable from "../components/Newtable";
import DelModal from "./DelModal";
import Editmodal from "./Editmodal";

const Products = () => {
  const [data, setData] = useState([]);
  const [ids,setIds] = useState([])
  const getData = () => {
    Getproducts().then((res) => setData(res.data.products));
  };
  useEffect(() => {
    getData();
  }, []);
  const muldeletehandler = () => {
    const newData = data.filter(item => !ids.includes(item.id));
    setData(newData);
    setIds([])
  }
  const edithandler = (record, updatedData) => {
    // apijsondata ni map chesi andhulo unna item yokka id ni record lo unna id match ayithey
    // aa unna item ni modify chestunam , reason for spread operator it will override the properties
    // ippudu ee new data ni main data ki set chestham
    const newData = data.map((item) => {
      if (item.id === record.id) {
        return { ...item, ...updatedData };
      }
      return item;
    });
    setData(newData);
  };
  
  const column = [
    {
      key: "0",
      title: <input type="checkbox"></input>,
      render: (record) => {
        return (
          <>
            <input type="checkbox" 
            onClick={()=>{setIds((prev)=>[...prev,record.id])}}
            ></input>           
          </>
        );
      },
    },
    {
      key: "1",
      title: "Image",
      dataIndex: "images",
      render: (image) => (
        <img
          src={image[0]}
          alt="Product"
          style={{ width: "100px", height: "100px" }}
        />
      ),
    },
    {
      key: "2",
      title: "Title",
      dataIndex: "title",
    },
    {
      key: "3",
      title: "Brand",
      dataIndex: "brand",
    },
    {
      key: "4",
      title: "Price",
      dataIndex: "price",
    },
    {
      key: "5",
      title: "Discount Percentage",
      dataIndex: "discountPercentage",
      responsive : ["sm"],
    },
    {
      key: "6",
      title: "Actions",
      render: (record) => {
        return (
          <>
            <Editmodal record={record} editfunction ={edithandler}/>
            <DelModal
              record={record}
              apidata={data}
              setapidata={setData}
              style={{ color: "red", width: "20px", height: "20px" }}
            />
          </>
        );
      },
    },
  ];

  return (
    <>
      <div className="d-grid">
        <div
          className="d-flex justify-content-between p-4 text-white m-1"
          style={{ backgroundColor: "#3b5066" }}
        >
          <div>Manage Employees</div>
          <div className="d-flex gap-4">
            <button onClick={muldeletehandler} className="btn btn-danger mr-4 ">
              <MinusCircleFilled  /> Delete
              
            </button>
            <button className="btn btn-success">
              {" "}
              <PlusCircleFilled />
              Add Employee
              
            </button>
          </div>
        </div>
        <NewTable dataSource={data} columns={column} />
      </div>
    </>
  );
};

export default Products;
