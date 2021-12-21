import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import param from '../../themes/main/main.theme.param';
import theme from '../../themes/main/main.theme';
import StyledSlider from '../styled-slider';
import Portfile from '../portfile';

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box'
import PageType from '../../types/page.type';



// const RwdMainBox = styled(Box)(({ theme }) => ({
//   [theme.breakpoints.down('sm')]: {
//     marginLeft: 20,
//     marginRight: 20,
//   },
//   [theme.breakpoints.up('md')]: {
//     marginLeft: 210,
//     marginRight: 0,
//     marginTop: 54,
//   }
// }));

const NotifyDotBox = styled(Box)(({ theme }) => ({
  height: 7,
  width: 7,
  backgroundColor: param.PRIMARY_LIGHT_COLOR,
  boxSizing: 'border-box',
  border: '1px solid',
  borderColor: param.MENU_BG_COLOR,
  borderRadius: '50%'
}));


function MainLayout(props) {


  const uiGetMobileTopBar = (pageType) => {
    if (pageType != PageType.HOME) return null;
    return (
      <RwdMobileOnlyBox>
        <Grid container spacing={0} direction="column" alignItems="left"
          justifyContent="center" sx={{ height: 70, top: 0, position: 'sticky', backgroundColor: param.BG_COLOR }}>
          <Grid item xs={3}>
            <Box sx={{ ml: 21 }} >
              <Link to="/">
                <Typography variant="logo">LOGO</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </RwdMobileOnlyBox>
    );
  }

  const uiGetMobileBottomMenu = (pageType) => {
    if (pageType != PageType.HOME) return null;
    return (
      <RwdMobileOnlyBox>
        <Grid container spacing={0} direction="column" alignItems="center"
          justifyContent="center" sx={{ height: 66, bottom: 0, position: 'fixed', backgroundColor: param.MENU_BG_COLOR }}>
          <Grid item xs={3}>
            <Stack direction="row" spacing={50}>
              <Link to="/" >
                <Box component="img" sx={{ height: 24, width: 24 }} src="menu-item-sel.svg" />
              </Link>
              <Link to="/tags" >
                <Box component="img" sx={{ height: 24, width: 24 }} src="menu-item.svg" />
              </Link>
            </Stack>
          </Grid>
        </Grid>
      </RwdMobileOnlyBox>
    );
  }

  const uiGetPortfile = (pageType) => {
    if (pageType == PageType.TAGS) return null;
    return (
      <RwdXlOnlyBox sx={{ width: 375, position: 'fixed', top: '0px', right: '0px', height: '100%' }}>
        <Portfile />
      </RwdXlOnlyBox>
    );
  }

  const isTagPage = props.pageType == PageType.TAGS;

  return (
    <React.Fragment>

      {uiGetMobileTopBar(props.pageType)}
      <RwdDesktopOnlyBox sx={{ width: 80, top: '0px', height: '100%', position: 'fixed', backgroundColor: param.MENU_BG_COLOR }}>

        <Grid container spacing={0} direction="column" alignItems="center"
          justifyContent="center" sx={{ height: 88 }}>
          <Grid item xs={3}>
            <Box sx={{ ml: 0 }} >
              <Typography variant="logo">LOGO</Typography>
            </Box>
          </Grid>
        </Grid>

        <Stack alignItems="center" spacing={50}>
          <Box>
            <Link to="/" >
              <Stack direction="column" alignItems="center">
                <Box component="img" sx={{ height: 24, width: 24 }} src={isTagPage ? 'menu-item.svg' : 'menu-item-sel.svg'} />
                <Typography variant="caption" sx={{ visibility: isTagPage ? 'hidden' : 'visible' }}>Home</Typography>
              </Stack>
            </Link>
          </Box>
          <Box>
            <Link to="/tags" >
              <Stack direction="column" alignItems="center">
                <Box>
                  <NotifyDotBox sx={{ position: 'absolute', ml: 24, mt: -1, display: isTagPage ? 'none' : 'block' }}></NotifyDotBox>
                  <Box component="img" sx={{ height: 24, width: 24 }} src={isTagPage ? 'menu-item-sel.svg' : 'menu-item.svg'} />
                </Box>
                <Typography variant="caption" sx={{ visibility: isTagPage ? 'visible' : 'hidden' }}>Tags</Typography>
              </Stack>
            </Link>
          </Box>
        </Stack>

      </RwdDesktopOnlyBox>


      {/* <RwdMainBox >
        <Typography sx={{ mb: 16 }} variant="h5" >Search</Typography>
        <RwdBox>
          <TextField variant="outlined" placeholder="Keyword" fullWidth onChange={onTextFieldChanged} />
        </RwdBox>
        <Typography sx={{ mt: 28, mb: 16 }} variant="h5" ># of results per page</Typography>

        <Stack direction="row" spacing={13} alignItems="flex-end">
          <Typography variant="h3_bold">{numResult}</Typography>
          <Typography variant="subtitle">result</Typography>

        </Stack>
        <RwdBox >
          <StyledSlider defaultValue={15} onChangeCommitted={onSliderChanged} />
        </RwdBox>
      </RwdMainBox>

      <RwdMainBox sx={{ bottom: 87, position: 'fixed', width: '100%', pr: 40 }}>
        <Box sx={{ height: '1px', backgroundColor: '#FFFFFF', opacity: 0.1, mb: 80 }}></Box>
        <RwdBox sx={{ width: 343 }}>
          <Button variant="general" fullWidth >Search</Button>
        </RwdBox>
      </RwdMainBox> */}

      {props.children}

      {uiGetMobileBottomMenu(props.pageType)}
      {uiGetPortfile(props.pageType)}






    </React.Fragment>
  );
}

export default MainLayout;
