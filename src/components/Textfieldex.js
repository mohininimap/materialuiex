import React,{useState} from 'react'
import {TextField,Typography} from "@mui/material";

const Textfieldex = () => {
    const [name,setName]=useState("Mohini")    
  return (
    <div>
        <TextField type={'text'} 
        sx={{margin:3}} placeholder='Name' 
        variant='outlined'
        value={name} onChange={(e)=>setName(e.target.value)}
        />
        <TextField type={'email'} sx={{margin:3}} placeholder='Email' variant='standard'/>
        <TextField type={'password'} sx={{margin:3}} placeholder='Password' variant='filled'/>
      <Typography>Name is : {name}</Typography>
    </div>
  )
}

export default Textfieldex