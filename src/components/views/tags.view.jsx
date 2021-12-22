import React, { useState, useEffect } from 'react'
import { Box, Typography, Grid } from '@mui/material';
import { styled } from '@mui/material/styles';

import MainLayout from './main.layout'
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
    marginLeft: 337,
    marginRight: 0,
    marginTop: 81,
  }
}));


function TagsView(props) {

  const isSmallScreen = !ThemeHelper.useIsWidthUp("md");

  const [result, setResult] = useState([]);

  const getData = () => {
    fetch(process.env.REACT_APP_API_TAG_URL)
      .then(function (response) {
        return response.json();
      })
      .then(function (resData) {
        setResult(resData);
      });
  };

  useEffect(() => {

    if (props.isMock) {
      setResult(TagsSample);
    } else {
      // Load API
      getData();
    }
  }, []);

  return (
    <MainLayout pageType={PageType.TAGS} isMock={props.isMock}>

      <RwdMobileOnlyBox >
        <MobileNav />
      </RwdMobileOnlyBox>

      <RwdMainBox >

        <Typography sx={{ mb: isSmallScreen ? 23 : 23, ml: isSmallScreen ? -5 : 0 }} variant={isSmallScreen ? "h5" : "h4"} >Tags</Typography>

        <Grid container spacing={24} sx={{ width: isSmallScreen ? 'auto' : 870 }}>
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
