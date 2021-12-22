import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Typography, Grid, } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import param from '../../themes/main/main.theme.param';
import Portfile from '../portfile';

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box'

import PageType from '../../types/page.type';

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
            <Box sx={{ ml: 21, mt: -2 }} >
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
            <Stack direction="row" spacing={50} sx={{ pt: 3 }}>
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

  const uiGetPortfile = (pageType, isMock) => {
    if (pageType == PageType.TAGS) return null;
    return (
      <RwdXlOnlyBox sx={{ width: 375, position: 'fixed', top: '0px', right: '0px', height: '100%' }}>
        <Portfile isMock={isMock} />
      </RwdXlOnlyBox>
    );
  }

  const isTagPage = props.pageType == PageType.TAGS;

  return (
    <React.Fragment>

      {uiGetMobileTopBar(props.pageType)}
      <RwdDesktopOnlyBox sx={{ width: 80, top: '0px', height: '100%', position: 'fixed', backgroundColor: param.MENU_BG_COLOR }}>

        <Grid container spacing={0} direction="column" alignItems="center"
          justifyContent="center" sx={{ height: 88, mt: -1 }}>
          <Grid item xs={3}>
            <Box sx={{ ml: 0 }} >
              <Link to="/" >
                <Typography variant="logo">LOGO</Typography>
              </Link>
            </Box>
          </Grid>
        </Grid>

        <Stack alignItems="center" spacing={22} sx={{ mt: 8, ml: 1 }}>
          <Box>
            <Link to="/" >
              <Stack direction="column" alignItems="center" >
                <Box component="img" sx={{ height: 24, width: 24 }} src={isTagPage ? 'menu-item.svg' : 'menu-item-sel.svg'} />
                <Typography variant="caption" sx={{ paddingLeft: '1px', visibility: isTagPage ? 'hidden' : 'visible' }}>Home</Typography>
              </Stack>
            </Link>
          </Box>
          <Box>
            <Link to="/tags" >
              <Stack direction="column" alignItems="center">
                <Box sx={{ height: 24 }}>
                  <NotifyDotBox sx={{ position: 'absolute', ml: 21, mt: -4, display: isTagPage ? 'none' : 'block' }}></NotifyDotBox>
                  <Box component="img" sx={{ height: 24, width: 24 }} src={isTagPage ? 'menu-item-sel.svg' : 'menu-item.svg'} />
                </Box>
                <Typography variant="caption" sx={{ mt: 1, paddingLeft: '1px', visibility: isTagPage ? 'visible' : 'hidden' }}>Tags</Typography>
              </Stack>
            </Link>
          </Box>
        </Stack>

      </RwdDesktopOnlyBox>

      {props.children}

      {uiGetMobileBottomMenu(props.pageType)}
      {uiGetPortfile(props.pageType, props.isMock)}

    </React.Fragment>
  );
}

export default MainLayout;
