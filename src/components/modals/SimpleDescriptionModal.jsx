import React from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import './SimpleDescriptionModal.css';

const SimpleDescriptionModal = ({show, handleClose, title, description}) => {

  return (
    <Modal open={show} onClose={handleClose}>
      <Box className='simple-modal-box'>
        <h3 className='simple-modal-title'>
          {title}
        </h3>
        {description}
      </Box>
    </Modal>
  );
};

export default SimpleDescriptionModal;