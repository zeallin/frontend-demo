import React from 'react'
import { Box, Button, TextField, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import theme from '../../themes/main/main.theme';
import StyledSlider from '../styled-slider';


import Util from '../../tools/util';

const BUTTON_WIDTH = '335px';
const MARGIN_TOP_BODY = 88;
const MARGIN_LEFT_BODY = 68;
const MARGIN_BOTTOM_H4 = 89;
const MARGIN_BOTTOM_H5 = 37;

const BUTTON_OUTLINED_WIDTH = '60px';
const BUTTON_CONTAINED_WIDTH = '52px';
const TEXT_FIELD_WIDTH = '725px';



function ComponentView() {

  let buttonStyle = { width: '335px' };
  let buttonHoverStyle = Util.deepMerge(
    { width: '343px' },
    theme.components.MuiButton.variants[0].style["&:hover"]);

  let buttonOutlinedStyle = { maxWidth: BUTTON_OUTLINED_WIDTH, minWidth: BUTTON_OUTLINED_WIDTH };
  let buttonOutlinedHoverStyle = Util.deepMerge(
    buttonOutlinedStyle,
    theme.components.MuiButton.styleOverrides.outlined["&:hover"]);

  let buttonContainedStyle = { maxWidth: BUTTON_CONTAINED_WIDTH, minWidth: BUTTON_CONTAINED_WIDTH, height: 25 };
  let buttonContainedHoverStyle = Util.deepMerge(
    { maxWidth: BUTTON_OUTLINED_WIDTH, minWidth: BUTTON_OUTLINED_WIDTH },
    theme.components.MuiButton.styleOverrides.contained["&:hover"]);

  return (
    <Box sx={{ pt: MARGIN_TOP_BODY, pl: MARGIN_LEFT_BODY }}>
      <Box sx={{ mt: 1, mb: MARGIN_BOTTOM_H4 }}><Typography variant="h4_bold" >Component</Typography></Box>
      <Box sx={{ mb: MARGIN_BOTTOM_H5 - 1 }}><Typography variant="h5" >Button</Typography></Box>
      <Stack direction="row" spacing={41}>
        <Stack spacing={13}>
          <Typography variant="button">Normal</Typography>
          <Button variant="general" sx={buttonStyle}>Button</Button>
        </Stack>
        <Stack spacing={13}>
          <Typography variant="button">HOVER</Typography>
          <Button variant="general" sx={buttonHoverStyle} >Button</Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={40} sx={{ mt: 80 }}>

        <Typography variant="body2_light" sx={{ pt: 29 }} >Outlined</Typography>

        <Stack spacing={11}>
          <Typography variant="button" sx={{ pl: 11 }}>Normal</Typography>
          <Box sx={{ pl: 9 }}>
            <Button variant="outlined" sx={buttonOutlinedStyle}>Button</Button>
          </Box>
        </Stack>
        <Stack spacing={11}>
          <Typography variant="button" sx={{ pl: 16.5 }}>Hover</Typography>
          <Box sx={{ pl: 16.5 }}>
            <Button variant="outlined" sx={buttonOutlinedHoverStyle} >Button</Button>
          </Box>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={40} sx={{ mt: 25 }}>
        <Typography variant="body2_light" sx={{ pt: 27 }} >Contained</Typography>
        <Stack spacing={12}>
          <Typography variant="button" sx={{ pl: 1.5 }}>Normal</Typography>
          <Box sx={{ pl: 1 }}>
            <Button variant="contained" sx={buttonContainedStyle}>Button</Button>
          </Box>
        </Stack>
        <Stack spacing={9}>
          <Typography variant="button" sx={{ pl: 16.5 }}>Hover</Typography>
          <Box sx={{ pl: 16 }}>
            <Button variant="contained" sx={buttonContainedHoverStyle} >Button</Button>
          </Box>
        </Stack>
      </Stack>


      <Box sx={{ mt: 109, mb: MARGIN_BOTTOM_H5 - 7 }}><Typography variant="h5" >Input</Typography></Box>
      <Box sx={{ ml: -1 }}>
        <Box sx={{ mb: 4 }}><Typography variant="button">Normal</Typography></Box>
        <TextField variant="outlined" placeholder="Keyword" sx={{ width: TEXT_FIELD_WIDTH, minHeight: 60, maxHeight: 60 }} />
        <Box sx={{ mt: 42, mb: 4 }}><Typography variant="button">Focused</Typography></Box>
        <TextField variant="outlined" sx={{ width: TEXT_FIELD_WIDTH, input: { borderColor: '#FF9B33' } }} value="Key " />
      </Box>

      <Box sx={{ mt: 138, mb: MARGIN_BOTTOM_H5 - 6 }}><Typography variant="h5" >Slider</Typography></Box>
      <Box sx={{ width: 733, ml: 1 }} >
        <StyledSlider defaultValue={15} />
      </Box>
      <Box sx={{ mt: 44, width: 733, ml: 1 }} >
        <StyledSlider defaultValue={50} />
      </Box>

      <Box sx={{ height: 50 }}></Box>
    </Box>
  );
}

export default ComponentView;
