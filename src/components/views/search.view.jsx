import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom';
import { Box, Button, Typography, Grid, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

import MainLayout from './main.layout'
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
import Util from '../../tools/util';

const RwdMainBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    marginLeft: 20,
    marginRight: 20,
    marginTop: 91,
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: 210,
    marginRight: 0,
    marginTop: 96,
  }
}));


function useQuery() {
  const { search } = useLocation();
  return React.useMemo(() => new URLSearchParams(search), [search]);
}

function SearchView(props) {
  let query = useQuery();

  const isSmallScreen = !ThemeHelper.useIsWidthUp("md");

  const [result, setResult] = useState([]);

  let pageIdx = Util.ensureParam(query.get('page'), '1');
  let numResult = Util.ensureParam(query.get('pageSize'), 30);
  let keyword = Util.ensureParam(query.get('keyword'), '');

  const getData = () => {


    fetch(process.env.REACT_APP_API_SEARCH_URL + `?page=${pageIdx}&pageSize=${numResult}&keyword=${keyword}`)
      .then(function (response) {
        return response.json();
      })
      .then(function (resData) {
        setResult(resData.data);
      });
  };

  useEffect(() => {

    if (props.isMock) {
      setResult(SearchSample.data.slice(0, 9));
    } else {
      // Load API
      getData();
    }
  }, []);

  return (
    <MainLayout pageType={PageType.SEARCH} isMock={props.isMock}>

      <RwdMobileOnlyBox >
        <MobileNav />
      </RwdMobileOnlyBox>

      <RwdMainBox >

        <RwdDesktopOnlyBox sx={{ ml: -44, mb: 23 }}>
          <Link to="/">
            <Stack direction="row" spacing={25} >
              <Box component="img" sx={{ height: 26, width: 26, mt: 6 }} src="back.svg" />
              <Typography sx={{ mt: '-3px !important' }} variant="h4" >Results</Typography>
            </Stack>
          </Link>
        </RwdDesktopOnlyBox>

        <RwdMobileOnlyBox>
          <Typography sx={{ mb: 24, ml: 0 }} variant="h5" >Results</Typography>
        </RwdMobileOnlyBox>

        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={isSmallScreen ? 40 : 30} sx={{ width: isSmallScreen ? 'auto' : 759 }}>

          {result.map((value, index) => {
            return (
              <Grid item xs={isSmallScreen ? 12 : 4}>
                <SearchResultItem data={value} isSmallScreen={isSmallScreen} />
              </Grid>
            );
          })}

        </Grid>
        <RwdDesktopOnlyBox sx={{ mt: 39 }}>
          <a href={'/search?page=' + (parseInt(pageIdx) + 1) + '&pageSize=' + numResult + '&keyword=' + keyword}>
            <Button variant="general" sx={{ width: 343 }} >More</Button>
          </a>
        </RwdDesktopOnlyBox>
      </RwdMainBox>
    </MainLayout >

  );
}

export default SearchView;
