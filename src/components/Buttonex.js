import React from 'react';
import {Button} from "@mui/material";
const Buttonex = () => {
  return (
   <>
   <Button onClick={()=>alert("function call")} color="success" sx={{margin:3}} size="large" variant='contained'>First</Button>
   <Button onClick={()=>alert("function call")} color="error" sx={{margin:3}} size="medium" variant='outlined'>Second</Button>
   <Button onClick={()=>alert("function call")} color="info" sx={{margin:3}} size="small" variant='text'>Third</Button>
   </>
  )
}

export default Buttonex