import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Stack } from '@mui/material';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

function DeleteDialog({ open, onClose, onConfirm, title, content }) {
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
        <DialogTitle>{title} </DialogTitle>
        {/* <DeleteOutlineIcon sx={{color:'red'}}/> */}
      <DialogContent>
        <DialogContentText>{content}</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} style={{color:'white'}} variant='outlined'>
          Cancel
        </Button>
        <Button onClick={onConfirm} style={{backgroundColor:'#A15D48', color:'white'}} autoFocus variant='contained'>
          Confirm
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default DeleteDialog;
