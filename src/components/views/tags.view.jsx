import React, { useState, useEffect } from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab } from '@mui/material';
import { ThemeProvider, useTheme, createTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import MainLayout from './main.layout'
import param from '../../themes/main/main.theme.param';
import theme from '../../themes/main/main.theme';
import StyledSlider from '../styled-slider';
import Portfile from '../portfile';
import PageType from '../../types/page.type';
import MobileNav from '../mobile.nav';
import TagItem from '../tag.item';

import TagsSample from '../../data/tags.sample.json';

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box'

import ThemeHelper from '../../tools/theme.helper';

const RwdMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 25,
    marginRight: 26,
    marginTop: 91,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 210,
    marginRight: 0,
    marginTop: 54,
  }
}));


function TagsView(props) {

  let keyWord = '';

  const isSmallScreen = !ThemeHelper.useIsWidthUp("md");

  const [result, setResult] = useState([]);

  useEffect(() => {

    if (props.isMock) {
      setResult(TagsSample);
    } else {
      // Load API
    }
  }, []);

  return (
    <MainLayout pageType={PageType.TAGS}>

      <RwdMobileOnlyBox >
        <MobileNav />
      </RwdMobileOnlyBox>

      <RwdMainBox >

        <Typography sx={{ mb: isSmallScreen ? 23 : 16, ml: isSmallScreen ? -5 : 0 }} variant={isSmallScreen ? "h5" : "h4"} >Tags</Typography>

        <Grid container spacing={24} sx={{ width: isSmallScreen ? 'auto' : 846 }}>

          {result.map((value, index) => {
            return (
              <Grid item xs={isSmallScreen ? 6 : 2.4}>
                <TagItem data={value} isSmallScreen={isSmallScreen} />
              </Grid>
            );
          })}


        </Grid>

      </RwdMainBox>
    </MainLayout >
  );
}

export default TagsView;
