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
import PageType from '../../types/page.type'
import MobileNav from '../mobile.nav';
import SearchResultItem from '../search.result.item';

import SearchSample from '../../data/search.sample.json';

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box'


import ThemeHelper from '../../tools/theme.helper';

const RwdMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 91,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 210,
    marginRight: 0,
    marginTop: 54,
  }
}));

// function useIsWidthUp(breakpoint) {
//   const theme = useTheme();
//   return useMediaQuery(theme.breakpoints.up(breakpoint));
// }
// function useIsWidthDown(breakpoint) {
//   const theme = useTheme();
//   return useMediaQuery(theme.breakpoints.down(breakpoint));
// }

function SearchView(props) {
  const pageIdx = 1;
  const numResult = 30;
  const keyword = '';

  const isSmallScreen = !ThemeHelper.useIsWidthUp("md");

  const [result, setResult] = useState([]);


  useEffect(() => {

    if (props.isMock) {
      setResult(SearchSample.data);
    } else {
      // Load API
    }
  }, []);

  return (
    <MainLayout pageType={PageType.SEARCH}>

      <RwdMobileOnlyBox >
        <MobileNav />
      </RwdMobileOnlyBox>

      <RwdMainBox >
        <Typography sx={{ mb: isSmallScreen ? 24 : 16, ml: isSmallScreen ? 0 : 0 }} variant={isSmallScreen ? "h5" : "h4"} >Results</Typography>

        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={isSmallScreen ? 40 : 34} sx={{ width: isSmallScreen ? 'auto' : 780, }}>

          {result.map((value, index) => {
            return (
              <Grid item xs={isSmallScreen ? 12 : 4}>
                <SearchResultItem data={value} isSmallScreen={isSmallScreen} />
              </Grid>
            );
          })}

        </Grid>
        <RwdDesktopOnlyBox sx={{ mt: 39 }}>
          <Link to={'search?page=' + (pageIdx + 1) + '&pageSize=' + numResult + '&keyword=' + keyword}>
            <Button variant="general" sx={{ width: 343 }} >Search</Button>
          </Link>
        </RwdDesktopOnlyBox>
      </RwdMainBox>
    </MainLayout >

  );
}

export default SearchView;
