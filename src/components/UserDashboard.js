import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { Products } from './Products';
import {CartContext} from '../context/CartContext'

const UserDashboard = () => {
const [products,setProducts]=useState([]);
const {addtoCart}=useContext(CartContext);
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

  return (
    <div className='row'>
        {products.map((product,index)=>
       <div className="card" style={{width: '18rem'}}>
      <img src={product.img} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <p className="card-text">{product.price}</p>
        <a href="#" className="btn btn-primary" onClick={()=>addtoCart(product)}>Add to Cart</a>
      </div>
      </div>
      )}
    </div>
  )
}

export default UserDashboard
