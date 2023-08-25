import {
  Dialog,
  DialogContent,
  DialogTitle,
  Divider,
  IconButton,
} from '@mui/material';
import React from 'react';
import { STATIC_ASSETS } from '../../global/staticAssets';

const CustomDialog = (props) => {
  const { open, setOpen, title, children, maxWidth } = props;
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Dialog maxWidth={maxWidth} open={open} onClose={handleClose}>
      <DialogTitle>{title}</DialogTitle>
      <IconButton
        aria-label="close"
        onClick={handleClose}
        style={{ position: 'absolute', right: 8, top: 8 }}
      >
        <STATIC_ASSETS.CLOSE_ICON />
      </IconButton>
      <Divider />
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
};

export default CustomDialog;
