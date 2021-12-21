import React from 'react'
import { Router, Route, Link, hashHistory } from 'react-router-dom';
import { Box, Button, TextField, Typography, Grid, Tabs, Tab } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import MainLayout from './main.layout'
import param from '../../themes/main/main.theme.param';
import theme from '../../themes/main/main.theme';
import StyledSlider from '../styled-slider';
import Portfile from '../portfile';
import PageType from '../../types/page.type'

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box'



const RwdMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 20,
    marginRight: 20,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 210,
    marginRight: 0,
    marginTop: 54,
    width: 725
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


function HomeView() {

  // let keyWord = '';

  const [pageIdx, setPageIfdx] = React.useState(1);
  const [numResult, setNumResult] = React.useState(30);
  const [keyword, setKeyword] = React.useState('');

  const onTextFieldChanged = (event) => {
    // keyWord = event.target.value;
    setKeyword(event.target.value);
  };

  const onSliderChanged = (newVal) => {
    console.log(newVal);
    setNumResult(newVal);
  };

  return (
    <MainLayout pageType={PageType.HOME}>
      <RwdMainBox >
        <Typography sx={{ mb: 16 }} variant="h5" >Search</Typography>
        <RwdBox>
          <TextField variant="outlined" placeholder="Keyword" fullWidth onChange={onTextFieldChanged} />
        </RwdBox>
        <RwdDesktopOnlyBox >
          <Box sx={{ height: '1px', backgroundColor: '#FFFFFF', opacity: 0.1, mt: 30, mb: 30 }}></Box>
        </RwdDesktopOnlyBox>
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
          <Link to={'search?page=' + pageIdx + '&pageSize=' + numResult + '&keyword=' + keyword}>
            <Button variant="general" fullWidth >Search</Button>
          </Link>
        </RwdBox>
      </RwdMainBox>
    </MainLayout>
  );
}

export default HomeView;
