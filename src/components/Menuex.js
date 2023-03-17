import React,{useState} from 'react'
import {Menu, MenuItem} from "@mui/material";
import {Button} from "@mui/material";

function Menuex() {
    const [anchorElm,setAnchorElm]=useState(null);
    const [open,setOpen]=useState(false)

    const handleClose=()=>{
        setAnchorElm(null);
        setOpen(false)
    }

    const handleClick=(e)=>{
        setAnchorElm(e.currentTarget)
        setOpen(true)
    }
  return (
   <>
   <Button variant="contained" onClick={handleClick}></Button>
   <Menu anchorEl={anchorElm} open={open} onClose={handleClose}>
 <MenuItem onClick={handleClose}>Profile</MenuItem>
 <MenuItem onClick={handleClose}>Balance</MenuItem>
 <MenuItem onClick={handleClose}>Logout</MenuItem>
   </Menu>
   </>
  )
}

export default Menuex