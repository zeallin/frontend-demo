import React from 'react';
import { Typography } from '@mui/material';


const AgHeading4 = (props) => {
    return (
        <Typography variant="h4" >{props.children}</Typography>
    );
}

const AgHeading4Bold = (props) => {
    return (
        <Typography variant="h4" sx={{ fontWeight: 'bold' }}>{props.children}</Typography>
    );
}

const AgHeading5 = (props) => {
    return (
        <Typography variant="h5" >{props.children}</Typography>
    );
}

const AgBody2 = (props) => {
    return (
        <Typography variant="body2" >{props.children}</Typography>
    );
}

const AgButton = (props) => {
    return (
        <Typography variant="button" >{props.children}</Typography>
    );
}


export {
    AgHeading4,
    AgHeading4Bold,
    AgHeading5,
    AgBody2,
    AgButton
}