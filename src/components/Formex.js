import React,{useState} from 'react'
import {TextField,Typography,FormGroup,FormControlLabel,Checkbox,Button} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

const Formex = () => {
    const [inputs,setInputs]=useState({
     name:"",
     email:"",
     password:"",
     subscribe:false,
     age:0
    });    

    const handleChange=(e)=>{
 setInputs((prevState)=>({
    ...prevState,
    [e.target.name]:e.target.value
 }))
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(inputs)
       }
  return (
    <div>
      <form style={{display:'flex',flexDirection:'column'}} onSubmit={handleSubmit}>
      <TextField type={'text'} 
        sx={{margin:3}} placeholder='Name' 
        variant='outlined'
        name="name"
        value={inputs.name}
        onChange={handleChange}
        />
        <TextField 
        type={'email'}  
        sx={{margin:3}} placeholder='Email' 
        variant='standard'
        name="email"
        value={inputs.email}
        onChange={handleChange}
        />
        <TextField 
        type={'password'} 
        sx={{margin:3}} placeholder='Password'
         variant='filled'
         name="password"
         value={inputs.password}
         onChange={handleChange}
         />

<FormGroup>
      <FormControlLabel 
      control={<Checkbox onChange={()=>setInputs((prev)=>({
        ...prev,
        subscribe:!inputs.subscribe
      }))}/>} 
      label="Subscribe To Newsletter" />
    </FormGroup>


   
      <FormControl fullWidth>
        <InputLabel>Age</InputLabel>
        <Select
        name="age"
          value={inputs.age}
          label="Age"
          onChange={handleChange}
        >
          <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem>
        </Select>
      </FormControl>
  

    <Button type="submit">Submit </Button>
        </form>        
       
    </div>
  )
}

export default Formex