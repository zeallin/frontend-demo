import React from 'react'
import { Box, Button } from '@mui/material';
import Stack from '@mui/material/Stack';
import theme from '../../themes/main.theme';
import {
  AgHeading4Bold,
  AgHeading5,
  AgBody2,
  AgButton
} from '../styled-typography';
import { StyledTextField, StyledFocusTextField } from '../styled-textfield';
import { StyledSlider } from '../styled-slider';


import Util from '../../tools/util';

const BUTTON_WIDTH = '335px';
const MARGIN_TOP_BODY = 88;
const MARGIN_LEFT_BODY = 68;
const MARGIN_BOTTOM_H4 = 89;
const MARGIN_BOTTOM_H5 = 37;

const BUTTON_SMALL_WIDTH = '60px';
const TEXT_FIELD_WIDTH = '725px';



function ComponentView() {

  let buttonStyle = { width: BUTTON_WIDTH };

  let buttonHoverStyle = {};
  try {
    buttonHoverStyle = theme.components.MuiButton.variants[0].style["&:hover"];
  } catch (ex) {
    console.log('Error reading button hover style from theme');
  }
  buttonHoverStyle = Util.deepMerge(buttonStyle, buttonHoverStyle);

  let buttonOutlinedStyle = { maxWidth: BUTTON_SMALL_WIDTH, minWidth: BUTTON_SMALL_WIDTH };
  let buttonOutlinedHoverStyle = {};
  try {
    buttonOutlinedHoverStyle = theme.components.MuiButton.styleOverrides.outlined["&:hover"];
  } catch (ex) {
    console.log('Error reading button hover style from theme');
  }
  buttonOutlinedHoverStyle = Util.deepMerge(buttonOutlinedStyle, buttonOutlinedHoverStyle);

  let buttonContainedStyle = { maxWidth: 52, minWidth: 52, height: 25 };
  let buttonContainedHoverStyle = {}
  try {
    buttonContainedHoverStyle = theme.components.MuiButton.styleOverrides.contained["&:hover"];
  } catch (ex) {
    console.log('Error reading button hover style from theme');
  }
  buttonContainedHoverStyle = Util.deepMerge(buttonContainedHoverStyle, { maxWidth: BUTTON_SMALL_WIDTH, minWidth: BUTTON_SMALL_WIDTH });

  return (
    <Box sx={{ pt: MARGIN_TOP_BODY, pl: MARGIN_LEFT_BODY }}>
      <Box sx={{ mt: 1, mb: MARGIN_BOTTOM_H4 }}><AgHeading4Bold>Component</AgHeading4Bold></Box>

      <Box sx={{ mb: MARGIN_BOTTOM_H5 - 1 }}><AgHeading5 >Button</AgHeading5></Box>
      <Stack direction="row" spacing={41}>
        <Stack spacing={13}>
          <AgButton>Normal</AgButton>
          <Button variant="general" sx={buttonStyle}>Button</Button>
        </Stack>
        <Stack spacing={13}>
          <AgButton>HOVER</AgButton>
          <Button variant="general" sx={buttonHoverStyle} >Button</Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={41} sx={{ mt: 80 }}>
        <AgBody2>Outlined</AgBody2>
        <Stack spacing={13}>
          <AgButton>Normal</AgButton>
          <Button variant="outlined" sx={buttonOutlinedStyle}>Button</Button>
        </Stack>
        <Stack spacing={13}>
          <AgButton>HOVER</AgButton>
          <Button variant="outlined" sx={buttonOutlinedHoverStyle} >Button</Button>
        </Stack>
      </Stack>

      <Stack direction="row" spacing={41} sx={{ mt: 80 }}>
        <AgBody2>Contained</AgBody2>
        <Stack spacing={13}>
          <AgButton>Normal</AgButton>
          <Button variant="contained" sx={buttonContainedStyle}>Button</Button>
        </Stack>
        <Stack spacing={13}>
          <AgButton>HOVER</AgButton>
          <Button variant="contained" sx={buttonContainedHoverStyle} >Button</Button>
        </Stack>
      </Stack>


      <Box sx={{ mt: 108, mb: MARGIN_BOTTOM_H5 - 1 }}><AgHeading5 >Input</AgHeading5></Box>
      <Box sx={{ ml: -1 }}>
        <Box sx={{ mb: 8 }}><AgButton>Normal</AgButton></Box>
        <StyledTextField variant="outlined" placeholder="Keyword" sx={{ width: TEXT_FIELD_WIDTH }} />
        <Box sx={{ mt: 48, mb: 8 }}><AgButton>Focused</AgButton></Box>
        <StyledFocusTextField variant="outlined" sx={{ width: TEXT_FIELD_WIDTH }} value="Key " />
      </Box>

      <Box sx={{ mt: 137, mb: MARGIN_BOTTOM_H5 - 1 }}><AgHeading5 >Slider</AgHeading5></Box>
      <Box sx={{ width: 725 }} >
        <StyledSlider />
      </Box>
      <Box sx={{ width: 725 }} >
        <StyledSlider sx={{ width: 725 }} />
      </Box>

      <Box sx={{ height: 50 }}></Box>
    </Box>
  );
}

export default ComponentView;
