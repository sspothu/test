import React, { useEffect, useState } from "react";
import Data from "../data/Data.js";
import Text from "./Text.jsx";
import { useLocation, useNavigate } from "react-router-dom";
// import { Addproducts } from "../services/Getproducts.js";

const Input = ({ setArray }) => {
  const navigate = useNavigate();
  const location = useLocation();
  let [data, setData] = useState(Data);
  function getValue(name) {
    let index = data.findIndex((v) => v.name === name);
    return data[index].value;
  }
  useEffect(() => {
    // Set the form data with the record data from the location state
    if (location.state) {
      setData(location.state);
    }
  }, [location.state]);
  const submithandler = (e) => {
    e.preventDefault();
    const emailreg = /^\S+@\S+\.\S+$/;
    const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9@$&*]{8,}$/;
    let password = ""
    let isValid = true;
    const updatedData = [...data];
    updatedData.forEach((item) => {
      switch (item.name) {
        case "Firstname":
        case "Lastname":
          if (item.value === "") {
            item.error = true;
            item.errorMessage = `${item.name} should not be empty`;
            isValid = false;
          } else {
            item.error = false;
            item.errorMessage = ``;
          }
          break;
        case "Email":
          if (item.value === "" || !emailreg.test(item.value)) {
            item.error = true;
            item.errorMessage = `Please provide a valid ${item.name} `;
            isValid = false;
          } else {
            item.error = false;
            item.errorMessage = ``;
          }
          break;
        case "Password":
          if (item.value === "" || !passwordReg.test(item.value)) {
            item.error = true;
            item.errorMessage = `${item.name} Should be atleast of 8 characthers`;
            isValid = false;
          } else {
            item.error = false;
            password=item.value;
            item.errorMessage = ``;
          }
          break;
        case "ConfirmPassword":
          if(item.value !== password){
            item.error = true;
            item.errorMessage = "Password Doesn't match"
            isValid = false
          }
          else{
            item.error = false
            item.errorMessage = ""
          }

        default:
          if (item.value === "") {
            item.error = true;
            item.errorMessage = `${item.name} is not valid`;
            isValid = false;
          } else {
            item.error = false;
            item.errorMessage = ``;
          }
      }
      // if (item.value === "") {
      //   item.error = true;
      //   item.errorMessage = `${item.name} should not be empty`;
      //   isValid = false;

      // }
      // else if (item.name === "email" && !item.value.includes("@")) {
      //   item.error = true;
      //   item.errorMessage = "Invalid email format";
      //   isValid = false;
      // } else if (item.name === "password" && item.value.length < 6) {
      //   item.error = true;
      //   item.errorMessage = "Password should be at least 6 characters long";
      //   isValid = false;
      // } else if (item.name === "confirm password" && item.value !== data.find((x) => x.name === "password").value) {
      //   item.error = true;
      //   item.errorMessage = "Passwords do not match";
      //   isValid = false;
      // }
      // else {
      //   item.error = false;
      //   item.errorMessage = "";
      // }
    });
    setData(updatedData);

    if (isValid) {
      let obj = {
        firstname: getValue("Firstname"),
        lastname: getValue("Lastname"),
        Email: getValue("Email"),
        Password: getValue("Password"),
        confirmpassword: getValue("ConfirmPassword"),
      };
      console.log("Form submitted successfully");
      // Addproducts(obj).then((res)=>{console.log(`Data Added Succesfully : ${res.data}`)}).catch((err)=>{console.log(err)})
      setArray((prev) => [...prev, obj]);
      navigate("/table");
    }
  };

  return (
    <>
      <div className="signup_container w-100 d-flex justify-content-center ">
        <div className="signup_form mt-5 w-50 ">
          <h3>REGISTRATION FORM</h3>
          <div className="form mt-3 mycontainer ">
            <form className="border p-3" onSubmit={submithandler}>
              {data.map((item, index) => (
                <Text key={index} item={item} />
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
  );
};

export default Input;

// import React, { useState } from "react";
// import Data from "../data/Data.js";
// import { useNavigate } from "react-router-dom";

// const Input = () => {
//   const [jsondata, setJsonData] = useState(Data);
 
//   let navigate = useNavigate();

//   const submithandler = (e) => {
//     e.preventDefault();
//     const emailreg = /^\S+@\S+\.\S+$/;
//     const passwordReg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z0-9@$&*]{8,}$/;
//     let pass = ""
//     let isValid = true;
//     const updatedData = [...jsondata];
//     updatedData.forEach((item) => {
//       switch (item.name) {
//         case "Firstname":
//         case "Lastname":
//           if (item.value === "") {
//             item.error = true;
//             item.errorMessage = `${item.name} should not be empty`;
//             isValid = false;
//           } else {
//             item.error = false;
//             item.errorMessage = ``;
//           }
//           break;
//         case "Email":
//           if (item.value === "" || !emailreg.test(item.value)) {
//             item.error = true;
//             item.errorMessage = `Please provide a valid ${item.name} `;
//             isValid = false;
//           } else {
//             item.error = false;
//             item.errorMessage = ``;
//           }
//           break;
//         case "Password":
//           if (item.value === "" || !passwordReg.test(item.value)) {
//             item.error = true;
//             item.errorMessage = `${item.name} Should be atleast of 8 characthers`;
//             isValid = false;
//           } else {
//             item.error = false;
//             pass=item.value;
//             item.errorMessage = ``;
//           }
//           break;
//         case "ConfirmPassword":
//           if(item.value !== pass){
//             item.error = true;
//             item.errorMessage = "Password Doesn't match"
//             isValid = false
//           }
//           else{
//             item.error = false
//             item.errorMessage = ""
//           }

//         default:
//           if (item.value === "") {
//             item.error = true;
//             item.errorMessage = `${item.name} is not valid`;
//             isValid = false;
//           } else {
//             item.error = false;
//             item.errorMessage = ``;
//           }
//       }
      
//     });
//     setJsonData(updatedData);

//     if (isValid) {
//       let obj = {
//         firstname: getValue("Firstname"),
//         lastname: getValue("Lastname"),
//         Email: getValue("Email"),
//         Password: getValue("Password"),
//         confirmpassword: getValue("ConfirmPassword"),
//       };
//       console.log("Form submitted successfully");
//       // Addproducts(obj).then((res)=>{console.log(`Data Added Succesfully : ${res.data}`)}).catch((err)=>{console.log(err)})
//       setArray((prev) => [...prev, obj]);
//       navigate("/table");
//     }
//   };
//   const getValue = (name) => {
//     let data = Data;
//     let find = data.findIndex((x) => x.name === name);
//     if (find !== -1) {
//       return Data[find].value;
//     }
//   };

//   return (
//     // <div
//     //   className="container"
//     //   style={{
//     //     marginTop: "30px",
//     //     border: "2px solid black",
//     //     padding: "20px",
//     //     maxWidth: "450px",
//     //     maxHeight: "720px",
//     //     borderRadius: "7px",
//     //     backgroundColor: "lightgrey",
//     //   }}
//     // >
//     //   <h4 style={{ textAlign: "center" }}>Registration Form</h4>
//     //   <div>
//     //     {formData.map((x, index) => {
//     //       return x.type === "dropdown" ? (
//     //         <div key={index}>
//     //           <label>
//     //             {x.label}:
//     //             <select
//     //               value={x.value}
//     //               onChange={(e) => handleChange(index, e.target.value)}
//     //             >
//     //               {x.options.map((v, optionIndex) => (
//     //                 <option key={optionIndex} value={v}>
//     //                   {v}
//     //                 </option>
//     //               ))}
//     //             </select>
//     //           </label>
//     //         </div>
//     //       ) : (
//     //         <div className="mb-3" key={index}>
//     //           <label>{x.label}</label>
//     //           <input
//     //             className="form-control"
//     //             key={x.key}
//     //             type={x.type}
//     //             placeholder={x.placeholder}
//     //             value={x.value}
//     //             name={x.name}
//     //             onChange={(e) => handleChange(index, e.target.value)}
//     //           ></input>
//     //           {errors[x.name] && (
//     //             <span style={{ color: "red" }}>{errors[x.name]}</span>
//     //           )}
//     //         </div>
//     //       );
//     //     })}
//     //     <button type="submit" className="btn btn-primary" onClick={myFun}>
//     //       submit
//     //     </button>
//     //   </div>
//     // </div>
//     <>
//        <div className="signup_container w-100 d-flex justify-content-center ">
//          <div className="signup_form mt-5 w-50 ">
//            <h3>REGISTRATION FORM</h3>
//            <div className="form mt-3 mycontainer "> 
//              <form className="border p-3" onSubmit={submithandler}>
//                {formData.map((item, index) => (
//                  <Text key={index} item={item} rec={location.state}/>
//                ))}
//                <div className="mt-3">
//                  <button className="btn btn-danger w-50" type="submit">
//                    submit
//                  </button>
//                </div>
//              </form>
//            </div>
//          </div>
//        </div>
//      </>
//   );
// };
// export default Input;
