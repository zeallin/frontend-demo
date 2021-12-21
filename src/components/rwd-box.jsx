import React from 'react'
import { Box, Button, TextField, Typography, Grid, Tabs, Tab } from '@mui/material';
import { styled } from '@mui/material/styles';

const RwdMobileOnlyBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'block'
  },
  [theme.breakpoints.up('md')]: {
    display: 'none'
  }
}));


const RwdDesktopOnlyBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('sm')]: {
    display: 'none'

  },
  [theme.breakpoints.up('md')]: {
    display: 'block'
  }
}));

const RwdXlOnlyBox = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('xl')]: {
    display: 'none'

  },
  [theme.breakpoints.up('xl')]: {
    display: 'block'
  }
}));


const RwdBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== 'sx',
})(({ sx, theme }) => ({

  [theme.breakpoints.down('sm')]: {
    width: '100%'
  },
  [theme.breakpoints.up('md')]: {
    width: sx ? sx.width : 725
  }
}));
export {
  RwdBox,
  RwdMobileOnlyBox,
  RwdDesktopOnlyBox,
  RwdXlOnlyBox
};
