import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 250,
    bgcolor: 'rgba(0, 0, 0, 1)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const BasicModal = (props) =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <Button onClick={handleOpen}>{props.header}</Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <Typography id="modal-modal-title" variant="h6" component="h2" align="center">
              {props.header}
            </Typography>
            <div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Names: {props.authors}
                </Typography>
            </div>
            <div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                The Project: {props.content}
                </Typography>
            </div>
            <div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                Github Link: {props.links}
                </Typography>
            </div>
            
            <Button onClick={handleClose} sx={{ pt: 5 }}>Close</Button>
          </Box>
        </Modal>
      </div>
    );
}

export default BasicModal;