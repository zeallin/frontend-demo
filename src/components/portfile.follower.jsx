import React from 'react'
import { Box, Button, TextField, Typography, Grid, Tabs, Tab } from '@mui/material';
import PortfileItem from './portfile.item';




function PortfileFollower(props) {



    return (
        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={16} >
            <Grid item xs={12}>
                <PortfileItem />
            </Grid>
            <Grid item xs={12}>
                <PortfileItem />
            </Grid>
            <Grid item xs={12}>
                <PortfileItem />
            </Grid>
            <Grid item xs={12}>
                <PortfileItem />
            </Grid>
        </Grid>
    );
}

export default PortfileFollower;