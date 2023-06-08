import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'
import axios from "axios"
const Login = () => {
  const [inputs, setinputs] = useState({
    name: "", email: "", password: ""
  })
  const hadleChange = (e)=>{
    setinputs((prevState)=>({
      ...prevState,
      [e.target.name] : e.target.value
    }))
  }

const semdRequest = async () =>{
  axios.Post("http://localhost:5000/api/user/login", {
    email: inputs.email ,
    password: inputs.password
  }).catch(err=>console.log(err))
}

  const handleSubmit = (e)=>{
    e.preventDefault()
    console.log(inputs)
  }
  const [isSignup, setisSignup] = useState(false)
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box display={"flex"} flexDirection={"column"} alignItems={"center"} justifyContent={"center"} boxShadow={"10px 10px 10px 10px #ccc "} margin={'auto'} padding={3} marginBottom={6} marginTop={6}>
          <Typography>
            {isSignup ? "SignUp" : "Login"}
          </Typography>
          {(isSignup) &&
            <TextField name = "name" onChange={hadleChange} value={inputs.name} type='text' placeholder='Name' sx={{ borderRadius: 2, margin: 1 }} margin='normal'></TextField>}
          <TextField name = "email" onChange={hadleChange} value={inputs.email} type='email' placeholder='email' sx={{ borderRadius: 7, margin: 1 }} margin='normal'></TextField>
          <TextField  name = "password" onChange={hadleChange} value={inputs.password} type='password' placeholder='password' sx={{ borderRadius: 7, margin: 1 }} margin='normal'></TextField>
          <Button type= "submit" sx={{ borderRadius: 7, margin: 1 }} variant='contained'>Submit</Button>
          <Button onClick={() => setisSignup(!isSignup)} sx={{ borderRadius: 7, margin: 1 }} margin='normal' variant='contained'>Chnge to {isSignup ? "Login " : "signup"}</Button>

        </Box>
      </form>
    </div>
  )
}

export default Login
