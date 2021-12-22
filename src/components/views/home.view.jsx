import React from 'react'
import { Link } from 'react-router-dom';
import { Box, Button, TextField, Typography } from '@mui/material';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';

import MainLayout from './main.layout'
import StyledSlider from '../styled-slider';
import PageType from '../../types/page.type'

import {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
} from '../rwd-box';

import ThemeHelper from '../../tools/theme.helper';


const RwdMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 20,
    marginRight: 20,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 210,
    marginRight: 0,
    marginTop: 55,
    width: 725
  }
}));


function HomeView(props) {

  const isSmallScreen = !ThemeHelper.useIsWidthUp("md");

  const [pageIdx, setPageIdx] = React.useState(1);
  const [numResult, setNumResult] = React.useState(30);
  const [keyword, setKeyword] = React.useState('');

  const onTextFieldChanged = (event) => {
    setKeyword(event.target.value);
  };

  const onSliderChanged = (newVal) => {
    setNumResult(newVal);
  };

  return (
    <MainLayout pageType={PageType.HOME} isMock={props.isMock}>
      <RwdMainBox >
        <Typography sx={{ mb: 16, mt: isSmallScreen ? 1 : 0 }} variant="h5" >Search</Typography>
        <RwdBox sx={{ mt: isSmallScreen ? -1 : 19 }}>
          <TextField variant="outlined" placeholder="Keyword" fullWidth onChange={onTextFieldChanged} />
        </RwdBox>
        <RwdDesktopOnlyBox  >
          <Box sx={{ height: '1px', backgroundColor: '#FFFFFF', opacity: 0.1, mt: 29, mb: 31 }}></Box>
        </RwdDesktopOnlyBox>
        <Typography sx={{ mt: 29, mb: isSmallScreen ? 4 : 8 }} variant="h5" ># of results per page</Typography>

        <Stack direction="row" spacing={10.5} >
          <Typography variant="h3_bold">{numResult}</Typography>
          <Box sx={{ pt: 33 }}>
            <Typography variant="subtitle" >result</Typography>
          </Box>
        </Stack>
        <RwdBox sx={{ mt: -3, ml: isSmallScreen ? -4 : 1, width: isSmallScreen ? '100%' : 726 }}>
          <StyledSlider defaultValue={15} onChangeCommitted={onSliderChanged} />
        </RwdBox>
        <Box sx={{ visibility: isSmallScreen ? 'hidden' : 'visible', height: '1px', backgroundColor: '#FFFFFF', opacity: 0.1, mt: 23 }}></Box>
      </RwdMainBox>

      <RwdMainBox sx={{ bottom: isSmallScreen ? 90 : 87, position: 'fixed', width: '100%', pr: 40 }}>
        <Box sx={{ visibility: isSmallScreen ? 'visible' : 'hidden', height: '1px', backgroundColor: '#FFFFFF', opacity: 0.1, mb: 80 }}></Box>
        <RwdBox sx={{ width: 343 }}>
          <Link to={'search?page=' + pageIdx + '&pageSize=' + numResult + '&keyword=' + keyword}>
            <Button variant="general" fullWidth >Search</Button>
          </Link>
        </RwdBox>
      </RwdMainBox>
    </MainLayout >
  );
}

export default HomeView;
