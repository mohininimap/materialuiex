import * as React from 'react';
import Box from '@mui/material/Box';
import {Typography} from '@mui/material';

export default function Typographyex() {
  return (
    <>
      <Typography>This is typography example</Typography>
      <Typography varient="h5" sx={{color:'red',border:"1px solid blue",borderRadius:"2px"}}>Text-1</Typography>

    </>
  );
}