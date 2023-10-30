import axios from 'axios';
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const DeleteProduct = () => {

   const {id} = useParams();
   const navigate = useNavigate();
   useEffect(
    ()=>{
        axios.delete(`http://localhost:5000/Products/${id}`)
        .then(
            response=>{
                console.log(response);
                navigate("/getProducts")
            }
        )
        .catch(error=>console.log(error));
    },
   [])
  return (
    <div>
       
    </div>
  )
}

export default DeleteProduct
