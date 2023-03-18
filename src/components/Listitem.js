import React,{useState} from 'react'
import {List,ListItem,ListItemButton,ListItemIcon,ListItemText,Box, Collapse} from "@mui/material";
const array=["First","Second","Third","Fourth","Fifth"]
const Listitem = () => {
  const [open,setOpen]=useState()
  return (
  <>
  <Box>
    <List>
      <ListItem divider>
<ListItemButton onClick={()=>setOpen(true)}>
<ListItemIcon>{">"}</ListItemIcon>
  <ListItemText primary={"Expand List"}/>

  
</ListItemButton>
      </ListItem>
    </List>

    <Collapse in={open}>
    <List sx={{width:300,background:"grey"}}>
      {array.map((listElm)=>(
 <ListItem divider>
 <ListItemButton onClick={()=>setOpen(false)}>
     <ListItemText primary={listElm}/>
 </ListItemButton>
</ListItem>
      ))}
      
    </List>
    </Collapse>
   
  </Box>
  </>
  )
}

export default Listitem