import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom'
export const Products =() =>{
    // const products=[
    //     {id:1001,name:"Mobile",price:50000},
    //     {id:1002,name:"Mobile",price:60000},
    //     {id:1003,name:"Mobile",price:70000},
    //     {id:1004,name:"Mobile",price:80000}
    
    // ]

const [products,setProducts]=useState([]);

    useEffect(()=>{

axios.get(" http://localhost:5000/Products")
.then(
    response=>{
        console.log(response.data);
    setProducts(response.data);
    }
)
.catch(error=>console.log("Error"))
    },[])
return(
    <div>
        <h1>Product Details</h1>
        <table className="table">
            <thead>
                <tr>
                <th scope="col">Id</th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
                 </tr>
            </thead>
        <tbody>
        {
        products.map((product,index)=>
        <tr>
             <td>{product.id}</td>
             <td>{product.name}</td>
             <td>{product.price}</td>
             
             <td><Link to={`/editProduct/${product.id}`}>Edit</Link></td>
             <td><Link to={`/deleteProduct/${product.id}`}>Delete</Link></td>
             </tr>
        )}
        </tbody>
        </table>
    </div>
)
}