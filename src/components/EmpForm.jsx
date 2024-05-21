import React, { useState } from "react";
import { Products } from "../data/Data";
import Text from "../common/Text";

const EmpForm = ({record}) => {
  const [data, setData] = useState(Products);
  const submithandler = (e) => {
    e.preventDefault();
    const productData = {
      title: getMethod("Title"),
      price: getMethod("Price"),
      brand: getMethod("Brand"),
      discountPercentage: getMethod("DiscountPercentage"),
      thumbnail: getMethod("Thumbnail"),
    };
    function getMethod(name) {
      let [ele] = data.filter((l) => l.name === name);
      return ele.value;
    }
    let upData = data.map((el) => {
      if (el.id === record.id) {
        return productData;
      } else {
        return el;
      }
    });

    setData(upData); 



  };
  const handleChange = (value, item) => {
    // Find the index of the item in the data array
    const index = data.findIndex((x) => x.name === item.name);
    // Create a copy of the data array
    const updatedData = [...data];
    // Update the value of the item in the copy
    updatedData[index].value = value;
    // Set the updated data array as the new state
    setData(updatedData);
  };

  return (
    <>
      <>
        <div className="signup_container w-100 d-flex justify-content-center ">
          <div className="signup_form mt-5 w-50 ">
            <h3>Edit Employee</h3>
            <div className="form mt-3 mycontainer ">
              <form className="border p-3" onSubmit={submithandler}>
                {Products.map((item, index) => (
                  <Text
                    key={index}
                    item={item}
                    edit={record}
                    onChange={handleChange}
                  />
                ))}
                <div className="mt-3">
                  <button className="btn btn-danger w-50" type="submit">
                    submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </>
    </>
  );
};

export default EmpForm;
