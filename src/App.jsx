
import './App.css'
import {BrowserRouter,Routes,Route} from "react-router-dom"

import Home from './pages/Home';
import Input from './common/Input';
import Header from './components/Header';
import Product from './components/Product';
import TableComponent from './components/Table';
import { useState } from 'react';
import EmpTable from './components/EmpTable';
import Form from './components/Form';
import ProductTable from "./components/ProductTable"
function App() {
  
  const[array,setArray] = useState([])

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route element={<Home/>} path='/' />
      <Route element={<Input setArray={setArray}/>}  path='/loginform'/>
      <Route element={<TableComponent  array={array}/>} path='/table'/>
      <Route element={<Product/>} path='/product'/>
      {/* <Route element={<Form/>} path='/empform'/> */}
      {/* <Route element={<EmpTable />} path='/emptable'/> */}
      <Route element={<Form setArray={setArray}/>} path='/empform'/>
      <Route element={<EmpTable array={array}/>} path='/emptable'/>
      <Route element={<ProductTable/>} path='/productstable'/>
    </Routes>
    
    </BrowserRouter>
      
    
    
    
    
    
  )
}

export default App
