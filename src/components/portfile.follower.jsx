import React, { useState, useEffect } from 'react'
import { Grid } from '@mui/material';
import PortfileItem from './portfile.item';
import FollowerSample from '../data/follower.sample.json';
import FollowingSample from '../data/following.sample.json';


function PortfileFollower(props) {

    const isFollowing = props.isFollowing == true;
    const [result, setResult] = useState([]);

    const getData = () => {
        fetch(isFollowing ?
            process.env.REACT_APP_API_FOLLOWING_URL :
            process.env.REACT_APP_API_FOLLOWER_URL)
            .then(function (response) {
                return response.json();
            })
            .then(function (resData) {
                setResult(resData.data);
            });
    };

    useEffect(() => {
        if (props.isMock) {
            if (isFollowing) {
                setResult(FollowingSample.data);
            } else {
                setResult(FollowerSample.data);
            }

        } else {
            // Load API
            getData();
        }
    }, []);

    return (
        <Grid container justifyContent="flex-start" alignItems="flex-start" spacing={18} >
            {result.map((value, index) => {
                return (
                    <Grid item xs={12}>
                        <PortfileItem data={value} isMock={props.isMock} />
                    </Grid>
                );
            })}
        </Grid>
    );
}

export default PortfileFollower;