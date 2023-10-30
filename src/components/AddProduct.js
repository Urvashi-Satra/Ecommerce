import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

export const AddProduct = () => {
  
  const {register, handleSubmit,formState:{errors}}  = useForm();
  const navigate = useNavigate();
   const formsubmit=(data)=>{
   console.log(data);
   axios.post("http://localhost:5000/Products" ,data)
   .then(
    
    Response=>{console.log(Response);
    navigate("/getProducts")
    }    )
   .catch(error=>console.log("Error in posting new product"));
   
   }

  return (
    <div>
      <form onSubmit={handleSubmit(formsubmit)}>
        <input type="text" {...register('name',{required:true,maxLength:30})}></input>
       
       {errors.name && errors.name.type === "required" && <span>This is required</span>}
       {errors.name && errors.name.type === "maxLength" && <span>Max Length exceeded</span>}


        <input type="number" {...register('price',{required:true})}></input>
        {errors.price && errors.price.type === "required" && <span>Price is required</span>}
        
        <input type="submit" value="Add Product" ></input>
      </form>

    </div>
  )
}
