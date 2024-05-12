import React from 'react';
import { Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Stack, Typography, Divider, Container } from '@mui/material';
import Rating from '@mui/material/Rating';

function ReviewDialog({ open, onClose, onConfirm, title, content }) {

    console.log(content);
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

        {
            content ? content.map((review, index) => {
                return (
                      <DialogContent>
                        <Stack direction='row' width='35vw' justifyContent='space-between' marginTop='2vh' alignItems='center'>
                            <img className="profile-image2 object-cover" src="/traveller.png" alt="" />
                            <DialogContentText marginBottom='3vh' style={{color:'#26626A', fontWeight:'bolder'}}>{review.traveller.firstName+' '+review.traveller.lastName}</DialogContentText>
                            <Rating name="read-only" value={review.rating} readOnly />
                        </Stack>
                        <Typography style={{fontWeight:'bolder', marginInline:'2vw'}}>{review.review}</Typography>
                        {/* <Divider style={{backgroundColor:'black', width:'30vw'}}></Divider> */}
                        {/* <Container style={{backgroundColor:'white', height:'1vh', width:'30vw'}}></Container> */}
                      </DialogContent>
                )}) : <div></div>
        }
    </Dialog>

  );
}

export default ReviewDialog;
