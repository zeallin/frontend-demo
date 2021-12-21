import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';

function SearchResultItem(props) {
  return (
    <Box sx={{ width: props.isSmallScreen ? 'auto' : 219, }}>
      <Box component="img" sx={{ height: props.isSmallScreen ? '222.67px' : 146, width: '100%', backgroundColor: 'rgba(255, 255, 255, 0.06)' }} src={''}>

      </Box>
      <Stack spacing={0}>
        <Typography variant="tag_title">Hard</Typography>
        <Typography variant="tag_count">350 Questions</Typography>
      </Stack>
    </Box>
  );
}

export default SearchResultItem;
