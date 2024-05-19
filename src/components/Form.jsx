import React, { useState } from 'react'
import {useNavigate} from "react-router-dom"

const Form = ({setArray}) => {
    const navigate = useNavigate()
    const [userdetails,setUserDetails]=useState({
        Name:"",
        Email:"",
        Address:"",
        Phone:"",

    })
    const changehandler = (e)=>{
        setUserDetails({...userdetails,[e.target.name]:e.target.value})
    }
    const submithandler = (e) => {
        e.preventDefault()
        console.log(userdetails)
        setUserDetails({
            Name:"",
            Email:"",
            Address:"",
            Phone:"",
        });
        setArray((prev)=>[...prev,userdetails])
        navigate("/emptable")
        

    }
  return (
    <div className="signup_container d-flex justify-content-center">
  <div className="signup_form mt-5 w-75">
    <div className="form mt-3 mycontainer">
      <form onSubmit={submithandler}>
        <div className="mb-3 row">
          <label htmlFor="Name" className="col-sm-3 col-form-label">Name :</label>
          <div className="col-sm-9">
            <input type='text' id='Name' name='Name' className="form-control" onChange={changehandler} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Email" className="col-sm-3 col-form-label">Email :</label>
          <div className="col-sm-9">
            <input type='text' id="Email" name='Email' className="form-control" onChange={changehandler} />
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Address" className="col-sm-3 col-form-label">Address :</label>
          <div className="col-sm-9">
            <textarea type='text' id='Address' name='Address' className="form-control" onChange={changehandler}></textarea>
          </div>
        </div>
        <div className="mb-3 row">
          <label htmlFor="Phone" className="col-sm-3 col-form-label">Phone :</label>
          <div className="col-sm-9">
            <input type='text' id='Phone' name='Phone' className="form-control" onChange={changehandler} />
          </div>
        </div>
        <div className="mt-3 d-flex justify-content-center">
          <button className='btn btn-danger w-50'>Submit</button>
        </div>
      </form>
    </div>
  </div>
</div>

    
  )
}

export default Form