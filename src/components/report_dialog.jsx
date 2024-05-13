import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Stack } from '@mui/material';
import { Link } from 'react-router-dom';

function ReportDialog({ open, onClose, onConfirm, title, content }) {
  return (
    <Dialog 
        open={open} 
        onClose={onClose}
        PaperProps={{
            style: {
              backgroundColor: '#77A6AC',
              color: 'black',
            },
        }}
    >
        <DialogTitle alignContent='center'>REPORTS </DialogTitle>
        {/* <DeleteOutlineIcon sx={{color:'red'}}/> */}
      <DialogContent>
        <DialogContentText marginBottom='3vh' style={{color:'black'}}>You can now view and download your reports</DialogContentText>
        <Stack direction='row' width='20vw' justifyContent='space-between' marginBottom='2vh'>
            <DialogContentText>Occupancy report</DialogContentText>
            <Button style={{backgroundColor:'#A15D48', color:'white'}}>
              <Link to={'/propertyOwner/report'} style={{textDecoration:'none', color:'white'}}>VIEW</Link>
            </Button>
        </Stack>
        {/* <Stack direction='row' width='20vw' justifyContent='space-between'>
            <DialogContentText>Historical Booking Trends</DialogContentText>
            <Button style={{backgroundColor:'#A15D48', color:'white'}}>VIEW</Button>
        </Stack> */}
      </DialogContent>
    </Dialog>
  );
}

export default ReportDialog;
