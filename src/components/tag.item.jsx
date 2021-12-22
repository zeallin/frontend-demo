import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';

function TagItem(props) {
  return (
    <Box sx={{ maxHeight: 199, overFlow: 'hidden' }}>
      <Box sx={{ height: 150, backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '10px', mb: 11, }}>
        <Box sx={{
          whiteSpace: 'nowrap',
          overflow: 'hidden',
          textOverflow: 'ellipsis',
          fontStyle: 'normal',
          fontWeight: 700,
          fontSize: '24px',
          lineHeight: '150%',
          textTransform: 'capitalize',
          maxWidth: 135, position: 'absolute', mt: 86, ml: 10, height: 50, pl: 10, pr: 10, pt: 4, pb: 7, border: '4px solid #FFFFFF', boxSizing: 'border-box', borderRadius: '8px'
        }}>
          <Typography variant="h5_bold" sx={{ mx: 0, textAlign: 'center' }}>{props.data.name}</Typography>
        </Box>
      </Box>
      <Stack spacing={0}>
        <Typography variant="tag_title">{props.data.name}</Typography>
        <Typography variant="tag_count">{props.data.count} Questions</Typography>
      </Stack>
    </Box>
  );
}

export default TagItem;
