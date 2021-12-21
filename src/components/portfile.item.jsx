import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';

function PortfileItem(props) {

  const uiGetFollowBtn = (isFollowing) => {
    if (isFollowing) {
      return (
        <Button variant="contained" sx={{ float: 'right' }} >Following</Button>
      );
    } else {
      return (
        <Button variant="outlined" sx={{ float: 'right' }}>Follow</Button>
      );
    }

  }

  return (
    <Box>

      <Box sx={{ float: 'left', width: 40, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '5px', border: '1px solid #F8F8F8', boxSizing: 'border-box' }}></Box>
      <Stack sx={{ float: 'left', ml: 15 }} >
        <Typography variant="body1">Hard</Typography>
        <Typography variant="body2" sx={{ opacity: 0.5 }}>350 Questions</Typography>
      </Stack>

      {uiGetFollowBtn(props.isFollowing)}





    </Box>
  );
}

export default PortfileItem;
