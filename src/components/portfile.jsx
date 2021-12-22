import React from 'react'
import { Box, Typography, Tabs, Tab } from '@mui/material';
import PortfileFollower from './portfile.follower';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other} >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}


function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

function DynamicCSS(props) {

    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);

    };
    return (
        <Box sx={{ width: '100%', pt: 17 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Followers" {...a11yProps(0)} />
                    <Tab label="Following" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0} >
                <Box sx={{ pl: 13, pr: 16, pt: 31, height: 'calc(100vh - 100px)', overflowY: 'scroll' }}>
                    <PortfileFollower isMock={props.isMock} />
                </Box>
            </TabPanel >
            <TabPanel value={value} index={1} >
                <Box sx={{ pl: 13, pr: 16, pt: 31, height: 'calc(100vh - 100px)', overflowY: 'scroll' }}>
                    <PortfileFollower isFollowing={true} isMock={props.isMock} />
                </Box>
            </TabPanel >
        </Box >
    );
}

export default DynamicCSS;