import React from 'react'
import { Box, Button, TextField, Typography, Grid, Tabs, Tab } from '@mui/material';
import PortfileFollower from './portfile.follower';
import PortfileFollowing from './portfile.following';

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

// TabPanel.propTypes = {
//   children: PropTypes.node,
//   index: PropTypes.number.isRequired,
//   value: PropTypes.number.isRequired,
// };

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
        <Box sx={{
            width: '100%', pt: 32,
            // xl: { display: 'none' },
            // lg: { display: 'none' },
            // md: { display: 'none' },
            // sm: { display: 'none' },
            // xs: { display: 'none' }
        }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                <Tabs value={value} variant="fullWidth" onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Followers" {...a11yProps(0)} />
                    <Tab label="Following" {...a11yProps(1)} />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <Box sx={{ pl: 16, pr: 16, pt: 32 }}>
                    <PortfileFollower />
                </Box>
            </TabPanel>
            <TabPanel value={value} index={1}>
                <Box sx={{ pl: 16, pr: 16, pt: 32 }}>
                    <PortfileFollowing />
                </Box>
            </TabPanel>
        </Box>
    );
}

export default DynamicCSS;