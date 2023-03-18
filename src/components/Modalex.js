import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import {Modal,Box,Typography} from "@mui/material";

export default function Modalex() {
const [open,setOpen]=useState(false);
 
  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Open Modal</Button>
      <Modal open={open} onClose={()=>setOpen(false)}>
       <Box position="absolute" top="50%" left="50%">
        <Typography>It is a Modal</Typography>
        <Button onClick={()=>setOpen(false)}>Click Me</Button>
       </Box>
      </Modal>
     
    </div>
  );
}