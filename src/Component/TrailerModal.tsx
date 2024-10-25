import React from 'react';
import YouTube from 'react-youtube';
import { Modal, Box, IconButton, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

interface TrailerModalProps {
  open: boolean;
  onClose: () => void;
  videoId: string; // The YouTube video ID
}

const TrailerModal: React.FC<TrailerModalProps> = ({ open, onClose, videoId }) => {
  const opts = {
    height: '400',
    width: '100%',
    playerVars: {
      autoplay: 1, // Auto-play the video when ready
    },
  };

  return (
    <Modal open={open} onClose={onClose}>
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 2,
          borderRadius: '8px',
          outline: 'none',
          maxWidth: '800px',
          width: '90%', // Responsive width
        }}
      >
        <IconButton onClick={onClose} sx={{ position: 'absolute', top: 10, right: 10 }}>
          <CloseIcon />
        </IconButton>
        <Typography variant="h6" component="h2" mb={2}>
          Trailer
        </Typography>
        <YouTube videoId={videoId} opts={opts} />
      </Box>
    </Modal>
  );
};

export default TrailerModal;
