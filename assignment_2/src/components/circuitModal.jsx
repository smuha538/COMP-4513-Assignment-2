import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { MapContainer, TileLayer, Marker } from 'react-leaflet'

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 800,
    height: 400,
    bgcolor: 'rgba(0, 0, 0, 1)',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

const CircuitModal = (props) =>
{
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
    return (
      <div>
        <a onClick={handleOpen}>{props.header}</a>
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
                <div className='inline-block'>
                    <img src="" alt="" />
                </div>
                <div className='inline-block'>
                    <MapContainer center={props.position} zoom={13} scrollWheelZoom={false}>
                        <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                        />
                        <Marker position={props.position}></Marker>
                    </MapContainer>
                </div>
            </div>
            <div>
                <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                {props.content}
                </Typography>
            </div>
            
            <Button onClick={handleClose} sx={{ pt: 5 }}>Close</Button>
            <Button onClick={handleClose} sx={{ pt: 5 }}>Favourite</Button>            
          </Box>
        </Modal>
      </div>
    );
}

export default CircuitModal;