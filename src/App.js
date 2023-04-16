import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Header from './Header'
import './Style.css'
import Login from "./Login";
import Register from "./Register";
import AddProduct from "./AddProduct";
import UpdateProduct from "./UpdateProduct";




function App() {
    return (
        <div className="App">

            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="login" element={<Login />}></Route>
                    <Route path="register" element={<Register />}></Route>
                    <Route path="addproduct" element={<AddProduct />}></Route>
                    <Route path="update" element={<UpdateProduct />}></Route>
                </Routes>


            </BrowserRouter>
        </div>


    );
}


export default App;