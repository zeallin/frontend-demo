import React from 'react'
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
import TagItem from '../tag.item';

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box'



const RwdMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 25,
    marginRight: 26,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 210,
    marginRight: 0,
    marginTop: 54,
  }
}));

// const RwdMobileOnlyBox = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     display: 'block'
//   },
//   [theme.breakpoints.up('md')]: {
//     display: 'none'
//   }
// }));


// const RwdDesktopOnlyBox = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     display: 'none'

//   },
//   [theme.breakpoints.up('md')]: {
//     display: 'block'
//   }
// }));

// const RwdXlOnlyBox = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down('lg')]: {
//     display: 'none'

//   },
//   [theme.breakpoints.up('xl')]: {
//     display: 'block'
//   }
// }));


// const RwdBox = styled(Box, {
//   shouldForwardProp: (prop) => prop !== 'sx',
// })(({ sx, theme }) => ({

//   [theme.breakpoints.down('sm')]: {
//     width: '100%'
//   },
//   [theme.breakpoints.up('md')]: {
//     width: sx ? sx.width : 725
//   }
// }));

// const NotifyDotBox = styled(Box)(({ theme }) => ({
//   height: 7,
//   width: 7,
//   backgroundColor: param.PRIMARY_LIGHT_COLOR,
//   boxSizing: 'border-box',
//   border: '1px solid',
//   borderColor: param.MENU_BG_COLOR,
//   borderRadius: '50%'
// }));


function useIsWidthUp(breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.up(breakpoint));
}
function useIsWidthDown(breakpoint) {
  const theme = useTheme();
  return useMediaQuery(theme.breakpoints.down(breakpoint));
}

function HomeView() {

  let keyWord = '';

  const isSmallScreen = !useIsWidthUp("md");

  const [numResult, setNumResult] = React.useState(30);

  const onTextFieldChanged = (event) => {
    keyWord = event.target.value;
  };

  const onSliderChanged = (newVal) => {
    console.log(newVal);
    setNumResult(newVal);
  };

  return (
    <MainLayout pageType={PageType.TAGS}>

      <RwdMobileOnlyBox isSmallScreen={isSmallScreen}>
        <Grid container spacing={0} direction="column" alignItems="left"
          justifyContent="center" sx={{ height: 70, top: 0, position: 'sticky', backgroundColor: param.BG_COLOR }}>
          <Grid item xs>
            <Box sx={{ ml: 19 }} >
              <Stack direction="row" spacing={13} alignItems="center">
                <Link to="/">
                  <Box component="img" sx={{ height: 21.67, width: 12.77 }} src="back.svg" />
                </Link>
                <Typography variant="h5">Home Page</Typography>
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </RwdMobileOnlyBox>

      <RwdMainBox >
        <Typography sx={{ mb: 16, ml: isSmallScreen ? -6 : 0 }} variant={isSmallScreen ? "h5" : "h4"} >Tags</Typography>

        <Grid container spacing={24} sx={{ width: isSmallScreen ? 'auto' : 846 }}>
          <Grid item xs={isSmallScreen ? 6 : 2.4}>
            <TagItem />
          </Grid>
          <Grid item xs={isSmallScreen ? 6 : 2.4}>
            <TagItem />
          </Grid>
          <Grid item xs={isSmallScreen ? 6 : 2.4}>
            <TagItem />
          </Grid>
          <Grid item xs={isSmallScreen ? 6 : 2.4}>
            <TagItem />
          </Grid>
          <Grid item xs={isSmallScreen ? 6 : 2.4}>
            <TagItem />
          </Grid>
          <Grid item xs={isSmallScreen ? 6 : 2.4}>
            <TagItem />
          </Grid>

        </Grid>

      </RwdMainBox>
    </MainLayout >
  );
}

export default HomeView;
