import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab, Stack } from '@mui/material';
import param from '../themes/main/main.theme.param';

function MobileNav(props) {
  return (
    <Box sx={{ width: '100%', height: 70, top: 0, position: 'fixed', backgroundColor: param.BG_COLOR }}>
      <Box sx={{ ml: 19, mt: 17 }} >
        <Stack direction="row" spacing={13} alignItems="center">
          <Link to="/">
            <Box component="img" sx={{ height: 26, width: 26, mt: 6 }} src="back.svg" />
          </Link>
          <Typography variant="h5">Home Page</Typography>
        </Stack>
      </Box>
    </Box>
  );
}

export default MobileNav;
