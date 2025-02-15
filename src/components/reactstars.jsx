import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import '../components/components.css';

const labels = {
  0.5: '',
  1: '',
  1.5: '',
  2: '',
  2.5: '',
  3: '',
  3.5: '',
  4: '',
  4.5: '',
  5: '',
};

export default function TextRating() {
  const value = 0;

  return (
    <Box sx={{ width: 200, display: 'flex', alignItems: 'center', justifyContent:'space-around', background:'white' }} className="star_rating">
      <Rating
        name="text-feedback"
        value={value}
        readOnly
        precision={1}
        emptyIcon={<StarIcon style={{ opacity: 100, color:'#8f1718', background:'white' }} fontSize="inherit" className='stars' />}
      />
      <Box sx={{ ml: 2 }}>{labels[value]}</Box>
    </Box>
  );
}
