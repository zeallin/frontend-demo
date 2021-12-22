import React from 'react'
import { Box, Button, Typography, Stack } from '@mui/material';
import theme from '../themes/main/main.theme';
import Util from '../tools/util';

const BUTTON_WIDTH = 60;
const BUTTON_WIDTH_FOLLOWING = 76;
const BUTTON_HEIGHT_FOLLOWING = 28;

let followerStyle = { mt: 5, mr: -3, minWidth: BUTTON_WIDTH, maxWidth: BUTTON_WIDTH, float: 'right' }

let followingStyle = Util.deepMerge(
  {
    mt: 5, mr: -2,
    minWidth: BUTTON_WIDTH_FOLLOWING, maxWidth: BUTTON_WIDTH_FOLLOWING,
    maxHeight: BUTTON_HEIGHT_FOLLOWING, maxHeight: BUTTON_HEIGHT_FOLLOWING,
    float: 'right'
  },
  theme.components.MuiButton.styleOverrides.outlined["&:hover"]);

function PortfileItem(props) {

  const uiGetFollowBtn = (isFollowing) => {
    if (isFollowing) {
      return (
        <Button sx={followingStyle} variant="outlined" >Following</Button>
      );
    } else {
      return (
        <Button sx={followerStyle} variant="outlined">Follow</Button>
      );
    }
  }

  return (
    <Box >
      <Box sx={{ float: 'left', width: 40, height: 40, backgroundColor: 'rgba(255, 255, 255, 0.06)', borderRadius: '5px', border: '1px solid #F8F8F8', boxSizing: 'border-box' }}></Box>
      <Stack sx={{ float: 'left', ml: 15, mt: -3 }} >
        <Typography variant="body1">{props.data.name}</Typography>
        <Typography variant="body2" sx={{ opacity: 0.5, mt: 1 }}>@{props.data.username}</Typography>
      </Stack>

      {uiGetFollowBtn(props.data.isFollowing)}
    </Box>
  );
}

export default PortfileItem;
