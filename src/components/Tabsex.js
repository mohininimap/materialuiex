import React,{useState} from 'react'
import {Tabs,Tab,Toolbar,AppBar} from "@mui/material"
const Tabsex = () => {
    const [value,setValue]=useState();
  return (
  <>
 
    <AppBar>
    <Toolbar>
    <Tabs indicatorColor="secondary"
  textColor='secondary'
  value={value} onChange={(e,val)=>setValue(val)}>
    <Tab label="First"></Tab>
    <Tab label="Second"></Tab>
    <Tab label="Third"></Tab>
    </Tabs>
    </Toolbar>
    </AppBar>
   
   
 
  </>
  )
}

export default Tabsex