import React,{useState} from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Dialogueex() {
const [open,setOpen]=useState(false);
 
  return (
    <div>
      <Button onClick={()=>setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onClose={()=>setOpen(false)}>
          <DialogTitle>This is my Dialogue</DialogTitle>
          <DialogContent>
          <DialogContentText>
            A dialogue 
          </DialogContentText>
          </DialogContent>
         <DialogActions>
          <Button onClick={()=>setOpen(false)}>Cancel</Button>
         
          </DialogActions>          
      </Dialog>
     
    </div>
  );
}