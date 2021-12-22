import React from 'react'
import { Box, Typography, Stack } from '@mui/material';

function SearchResultItem(props) {

  return (
    <Box sx={{ width: props.isSmallScreen ? 'auto' : 219, }}>
      <Box component="img" sx={{ height: props.isSmallScreen ? '222.67px' : 146, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.06)' }} src={props.data.avater}>

      </Box>
      <Stack spacing={0} sx={{ mt: props.isSmallScreen ? 15 : 7 }}>
        <Typography variant="tag_title">{props.data.name}</Typography>
        <Typography variant="tag_count">by {props.data.username}</Typography>
      </Stack>
    </Box>
  );
}

export default SearchResultItem;
