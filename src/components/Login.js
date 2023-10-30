import axios from 'axios';
import React from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

const Login = () => {
 
 const {register , handleSubmit,formState:{errors}} = useForm();
const navigate=useNavigate();
 const handleLogin=(data)=>{
    axios.get(`http://localhost:5000/Users/?emailId=${data.emailId}`).then(
        Response=>{
            console.log(Response);
            const userDetails=Response.data[0];
            if(userDetails !=null){
            if(userDetails.password===data.password){
                console.log("Success Login");
                sessionStorage.setItem("userId",userDetails.id);
                sessionStorage.setItem("email",userDetails.emailId);
                sessionStorage.setItem("role",userDetails.role);
                if(userDetails.role ==="admin"){
                    console.log("redirect to admin");
                    navigate("/getProducts");

                }
                else{
                    console.log("Redirecting to user Dashboard");
                    navigate("/userDashboard");
                }

            }
            else{
                alert("Invalid user password");
            }
            }
            else{
                alert("Please enter valid creditials");
            }
        }
    )
 }
    return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit(handleLogin)}>

      <input type="text" {...register('emailId',{required:true,maxLength:30})}></input>
       
       {errors.emailId && errors.emailId.type === "required" && <span>Email is required</span>}

       <input type="password" {...register('password',{required:true,maxLength:30})}></input>
       {errors.password && errors.password.type === "required" && <span>Password is required</span>}
        <input type="submit" value="Login"></input>
      </form>
      
    </div>
  )
}

export default Login
