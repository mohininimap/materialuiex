import React,{useState} from 'react'
import {AppBar,Typography,Button,Toolbar    } from "@mui/material";

function Appbarex() {
  return (
   <>
  <AppBar>
    <Toolbar>
    <Typography>LOGO</Typography>
    <Button sx={{marginLeft:"auto"}} color="warning">Hello</Button>
    </Toolbar>
   
  
  </AppBar>
   </>
  )
}

export default Appbarex