
import { Dialog, DialogContent, DialogTitle, Divider, Typography, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import React from 'react';




const DynamicPopup = ({title, children, openPopup, onClose,maxWidth}) => {
  return (
    <Dialog open={openPopup} fullWidth maxWidth={maxWidth} >
      <DialogTitle>
        <Typography  sx={{color: '#000',fontSize:"20px" }} >
          {title}
        </Typography>
        <IconButton sx={{ float: 'right',marginTop:"-30px" }} onClick={onClose}>
          <CloseIcon />
        </IconButton>
        <Divider variant="fullWidth" sx={{ mt: 2, borderColor: '#D0D0D0' }} />
      </DialogTitle>
      <DialogContent>
        {children}
      </DialogContent>
    </Dialog>
  );
};

export default DynamicPopup;